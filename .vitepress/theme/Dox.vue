<!--
 * @Author: shuoshubao
 * @Date: 2024-07-21 01:46:48
 * @LastEditors: shuoshubao
 * @LastEditTime: 2024-07-21 19:14:58
 * @Description: dox 解析
-->
<template>
    <el-card shadow="hover" v-for="(item, index) in CommentsList" :key="index" :style="`margin-top: ${index === 0 ? 0 : 30}px`">
        <template #header>
            <span>{{ item.funcName }}({{ item.callText }})</span>
            <div style="float: right">
                <el-icon @click="handleShowCode(item)">
                    <View />
                </el-icon>
            </div>
        </template>
    </el-card>
    <el-dialog v-model="sourceCodeDialog.visible" :title="sourceCodeDialog.title">
        <pre class="modal-source-code"><code v-html="sourceCodeDialog.code" /></pre>
    </el-dialog>
</template>

<script setup>
import hljs from 'highlight.js';
import lodash from 'lodash';
import { defineProps, ref } from 'vue';

const { filter, map } = lodash;

const props = defineProps(['data']);

const sourceCodeDialog = ref({
    visible: false,
    code: ''
});

const CommentsList = ref(
    props.data.map(item => {
        const { ctx, tags } = item;
        return {
            ...item,
            funcName: ctx.name,
            callText: map(filter(tags, { type: 'param' }), 'name').join(', ')
        };
    })
);

const handleShowCode = item => {
    sourceCodeDialog.value.visible = true;
    sourceCodeDialog.value.title = item.funcName;
    sourceCodeDialog.value.code = hljs.highlight(item.code.trim(), { language: 'js' }).value;
};
</script>

<style scoped>
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
