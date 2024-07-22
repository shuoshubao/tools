<!--
 * @Author: shuoshubao
 * @Date: 2024-07-21 01:46:48
 * @LastEditors: shuoshubao
 * @LastEditTime: 2024-07-22 18:21:12
 * @Description: dox 解析
-->
<template>
    <el-card
        shadow="hover"
        v-for="(item, index) in CommentsList"
        :key="index"
        :id="item.name"
        :style="`margin-top: ${index === 0 ? 0 : 30}px`"
        class="item-card"
    >
        <template #header>
            <span>{{ item.name }}</span>
            <span>{{ item.callText }}</span>
            <div class="el-card-extra">
                <el-icon @click="handleShowCode(item)">
                    <View />
                </el-icon>
            </div>
        </template>
        <div v-html="item.description" />
        <h4>参数</h4>
        <div v-for="(item2, index2) in item.Arguments" :key="index2">
            <el-space>
                <strong v-html="['(', delHtmlTag(item2.typesDescription), ')'].join('')" />
                <span>:</span>
                <span v-html="delHtmlTag(item2.description)" />
            </el-space>
        </div>
        <h4>返回值</h4>
        <div v-for="(item2, index2) in item.Returns" :key="index2">
            <el-space>
                <strong v-html="item2.name" />
                <strong v-html="['(', delHtmlTag(item2.typesDescription), ')'].join('')" />
                <span>:</span>
                <span v-html="delHtmlTag(item2.description)" />
            </el-space>
        </div>
        <h4>示例</h4>
        <div v-for="(item2, index2) in item.Examples" :key="index2" class="item-example">
            <pre><code v-html="hljs.highlight(item2.string.trim(), { language: 'js' }).value" class="hljs language-js" /></pre>
        </div>
    </el-card>
    <el-dialog v-model="sourceCodeDialog.visible" :title="sourceCodeDialog.title" top="20px">
        <pre class="modal-source-code"><code v-html="sourceCodeDialog.code" /></pre>
    </el-dialog>
</template>

<script setup>
import hljs from 'highlight.js';
import { filter, map } from 'lodash';
import { defineProps, ref } from 'vue';

const props = defineProps(['data']);

const sourceCodeDialog = ref({
    visible: false,
    code: ''
});

const delHtmlTag = (str = '') => {
    if (str.startsWith('<p>')) {
        return str.slice(3, -4).replaceAll('\n', '<br />');
    }
    return str.replaceAll('\n', '<br />');
};

const CommentsList = ref(
    props.data
        .filter(item => {
            return item.ctx;
        })
        .map(item => {
            const {
                ctx: { name },
                description,
                tags
            } = item;

            const Arguments = filter(tags, { type: 'param' });

            const See = filter(tags, { type: 'see' });

            const Returns = filter(tags, { type: 'return' });

            const Examples = filter(tags, { type: 'example' });

            const paramsText = map(Arguments, 'name').join(', ');

            const callText = `(${paramsText})`;

            return {
                ...item,
                name,
                callText,
                description: delHtmlTag(description.summary),
                Arguments,
                See,
                Returns,
                Examples
            };
        })
);

const handleShowCode = item => {
    sourceCodeDialog.value.visible = true;
    sourceCodeDialog.value.title = item.name;
    sourceCodeDialog.value.code = hljs.highlight(item.code.trim(), { language: 'js' }).value;
};
</script>

<style lang="scss">
@media (min-width: 960px) {
    .VPContent {
        .VPDoc {
            padding: 20px;
            & > .container {
                & > .content {
                    padding: 0;
                }
            }
        }
    }
}
</style>

<style lang="scss" scoped>
.item-card {
    &:target {
        box-shadow: var(--el-box-shadow-light);
    }
    :deep(.el-card__header) {
        display: flex;
        align-items: center;
        padding: 10px 20px;
    }
    :deep(.el-card__body) {
        padding: 10px 20px;
    }
    .el-card-extra {
        display: flex;
        align-items: center;
        margin-left: auto;
    }
    h4 {
        margin: 12px 0 6px;
    }
    .item-example {
        pre {
            margin: 0;
            code {
                padding: 10px;
            }
        }
        & + .item-example {
            border-top: 1px solid #dcdcdc;
        }
    }
}

.modal-source-code {
    max-height: calc(100vh - 115px);
    margin: 0;
    padding: 10px;
    overflow-y: auto;
    color: #ddd;
    font-size: 14px;
    line-height: 20px;
    background-color: #283646;
}
</style>
