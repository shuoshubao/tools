window.ydoc_plugin_search_json = {
  "使用": [
    {
      "title": "安装使用调试runkit",
      "content": "npm i @nbfe/toolsimport { search, getLabelByValue, classNames, copyText } from '@nbfe/tools';本文档为了方便大家调试, 特地将工具包打包成umd模式, 直接注入到了页面中, 挂载到了 windows.tools你可以直接打开浏览器控制台, 输入 Object.keys(tools) 即可看到所有的方法例如, 输入 tools.classNames('a', { b: true, c: 2 < 1 }), 将会得到 'a b'传送门: runkit.com由于 runkit 运行环境是 Nodejs, 因此工具库中的很多 browser 方法调试运行会报错. 此时就推荐在浏览器命令行直接调用当然, 工具库中部分方法可同时运行在 Nodejs 和 browser 环境中",
      "url": "/install.html",
      "children": []
    }
  ],
  "文档": [
    {
      "title": "",
      "content": "",
      "url": "/documents/date.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/enum.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/route.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/qs.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/decimal.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/dom.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/rules.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/types.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/dev.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/data.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/react.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/vue.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/formatters.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/numeral.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/html.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/string.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/ua.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/image.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/file.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/Uint8Array.html",
      "children": []
    },
    {
      "title": "",
      "content": "",
      "url": "/documents/antd-locale.html",
      "children": []
    }
  ],
  "贡献指南": [
    {
      "title": "注释开发单测打包",
      "content": "代码注释必须严格遵循 JSDoc 规范执行 npm run docs:dev // 启动 ydoc 服务, 浏览器打开 http://127.0.0.1:9999\n执行 docs:gernerate // 监听 lib 目录的修改, 实时解析注释生成文档\n为保证工具方法的质量, 每个方法必须编写单测. 本项目采用的测试库是 ava项目采用的构建工具是 rollup",
      "url": "/CONTRIBUTING.html",
      "children": []
    }
  ],
  "更新日志": [
    {
      "title": "Change Log0.2.0 (2021-03-22)",
      "content": "All notable changes to this project will be documented in this file.See Conventional Commits for commit guidelines.",
      "url": "/CHANGELOG.html",
      "children": [
        {
          "title": "0.2.12 (2021-11-17)",
          "url": "/CHANGELOG.html#0.2.12-2021-11-17",
          "content": "0.2.12 (2021-11-17)"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.2.12-2021-11-17-features",
          "content": "Features增加方法getTooltipHtml; 转换简写的链接 (3a5cdf6)\n"
        },
        {
          "title": "0.2.11 (2021-10-29)",
          "url": "/CHANGELOG.html#0.2.11-2021-10-29",
          "content": "0.2.11 (2021-10-29)"
        },
        {
          "title": "Bug Fixes",
          "url": "/CHANGELOG.html#0.2.11-2021-10-29-bug-fixes",
          "content": "Bug Fixesimage onerror (b4a7f50)\n"
        },
        {
          "title": "0.2.10 (2021-09-02)",
          "url": "/CHANGELOG.html#0.2.10-2021-09-02",
          "content": "0.2.10 (2021-09-02)"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.2.10-2021-09-02-features",
          "content": "FeaturesgetAntdLocaleZhCN antd 中文语言包 (15ab0f1)\n"
        },
        {
          "title": "0.2.9 (2021-08-16)",
          "url": "/CHANGELOG.html#0.2.9-2021-08-16",
          "content": "0.2.9 (2021-08-16)Note: Version bump only for package @nbfe/tools"
        },
        {
          "title": "0.2.8 (2021-08-11)",
          "url": "/CHANGELOG.html#0.2.8-2021-08-11",
          "content": "0.2.8 (2021-08-11)"
        },
        {
          "title": "Bug Fixes",
          "url": "/CHANGELOG.html#0.2.8-2021-08-11-bug-fixes",
          "content": "Bug Fixes写错了 padding未生效 (80d372e)\n移除方法convertObjectToArray,convertArrayToObject; 增加注释 (9e98752)\nisIPhoneX 判断 (cbea1f7)\nlodash中有isNil方法 (f63bacc)\nmin max 增加第一个参数 label (efa1529)\nzh_CN.js 更名 moment.js (cb564ba)\n"
        },
        {
          "title": "0.2.7 (2021-07-28)",
          "url": "/CHANGELOG.html#0.2.7-2021-07-28",
          "content": "0.2.7 (2021-07-28)"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.2.7-2021-07-28-features",
          "content": "Features合并包 @nbfe/config (a8bae4c)\n"
        },
        {
          "title": "0.2.6 (2021-07-27)",
          "url": "/CHANGELOG.html#0.2.6-2021-07-27",
          "content": "0.2.6 (2021-07-27)"
        },
        {
          "title": "Bug Fixes",
          "url": "/CHANGELOG.html#0.2.6-2021-07-27-bug-fixes",
          "content": "Bug Fixesdownload 额外参数 (c2dd105)\n"
        },
        {
          "title": "0.2.5 (2021-07-26)",
          "url": "/CHANGELOG.html#0.2.5-2021-07-26",
          "content": "0.2.5 (2021-07-26)"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.2.5-2021-07-26-features",
          "content": "Featureszh_CN (db88c3c)\n"
        },
        {
          "title": "0.2.4 (2021-07-26)",
          "url": "/CHANGELOG.html#0.2.4-2021-07-26",
          "content": "0.2.4 (2021-07-26)"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.2.4-2021-07-26-features",
          "content": "FeaturesdefineMomentLocaleZhCn (491a2a8)\n"
        },
        {
          "title": "0.2.3 (2021-07-26)",
          "url": "/CHANGELOG.html#0.2.3-2021-07-26",
          "content": "0.2.3 (2021-07-26)"
        },
        {
          "title": "Bug Fixes",
          "url": "/CHANGELOG.html#0.2.3-2021-07-26-bug-fixes",
          "content": "Bug FixesisIPhoneX 变成方法调用形式 (286c365)\n"
        },
        {
          "title": "0.2.2 (2021-07-26)",
          "url": "/CHANGELOG.html#0.2.2-2021-07-26",
          "content": "0.2.2 (2021-07-26)"
        },
        {
          "title": "Bug Fixes",
          "url": "/CHANGELOG.html#0.2.2-2021-07-26-bug-fixes",
          "content": "Bug FixesupdateUrlQuery 的默认参数去掉 (e01b619)\n"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.2.2-2021-07-26-features",
          "content": "Featuresua相关的判断变成方法, 避免直接调用 (88d835f)\n"
        },
        {
          "title": "0.2.1 (2021-05-24)",
          "url": "/CHANGELOG.html#0.2.1-2021-05-24",
          "content": "0.2.1 (2021-05-24)"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.2.1-2021-05-24-features",
          "content": "Features新增 isEveryTruthy isEveryFalsy isSomeTruthy isSomeFalsy (1d88b3f)\n"
        },
        {
          "title": "0.1.12 (2021-03-20)",
          "url": "/CHANGELOG.html#0.1.12-2021-03-20",
          "content": "0.1.12 (2021-03-20)"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.1.12-2021-03-20-features",
          "content": "Features新增 isEveryTruthy isEveryFalsy isSomeTruthy isSomeFalsy (7596e84)\n"
        },
        {
          "title": "0.1.11 (2021-01-26)",
          "url": "/CHANGELOG.html#0.1.11-2021-01-26",
          "content": "0.1.11 (2021-01-26)"
        },
        {
          "title": "Bug Fixes",
          "url": "/CHANGELOG.html#0.1.11-2021-01-26-bug-fixes",
          "content": "Bug FixesupdateUrlQuery 取query错误 (8dd24ce)\n"
        },
        {
          "title": "0.1.10 (2021-01-22)",
          "url": "/CHANGELOG.html#0.1.10-2021-01-22",
          "content": "0.1.10 (2021-01-22)"
        },
        {
          "title": "Bug Fixes",
          "url": "/CHANGELOG.html#0.1.10-2021-01-22-bug-fixes",
          "content": "Bug FixesupdateUrlQuery 实现有问题 (a091f2f)\n"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.1.10-2021-01-22-features",
          "content": "FeaturesparseUrl 返回origin 和 hostname (2a36942)\n"
        },
        {
          "title": "0.1.9 (2021-01-20)",
          "url": "/CHANGELOG.html#0.1.9-2021-01-20",
          "content": "0.1.9 (2021-01-20)"
        },
        {
          "title": "Bug Fixes",
          "url": "/CHANGELOG.html#0.1.9-2021-01-20-bug-fixes",
          "content": "Bug FixesupdateUrlQuery 实现有问题 (a091f2f)\n"
        },
        {
          "title": "0.1.8 (2021-01-19)",
          "url": "/CHANGELOG.html#0.1.8-2021-01-19",
          "content": "0.1.8 (2021-01-19)"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.1.8-2021-01-19-features",
          "content": "Features增加函数 updateUrlQuery (74b14bb)\n"
        },
        {
          "title": "0.1.7 (2021-01-12)",
          "url": "/CHANGELOG.html#0.1.7-2021-01-12",
          "content": "0.1.7 (2021-01-12)"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.1.7-2021-01-12-features",
          "content": "Features增加工具方法 (e2183f4)\n"
        },
        {
          "title": "0.1.6 (2020-12-30)",
          "url": "/CHANGELOG.html#0.1.6-2020-12-30",
          "content": "0.1.6 (2020-12-30)Note: Version bump only for package @nbfe/tools"
        },
        {
          "title": "0.1.5 (2020-11-10)",
          "url": "/CHANGELOG.html#0.1.5-2020-11-10",
          "content": "0.1.5 (2020-11-10)"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.1.5-2020-11-10-features",
          "content": "Featuresrules: 新增数字范围 numberRange (8ad748d)\n"
        },
        {
          "title": "0.1.4 (2020-08-28)",
          "url": "/CHANGELOG.html#0.1.4-2020-08-28",
          "content": "0.1.4 (2020-08-28)"
        },
        {
          "title": "Bug Fixes",
          "url": "/CHANGELOG.html#0.1.4-2020-08-28-bug-fixes",
          "content": "Bug Fixes去掉 async-await (ce0fd9c)\n"
        },
        {
          "title": "0.1.3 (2020-08-07)",
          "url": "/CHANGELOG.html#0.1.3-2020-08-07",
          "content": "0.1.3 (2020-08-07)"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.1.3-2020-08-07-features",
          "content": "Features升级构建 (db9d436)\n同步最新的工具库 (c43cf3e)\n"
        },
        {
          "title": "0.1.2 (2019-09-13)",
          "url": "/CHANGELOG.html#0.1.2-2019-09-13",
          "content": "0.1.2 (2019-09-13)"
        },
        {
          "title": "Features",
          "url": "/CHANGELOG.html#0.1.2-2019-09-13-features",
          "content": "Featurespackages: @nbfe/js2html (be7ab94)\n"
        },
        {
          "title": "0.1.1 (2019-09-13)",
          "url": "/CHANGELOG.html#0.1.1-2019-09-13",
          "content": "0.1.1 (2019-09-13)Note: Version bump only for package @nbfe/tools"
        }
      ]
    }
  ]
}