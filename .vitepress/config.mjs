import { parseComments } from 'dox';
import { readFileSync, writeFileSync } from 'fs';
import { ensureDirSync } from 'fs-extra';
import { resolve } from 'path';
import { defineConfig } from 'vitepress';
import { name } from '../package.json';

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

ensureDirSync('./documents');

writeFileSync('./documents/dox.js', `export default  ${JSON.stringify(DocsSidebar, ' ', 4)}`);

DocsSidebar.forEach(item => {
    const { value, comments } = item;

    const dataFile = `documents/${value}.dox.json`;

    const mdFile = `documents/${value}.md`;

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

const isProduction = process.env.NODE_ENV === 'production';

export default defineConfig({
    base: isProduction ? '/tools/' : '/',
    outDir: './docs',
    title: '工具库',
    description: '超实用的工具方法集合',
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: 'https://vuejs.org/logo.svg'
            }
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://registry.npmmirror.com/element-plus/2.7.7/files/dist/index.css'
            }
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://registry.npmmirror.com/highlight.js/11.7.0/files/styles/vs2015.css'
            }
        ]
    ],
    themeConfig: {
        logo: 'https://vuejs.org/logo.svg',
        nav: [
            {
                text: '简介',
                link: '/'
            },
            {
                text: '文档',
                link: '/documents/date',
                activeMatch: '/documents/'
            },
            {
                text: '贡献指南',
                link: '/CONTRIBUTING'
            },
            {
                text: '更新日志',
                link: '/CHANGELOG'
            }
        ],

        sidebar: {
            '/documents/': {
                base: '/documents/',
                items: DocsSidebar.map(item => {
                    const { label, value, comments } = item;
                    return {
                        text: label,
                        link: value,
                        collapsed: false,
                        items: comments.map(item2 => {
                            const functionName = item2.ctx.name;
                            return {
                                text: functionName,
                                link: [value, functionName].join('#')
                            };
                        })
                    };
                })
            }
        },

        footer: {
            message: '基于 MIT 许可发布',
            copyright: `版权所有 © 2019-${new Date().getFullYear()} 硕鼠宝`
        },

        docFooter: {
            prev: false,
            next: false
        },

        outline: {
            label: '大纲'
        },

        lastUpdated: {
            text: '最后更新于',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'medium'
            }
        },

        langMenuLabel: '多语言',
        returnToTopLabel: '回到顶部',
        sidebarMenuLabel: '菜单',
        darkModeSwitchLabel: '主题',
        lightModeSwitchTitle: '切换到浅色模式',
        darkModeSwitchTitle: '切换到深色模式',
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/shuoshubao/tools'
            }
        ],
        search: {
            provider: 'local'
        }
    },
    vite: {
        resolve: {
            alias: {
                lodash: resolve(__dirname, '../node_modules/lodash-es'),
                [name]: resolve(__dirname, '../lib')
            }
        }
    }
});
