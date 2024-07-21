import{e as n,ah as a,c as l,U as r,o as s}from"./chunks/framework.DI3RqUrd.js";const o=[{tags:[{type:"param",string:"{Number} value  值",name:"value",description:"<p>值</p>",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} config { emptyText = '--', // 空文本 reverse = false, // 颜色切换 disabled = false // 不使用颜色 }",name:"config",description:"<p>{ emptyText = '--', // 空文本 reverse = false, // 颜色切换 disabled = false // 不使用颜色 }</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}        html 字符串",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>html 字符串</p>"},{type:"example",string:`
getPercentageHtml(0.23)
// => '<span style="color: #00b365;">23%</span>'`,html:`<p>getPercentageHtml(0.23)<br />
// =&gt; '<span style="color: #00b365;">23%</span>'</p>`},{type:"example",string:`
getPercentageHtml(-0.23)
// => '<span style="color: #00b365;">-23%</span>'`,html:`<p>getPercentageHtml(-0.23)<br />
// =&gt; '<span style="color: #00b365;">-23%</span>'</p>`},{type:"example",string:`
getPercentageHtml(0.23, { disabled: true })
// => '23%'`,html:`<p>getPercentageHtml(0.23, { disabled: true })<br />
// =&gt; '23%'</p>`}],description:{full:`<p>百分比html<br />
正: 绿; 负: 红</p>`,summary:`<p>百分比html<br />
正: 绿; 负: 红</p>`,body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:5,codeStart:26,code:`const getPercentageHtml = (value, config = {}) => {
    const {
        emptyText = '--', // 空文本
        reverse = false, // 颜色切换
        disabled = false // 不使用颜色
    } = config;
    const tempValue = formatters.percentage(value);
    const greenColor = '#00b365';
    const redColor = '#f5483b';
    if (value > 0) {
        if (disabled) {
            return tempValue;
        }
        return \`<span style="color: \${reverse ? redColor : greenColor};">\${tempValue}</span>\`;
    }
    if (value < 0) {
        if (disabled) {
            return tempValue;
        }
        return \`<span style="color: \${reverse ? greenColor : redColor};">\${tempValue}</span>\`;
    }
    if (value === 0) {
        return tempValue;
    }
    return String(emptyText);
};

// 自闭合标签
const voidHtmlTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];

const attrKeyAlias = {
    className: 'class'
};

const gernerateElementText = (tagName = '', attrs = {}, text = '') => {
    const attrsText = Object.entries(attrs || {})
        .map(([k, v]) => {
            const key = attrKeyAlias[k] || k;
            if (key === 'style') {
                return [key, \`"\${getCssText(v)}"\`].join('=');
            }
            return [key, \`"\${v}"\`].join('=');
        })
        .join(' ');
    const tagNameStart = [tagName, attrsText].filter(Boolean).join(' ');
    if (voidHtmlTags.includes(tagName)) {
        return \`<\${tagNameStart} />\`;
    }
    return \`<\${tagNameStart}>\${text}</\${tagName}>\`;
};`,ctx:{type:"declaration",name:"getPercentageHtml",value:"(value, config = {}) => {",string:"getPercentageHtml"}},{tags:[{type:"param",string:"{String} type  标签名",name:"type",description:"<p>标签名</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} attrs    属性",name:"attrs",description:"<p>属性</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Array}  children 子元素",name:"children",description:"<p>子元素</p>",types:["Array"],typesDescription:"<code>Array</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}          html字符串",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>html字符串</p>"},{type:"example",string:`
createElement('div', { id: 'demo', className: 'demo' }, 'hello') // <div id="demo" className="demo">hello</div>`,html:`<p>createElement('div', { id: 'demo', className: 'demo' }, 'hello') // <div id="demo" className="demo">hello</div></p>`}],description:{full:"<p>createElement</p>",summary:"<p>createElement</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:77,codeStart:87,code:`const createElement = (type = '', props = {}, children = []) => {
    if (isString(children) || isNumber(children)) {
        return gernerateElementText(type, props, children);
    }
    return gernerateElementText(
        type,
        props,
        children
            .map(v => {
                return createElement(...v);
            })
            .join('')
    );
};

// 解析url: [文案|链接]
const linkReg = /\\[(.+?)\\|(.+?)\\]/g;`,ctx:{type:"declaration",name:"createElement",value:"(type = '', props = {}, children = []) => {",string:"createElement"}},{tags:[{type:"param",string:"{...String} args  字符串",name:"args",description:"<p>字符串</p>",types:["String"],typesDescription:"...<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!0},{type:"return",string:"{String[]}    html 字符串",types:["Array[String]"],typesDescription:"<code>String</code>[]",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>html 字符串</p>"},{type:"example",string:`
getTooltipHtml('abc')
// => ['abc']`,html:`<p>getTooltipHtml('abc')<br />
// =&gt; ['abc']</p>`},{type:"example",string:`
getTooltipHtml('aa[链接|cc.co]bb')
// => ['aa<a heref="cc.co" style="color: #fff; fontWeight: bold; textDecoration: underline">链接</a>bb']`,html:`<p>getTooltipHtml('aa[链接|cc.co]bb')<br />
// =&gt; ['aa<a heref="cc.co" style="color: #fff; fontWeight: bold; textDecoration: underline">链接</a>bb']</p>`}],description:{full:"<p>字符串转链接</p>",summary:"<p>字符串转链接</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:105,codeStart:119,code:`const getTooltipHtml = (...args) => {
    return []
        .concat(...args)
        .filter(Boolean)
        .map(String)
        .map(v => {
            return v.replace(/\\\\n/g, '<br>');
        })
        .map(v => {
            return v.replace(linkReg, (...args) => {
                const [, text, href] = args;
                return gernerateElementText(
                    'a',
                    {
                        href,
                        target: '_blank',
                        style: {
                            color: '#fff',
                            fontWeight: 'bold',
                            textDecoration: 'underline'
                        }
                    },
                    text
                );
            });
        });
};`,ctx:{type:"declaration",name:"getTooltipHtml",value:"(...args) => {",string:"getTooltipHtml"}}],g=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"documents/html.md","filePath":"documents/html.md","lastUpdated":null}'),i={name:"documents/html.md"},f=Object.assign(i,{setup(p){const e=n(o);return(c,m)=>{const t=a("Dox");return s(),l("div",null,[r(t,{data:e.value},null,8,["data"])])}}});export{g as __pageData,f as default};
