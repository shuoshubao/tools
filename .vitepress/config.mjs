import { resolve } from 'path';
import { defineConfig } from 'vitepress';
import { name } from '../package.json';
import { DocsSidebar, TempDocsDir } from './init';

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
    rewrites: {
        [`${TempDocsDir}/:page`]: 'docs/:page'
    },
    themeConfig: {
        logo: 'https://vuejs.org/logo.svg',
        nav: [
            {
                text: '简介',
                link: '/'
            },
            {
                text: '文档',
                link: '/docs/date',
                activeMatch: '/docs/'
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
            '/docs/': {
                base: '/docs/',
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
