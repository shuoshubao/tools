/*
 * @Author: shuoshubao
 * @Date: 2024-07-21 19:29:25
 * @LastEditors: shuoshubao
 * @LastEditTime: 2024-07-22 13:02:12
 * @Description:
 */
import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import DefaultTheme from 'vitepress/theme';
import * as tools from '../../lib';
import pkg from '../../package.json';
import Dox from './Dox.vue';

export default {
    ...DefaultTheme,
    async enhanceApp({ app }) {
        app.config.globalProperties.$pkg = pkg;

        app.use(ElementPlus);

        Object.entries(ElementPlusIconsVue).forEach(([key, component]) => {
            app.component(key, component);
        });

        app.component('Dox', Dox);

        if (typeof window !== 'undefined') {
            window.tools = tools;
        }
    }
};
