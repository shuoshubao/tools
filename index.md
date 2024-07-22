---
layout: home

hero:
    name: '工具库'
    text: '超实用的工具方法集合'
    tagline: 基于大量真实业务和组件库提炼, 没有花里胡哨的功能
    actions:
        - theme: brand
          text: GitHub
          link: https://github.com/shuoshubao/tools
        - theme: alt
          text: Npm
          link: https://www.npmjs.com/package/@nbfe/tools
        - theme: alt
          text: 单测报告
          link: https://shuoshubao.github.io/tools/coverage/

features:
    - title: 轻量级
      details: 基于 loadash, 不造轮子
    - title: 懂业务
      details: 完全基于业务和组件库提炼, 没有花里胡哨的功能
    - title: 优雅
      details: 让你用一次就记得住的方法名
---

## 安装

```sh
npm i @nbfe/tools
```

## 使用

```javascript
import { search, getLabelByValue, classNames, copyText } from '@nbfe/tools';
```

## 调试

本文档为了方便调试, 特地将工具包打包成 umd 模式, 直接注入到了页面中, 挂载到了 window.tools

你可以直接打开浏览器控制台, 输入 `Object.keys(tools)` 即可看到所有的方法

例如, 输入 `tools.classNames('a', { b: true, c: 2 < 1 })`, 将会得到 `'a b'`

## runkit

传送门: [runkit.com](https://runkit.com/)

由于 _runkit_ 运行环境是 _Nodejs_, 因此工具库中的很多 _browser_ 方法调试运行会报错. 此时就推荐在浏览器命令行直接调用当然, 工具库中部分方法可同时运行在 _Nodejs_ 和 _browser_ 环境中

<script setup>
import { getCurrentInstance, ref, onMounted } from 'vue';

const { $pkg: pkg } = getCurrentInstance()?.appContext.config.globalProperties;

const toolsNumber = ref(0);


onMounted(() => {
    toolsNumber.value=Object.keys(window.tools).length - 1;
});
</script>

## 工具库信息

<el-descriptions :column="1" border>
    <el-descriptions-item label="名称">{{ pkg.name }}</el-descriptions-item>
    <el-descriptions-item label="版本号">{{ pkg.version }}</el-descriptions-item>
    <el-descriptions-item label="测试框架">
        <el-link href="https://github.com/avajs/ava">ava</el-link>
    </el-descriptions-item>
    <el-descriptions-item label="函数数量">{{ toolsNumber }}</el-descriptions-item>
</el-descriptions>
