/*
 * @Author: fangt11
 * @Date:   2021-08-06 20:16:27
 * @Last Modified by:   shuoshubao
 * @Last Modified time: 2023-04-20 11:45:40
 */

window.addEventListener('load', () => {
  const { React, antd } = window
  const { createElement } = React
  const { Modal } = antd
  const decodeText = text => {
    return new TextDecoder().decode(new Uint8Array(text.split(',')))
  }
  document.body.addEventListener('click', e => {
    const icon = e.target.closest('.anticon')
    if (!icon) {
      return
    }
    const { classList, dataset } = icon
    // ShowSourceCode
    if (classList.contains('action-showSourceCode')) {
      const { code } = dataset
      const codeText = decodeText(code)
      Modal.info({
        width: 800,
        maskClosable: true,
        okText: '关闭',
        className: 'modal-source-code',
        content: createElement(
          'pre',
          {},
          createElement('code', {
            dangerouslySetInnerHTML: { __html: codeText }
          })
        )
      })
    }
    // Try in REPL
    if (classList.contains('action-showREPL')) {
      const { funcname, example } = dataset
      const Examples = JSON.parse(decodeText(example))
      const source = [
        `const { ${funcname} } = require('@nbfe/tools');`,
        '',
        Examples.reduce((prev, cur) => {
          if (cur.includes('// => ')) {
            prev.push(cur, '')
          } else {
            prev.push(cur)
          }
          return prev
        }, [])
          .join('\n')
          .trim(),
        ''
      ]
        .join('\n')
        .trim()
      const time = Date.now()
      const domId = ['runkit', 'container', 'dom', time].join('-')
      Modal.info({
        width: 1200,
        maskClosable: true,
        okText: '关闭',
        title: createElement('div', {}, [
          createElement(
            'span',
            {
              style: {
                fontSize: 16
              }
            },
            ['Try in REPL']
          ),
          createElement(
            'span',
            {
              style: {
                color: '#666',
                fontSize: 12,
                marginLeft: 10
              }
            },
            [`可在浏览器控制台直接调用 tools.${funcname}`]
          )
        ]),
        content: createElement(
          'div',
          {
            id: domId
          },
          []
        )
      })
      setTimeout(() => {
        RunKit.createNotebook({
          theme: 'atom-light-syntax',
          element: document.getElementById(domId),
          source
        })
      }, 0)
    }
  })

  const link = document.createElement('link')
  link.href = 'https://github.githubassets.com/favicons/favicon.png'
  link.type = 'image/x-icon'
  link.rel = 'shortcut icon'
  document.head.appendChild(link)
})
