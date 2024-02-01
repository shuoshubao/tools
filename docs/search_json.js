window.ydoc_plugin_search_json = {
  使用: [
    {
      title: '安装使用调试runkit',
      content:
        "npm i @nbfe/toolsimport { search, getLabelByValue, classNames, copyText } from '@nbfe/tools'本文档为了方便调试, 特地将工具包打包成 umd 模式, 直接注入到了页面中, 挂载到了 windows.tools你可以直接打开浏览器控制台, 输入 Object.keys(tools) 即可看到所有的方法例如, 输入 tools.classNames('a', { b: true, c: 2 < 1 }), 将会得到 'a b'传送门: runkit.com由于 runkit 运行环境是 Nodejs, 因此工具库中的很多 browser 方法调试运行会报错. 此时就推荐在浏览器命令行直接调用当然, 工具库中部分方法可同时运行在 Nodejs 和 browser 环境中",
      url: '/install.html',
      children: []
    }
  ],
  文档: [
    {
      title: '',
      content: '',
      url: '/documents/date.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/enum.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/route.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/qs.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/decimal.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/dom.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/rules.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/types.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/memoize.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/dev.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/data.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/react.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/vue.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/formatters.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/numeral.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/html.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/string.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/ua.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/image.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/file.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/Uint8Array.html',
      children: []
    },
    {
      title: '',
      content: '',
      url: '/documents/antd.html',
      children: []
    }
  ],
  贡献指南: [
    {
      title: '注释开发单测打包',
      content:
        '代码注释必须严格遵循 JSDoc 规范执行 npm run docs:dev // 启动 ydoc 服务, 浏览器打开 http://localhost:9999\n执行 docs:generate // 监听 lib 目录的修改, 实时解析注释生成文档\n为保证工具方法的质量, 每个方法必须编写单测. 本项目采用的测试库是 ava项目采用的构建工具是 rollup',
      url: '/CONTRIBUTING.html',
      children: []
    }
  ]
}
