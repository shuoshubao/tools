import{e as r,ah as a,c as t,U as l,o as b}from"./chunks/framework.DI3RqUrd.js";const s=[{tags:[{type:"type",string:"{Array.<ValidatorRules>}",types:["Array.<ValidatorRules>"],typesDescription:"<code>Array</code>.<<code>ValidatorRules</code>>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,html:"<p>{Array.<ValidatorRules>}</p>"},{type:"example",string:`
rules.required('Form.Item label')
rules.selectRequired('Form.Item label')
rules.multipleRequired('Form.Item label')
rules.min('Form.Item label', 1)
rules.max('Form.Item label', 5)
rules.numberRange('Form.Item label', {  })
// 数字范围的抽象描述
[
    {
        key: 'eq',
        description: '等于',
        validate: (a, b) => {
            return a === b;
        }
    },
    {
        key: 'ne',
        description: '不等于',
        validate: (a, b) => {
            return a !== b;
        }
    },
    {
        key: 'gt',
        description: '大于',
        validate: (a, b) => {
            return a > b;
        }
    },
    {
        key: 'lt',
        description: '小于',
        validate: (a, b) => {
            return a < b;
        }
    },
    {
        key: 'ge',
        description: '大于等于',
        validate: (a, b) => {
            return a >= b;
        }
    },
    {
        key: 'le',
        description: '小于等于',
        validate: (a, b) => {
            return a <= b;
        }
    },
    // 小数位数限制
    {
        key: 'decimalLength',
        description: value => {
            return ['最多', value, '位小数'].join('');
        },
        validate: (a, b) => {
            const [, decimal = ''] = String(a).split('.');
            return decimal.length <= b;
        }
    }
]`,html:`<p>rules.required('Form.Item label')<br />
rules.selectRequired('Form.Item label')<br />
rules.multipleRequired('Form.Item label')<br />
rules.min('Form.Item label', 1)<br />
rules.max('Form.Item label', 5)<br />
rules.numberRange('Form.Item label', {  })<br />
// 数字范围的抽象描述<br />
[<br />
{<br />
key: 'eq',<br />
description: '等于',<br />
validate: (a, b) =&gt; {<br />
return a === b;<br />
}<br />
},<br />
{<br />
key: 'ne',<br />
description: '不等于',<br />
validate: (a, b) =&gt; {<br />
return a !== b;<br />
}<br />
},<br />
{<br />
key: 'gt',<br />
description: '大于',<br />
validate: (a, b) =&gt; {<br />
return a &gt; b;<br />
}<br />
},<br />
{<br />
key: 'lt',<br />
description: '小于',<br />
validate: (a, b) =&gt; {<br />
return a &lt; b;<br />
}<br />
},<br />
{<br />
key: 'ge',<br />
description: '大于等于',<br />
validate: (a, b) =&gt; {<br />
return a &gt;= b;<br />
}<br />
},<br />
{<br />
key: 'le',<br />
description: '小于等于',<br />
validate: (a, b) =&gt; {<br />
return a &lt;= b;<br />
}<br />
},<br />
// 小数位数限制<br />
{<br />
key: 'decimalLength',<br />
description: value =&gt; {<br />
return ['最多', value, '位小数'].join('');<br />
},<br />
validate: (a, b) =&gt; {<br />
const [, decimal = ''] = String(a).split('.');<br />
return decimal.length &lt;= b;<br />
}<br />
}<br />
]</p>`}],description:{full:`<p>校验规则<br />
校验库参考: <a href="https://www.npmjs.com/package/async-validator">async-validator</a></p>`,summary:`<p>校验规则<br />
校验库参考: <a href="https://www.npmjs.com/package/async-validator">async-validator</a></p>`,body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:179,codeStart:248,code:"const rules = new ValidatorRules();",ctx:{type:"declaration",name:"rules",value:"new ValidatorRules()",string:"rules"}}],m=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"documents/rules.md","filePath":"documents/rules.md","lastUpdated":null}'),i={name:"documents/rules.md"},p=Object.assign(i,{setup(o){const e=r(s);return(d,u)=>{const n=a("Dox");return b(),t("div",null,[l(n,{data:e.value},null,8,["data"])])}}});export{m as __pageData,p as default};
