import * as ElementPlusIconsVue from '@element-plus/icons-vue';
import ElementPlus from 'element-plus';
import DefaultTheme from 'vitepress/theme';
import Dox from './Dox.vue';

const ElementPlusUrl = 'https://registry.npmmirror.com/element-plus/2.7.7/files/dist/index.full.min.js';

const loadScript = src => {
    return new Promise((resolve, reject) => {
        const scriptEl = document.createElement('script');
        scriptEl.setAttribute('src', src);
        scriptEl.onload = () => {
            resolve();
        };
        document.head.append(scriptEl);
    });
};

export default {
    ...DefaultTheme,
    async enhanceApp({ app }) {
        // window.Vue = Vue;
        // await loadScript(ElementPlusUrl);
        // app.use(window.ElementPlus);
        app.use(ElementPlus);
        Object.entries(ElementPlusIconsVue).forEach(([key, component]) => {
            app.component(key, component);
        });
        app.component('Dox', Dox);
    }
};
