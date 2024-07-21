import{e as l,ah as t,c as s,U as n,o as r}from"./chunks/framework.DI3RqUrd.js";const p=[{tags:[{type:"param",string:"{...Number} [args] 加数",name:"[args]",description:"<p>加数</p>",types:["Number"],typesDescription:"...<code>Number</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!0},{type:"return",string:"{Number} 运算之和",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>运算之和</p>"},{type:"example",string:`
plus(0.1, 0.2)
// => 0.3`,html:`<p>plus(0.1, 0.2)<br />
// =&gt; 0.3</p>`},{type:"example",string:`
plus(0.1, 0.1, 0.1)
// => 0.3`,html:`<p>plus(0.1, 0.1, 0.1)<br />
// =&gt; 0.3</p>`},{type:"example",string:`
plus([0.1, 0.1, 0.1])
// => 0.3`,html:`<p>plus([0.1, 0.1, 0.1])<br />
// =&gt; 0.3</p>`}],description:{full:"<p>浮点数计算-加法</p>",summary:"<p>浮点数计算-加法</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:21,codeStart:40,code:`const plus = (...args) => {
    return [].concat(...args).reduce((prev, cur) => {
        return plusTwo(prev, cur);
    }, 0);
};`,ctx:{type:"declaration",name:"plus",value:"(...args) => {",string:"plus"}},{tags:[{type:"param",string:"{Number} a 减数",name:"a",description:"<p>减数</p>",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Number} b 被减数",name:"b",description:"<p>被减数</p>",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Number} 运算之差",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>运算之差</p>"},{type:"example",string:`
minus(0.3, 0.1)
// => 0.2`,html:`<p>minus(0.3, 0.1)<br />
// =&gt; 0.2</p>`}],description:{full:"<p>浮点数计算-减法</p>",summary:"<p>浮点数计算-减法</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:46,codeStart:56,code:`const minus = (a, b) => {
    return plus(a, mulTwo(b, -1));
};`,ctx:{type:"declaration",name:"minus",value:"(a, b) => {",string:"minus"}},{tags:[{type:"param",string:"{...Number} [args] 乘数",name:"[args]",description:"<p>乘数</p>",types:["Number"],typesDescription:"...<code>Number</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!0},{type:"return",string:"{Number} 运算之积",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>运算之积</p>"},{type:"example",string:`
multiply(0.1, 0.2)
// => 0.02`,html:`<p>multiply(0.1, 0.2)<br />
// =&gt; 0.02</p>`},{type:"example",string:`
multiply(0.1, 0.1, 0.1)
// => 0.001`,html:`<p>multiply(0.1, 0.1, 0.1)<br />
// =&gt; 0.001</p>`},{type:"example",string:`
multiply([0.1, 0.1, 0.1])
// => 0.001`,html:`<p>multiply([0.1, 0.1, 0.1])<br />
// =&gt; 0.001</p>`}],description:{full:"<p>浮点数计算-乘法</p>",summary:"<p>浮点数计算-乘法</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:60,codeStart:79,code:`const multiply = (...args) => {
    return [].concat(...args).reduce((prev, cur) => {
        return mulTwo(prev, cur);
    }, 1);
};`,ctx:{type:"declaration",name:"multiply",value:"(...args) => {",string:"multiply"}},{tags:[{type:"param",string:"{Number} a 除数",name:"a",description:"<p>除数</p>",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Number} b 被除数",name:"b",description:"<p>被除数</p>",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Number} 运算之差",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>运算之差</p>"},{type:"example",string:`
divide(0.3, 0.1)
// => 3`,html:`<p>divide(0.3, 0.1)<br />
// =&gt; 3</p>`}],description:{full:"<p>浮点数计算-除法</p>",summary:"<p>浮点数计算-除法</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:85,codeStart:95,code:`const divide = (a, b) => {
    const decMax = Math.max(getDecLength(a), getDecLength(b));
    const temp = 10 ** decMax;
    return mulTwo(a, temp) / mulTwo(b, temp);
};`,ctx:{type:"declaration",name:"divide",value:"(a, b) => {",string:"divide"}}],d=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"documents/decimal.md","filePath":"documents/decimal.md","lastUpdated":null}'),i={name:"documents/decimal.md"},b=Object.assign(i,{setup(o){const e=l(p);return(u,m)=>{const a=t("Dox");return r(),s("div",null,[n(a,{data:e.value},null,8,["data"])])}}});export{d as __pageData,b as default};
