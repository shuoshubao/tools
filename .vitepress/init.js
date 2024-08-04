import { parseComments } from 'dox';
import { readFileSync, writeFileSync } from 'fs';
import { ensureDirSync } from 'fs-extra';

// 缓存目录, 自动生成文档
export const TempDocsDir = 'vitepress-docs';

const DocsSidebar = [
    { value: 'date', label: '日期' },
    { value: 'enum', label: '枚举' },
    { value: 'route', label: '路由' },
    { value: 'decimal', label: '浮点数' },
    { value: 'dom', label: 'DOM操作' },
    { value: 'rules', label: '表单校验' },
    { value: 'types', label: '类型' },
    { value: 'memoize', label: '缓存' },
    { value: 'dev', label: '调试' },
    { value: 'data', label: '数据' },
    { value: 'react', label: 'React' },
    { value: 'vue', label: 'Vue' },
    { value: 'formatters', label: '格式化' },
    { value: 'numeral', label: '数值' },
    { value: 'string', label: '字符串处理' },
    { value: 'image', label: '图片' }
].map(v => {
    const file = `lib/${v.value}.js`;
    const content = readFileSync(file, 'utf-8');
    return {
        ...v,
        comments: parseComments(content.replaceAll('export ', ''))
    };
});

ensureDirSync(`./${TempDocsDir}`);

writeFileSync(`./${TempDocsDir}/dox.js`, `export default  ${JSON.stringify(DocsSidebar, ' ', 4)}`);

DocsSidebar.forEach(item => {
    const { value, comments } = item;

    const dataFile = `${TempDocsDir}/${value}.dox.json`;

    const mdFile = `${TempDocsDir}/${value}.md`;

    const mdContent = `
---
aside: false
---

<script setup>
import { ref } from 'vue';
import data from './${value}.dox.json';

const comments = ref(data)
</script>

<Dox :data="comments" />
`;

    writeFileSync(dataFile, JSON.stringify(comments, ' ', 4));

    writeFileSync(mdFile, mdContent.trimStart());
});

export { DocsSidebar };
