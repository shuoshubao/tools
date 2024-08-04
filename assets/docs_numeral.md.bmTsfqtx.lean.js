import{e as a,ah as t,c as l,U as s,o as r}from"./chunks/framework.DI3RqUrd.js";const o=[{tags:[{type:"param",string:"{Number} num 数值",name:"num",description:"<p>数值</p>",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}     千分位字符串",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>千分位字符串</p>"},{type:"example",string:`
thousands(123);
// => '123'`,html:`<p>thousands(123);<br />
// =&gt; '123'</p>`},{type:"example",string:`
thousands(1234);
// => '1,234'`,html:`<p>thousands(1234);<br />
// =&gt; '1,234'</p>`},{type:"example",string:`
thousands(1234567);
// => '1,234,567'`,html:`<p>thousands(1234567);<br />
// =&gt; '1,234,567'</p>`}],description:{full:"<p>千分位展示</p>",summary:"<p>千分位展示</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:1,codeStart:20,code:`const thousands = num => {
    const data = +num || 0;
    if (!data) {
        return num;
    }
    const [int, dec] = String(num).split('.');
    const formatInt = int.replace(/(?=(?!^)(\\d{3})+$)/g, ',');
    if (+dec) {
        return [formatInt, dec].join('.');
    }
    return formatInt;
};`,ctx:{type:"declaration",name:"thousands",value:"num => {",string:"thousands"}},{tags:[{type:"param",string:"{Number} value 数值",name:"value",description:"<p>数值</p>",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Number} min   最小值",name:"min",description:"<p>最小值</p>",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Number} max   最大值",name:"max",description:"<p>最大值</p>",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Number}       区间值",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>区间值</p>"},{type:"example",string:`
getValueInRange(1, 2, 7);
// => 2`,html:`<p>getValueInRange(1, 2, 7);<br />
// =&gt; 2</p>`},{type:"example",string:`
getValueInRange(3, 2, 7);
// => 3`,html:`<p>getValueInRange(3, 2, 7);<br />
// =&gt; 3</p>`},{type:"example",string:`
getValueInRange(12, 2, 7);
// => 7`,html:`<p>getValueInRange(12, 2, 7);<br />
// =&gt; 7</p>`}],description:{full:"<p>取区间值</p>",summary:"<p>取区间值</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:33,codeStart:53,code:`const getValueInRange = (value, min, max) => {
    if (value < min) {
        return min;
    }
    if (value > max) {
        return max;
    }
    return value;
};`,ctx:{type:"declaration",name:"getValueInRange",value:"(value, min, max) => {",string:"getValueInRange"}}],d=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"docs/numeral.md","filePath":"documents/numeral.md","lastUpdated":null}'),p={name:"docs/numeral.md"},f=Object.assign(p,{setup(i){const e=a(o);return(u,m)=>{const n=t("Dox");return r(),l("div",null,[s(n,{data:e.value},null,8,["data"])])}}});export{d as __pageData,f as default};
