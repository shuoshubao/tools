require('core-js')
const { readFileSync, writeFileSync } = require('fs')
const { ensureDirSync, copySync } = require('fs-extra')
const { parseComments } = require('dox')
const { map, filter, flatten } = require('lodash')
const hljs = require('highlight.js')
const { createElement } = require('@nbfe/tools')
const { FilesConfig, SvgIcons } = require('./util')

const files = map(FilesConfig, 'category').map(v => {
  return ['lib', `${v}.js`].join('/')
})

const delHtmlTag = (str = '') => {
  if (str.startsWith('<p>')) {
    return str.slice(3, -4).replaceAll('\n', '<br />')
  }
  return str.replaceAll('\n', '<br />')
}

const MenuListText = []

ensureDirSync('src/documents')
// copySync('CHANGELOG.md', 'src/CHANGELOG.md')

const encodeText = text => {
  return new TextEncoder().encode(text)
}

files.forEach(v => {
  const fileName = v.split(/[/|.]/)[1]
  const { categoryName = '' } = FilesConfig.find(v2 => {
    return v2.category === fileName
  })
  const content = readFileSync(v).toString()
  const exportList = content
    .split('\n')
    .filter(v2 => {
      return v2.includes('export const')
    })
    .map(v2 => {
      const funcName = v2.split(' ')[2]
      const text = v2.replace('export const ', '').replace(' => {', '')
      const argText = text.replace(`${funcName} = `, '')
      const callText = `${funcName}(${argText})`.replace('((', '(').replace('))', ')')
      return {
        funcName,
        callText: callText.includes('new ') ? text : callText
      }
    })
  const docs = filter(parseComments(content.replaceAll('export ', '')), 'code')
  const markdownText = exportList
    .map(v2 => {
      const { funcName, callText } = v2
      const { description, tags, code } = docs.find(v3 => {
        return v3.ctx.name === funcName
      })
      const See = filter(tags, { type: 'see' })
      const Returns = filter(tags, { type: 'return' })
      const Example = filter(tags, { type: 'example' })
      const DataSetExample = map(Example, 'string').map(v3 => {
        return v3.trim()
      })
      return createElement(
        'div',
        {
          className: 'item-method'
        },
        [
          [
            'div',
            {
              id: funcName.toLowerCase(),
              className: 'item-method-name'
            },
            [
              [
                'div',
                {
                  className: 'item-method-name-area'
                },
                [
                  [
                    'i',
                    {
                      style: {
                        marginRight: 10,
                        cursor: 'pointer'
                      },
                      ariaLabel: '图标: code',
                      className: 'anticon anticon-code action-showSourceCode',
                      'data-code': encodeText(hljs.highlight(code.trim(), { language: 'js' }).value)
                    },
                    SvgIcons.CodeOutlined
                  ],
                  ['span', null, callText]
                ]
              ]
            ]
          ],
          [
            'div',
            {
              className: 'item-method-content'
            },
            [
              ['div', null, delHtmlTag(description.summary)],
              ...flatten(
                See.map(v3 => {
                  const { string } = v3
                  const isUrl = string.startsWith('http')
                  return [
                    ['h4', null, 'See'],
                    [
                      'a',
                      {
                        href: isUrl ? string : 'javascript:void(0)',
                        target: isUrl ? '_blank' : undefined,
                        style: {
                          color: '#1890ff'
                        }
                      },
                      string
                    ]
                  ]
                })
              ),
              ['h4', null, 'Arguments'],
              ...filter(tags, { type: 'param' }).map(v3 => {
                const { name, typesDescription } = v3
                return [
                  'div',
                  null,
                  [
                    [
                      'strong',
                      {
                        style: {
                          color: '#1890ff'
                        }
                      },
                      name
                    ],
                    [
                      'strong',
                      {
                        style: {
                          color: '#1890ff'
                        }
                      },
                      ` (${delHtmlTag(typesDescription)})`
                    ],
                    ['span', null, [':', delHtmlTag(v3.description)].join(' ')]
                  ]
                ]
              }),
              ['h4', null, 'Returns'],
              ...Returns.map(v3 => {
                const { typesDescription } = v3
                return [
                  'span',
                  null,
                  [
                    [
                      'strong',
                      {
                        style: {
                          color: '#1890ff'
                        }
                      },
                      `(${delHtmlTag(typesDescription)})`
                    ],
                    ['span', null, [':', delHtmlTag(v3.description)].join(' ')]
                  ]
                ]
              }),
              [
                'h4',
                null,
                [
                  ['span', null, 'Example'],
                  [
                    'i',
                    {
                      style: {
                        marginLeft: 10,
                        cursor: 'pointer'
                      },
                      ariaLabel: '图标: code',
                      className: 'anticon anticon-code-sandbox action-showREPL',
                      'data-funcname': funcName,
                      'data-example': encodeText(JSON.stringify(DataSetExample))
                    },
                    SvgIcons.CodeSandboxOutlined
                  ]
                ]
              ],
              [
                'div',
                {
                  style: {
                    display: Example.length ? 'none' : 'block'
                  }
                },
                '暂无'
              ],
              ...Example.map(v3 => {
                const { string } = v3
                const { value } = hljs.highlight(string.trim(), { language: 'js' })
                return [
                  'pre',
                  null,
                  [
                    [
                      'code',
                      {
                        className: 'hljs language-js'
                      },
                      value
                    ]
                  ]
                ]
              })
            ]
          ]
        ]
      )
    })
    .join('\n')
  MenuListText.push(`- [${categoryName || fileName}](${fileName}.md)`)
  MenuListText.push(
    ...exportList.map(v3 => {
      return `  - [${v3.funcName}](${fileName}.md#${v3.funcName})`
    })
  )
  writeFileSync(`src/documents/${fileName}.md`, markdownText)
})

writeFileSync('src/documents/SUMMARY.md', MenuListText.join('\n'))
