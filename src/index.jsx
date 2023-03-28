---
banner:
  name: '工具库'
  desc: '提高复用性, 更懂你的工具库'
  btns: 
    - { name: '开始', href: './documents/date.html', primary: true }
    - { name: 'Github', href: 'https://github.com/shuoshubao/tools', primary: true }
  caption: '当前版本: v0.5.0'
features: 
  - { name: '零依赖', desc: '不重复开发一些最基础的功能' }
  - { name: '懂业务', desc: '完全基于业务和组件库提炼, 没有花里胡哨的功能' }
  - { name: '优雅', desc: '每一个方法名都经过严格的思考, 让你用一次就记得住' }

footer:
  copyRight:
    name: '硕鼠宝'
    href: 'https://github.com/shuoshubao/'
  links:
    Git仓库:
      - { name: 'Github', href: 'https://github.com/shuoshubao/nbfe/tools' }

---

<Homepage banner={banner} features={features} />
<Footer distPath={props.page.distPath} copyRight={props.footer.copyRight} links={props.footer.links} />
