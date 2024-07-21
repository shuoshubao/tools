import{e as t,ah as s,c as n,U as l,o as r}from"./chunks/framework.DI3RqUrd.js";const p=[{tags:[{type:"param",string:"{String} str 字符串",name:"str",description:"<p>字符串</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}     去掉所有空白的字符串",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>去掉所有空白的字符串</p>"},{type:"example",string:`
trimAll(' a b c ');
// => 'abc'`,html:`<p>trimAll(' a b c ');<br />
// =&gt; 'abc'</p>`}],description:{full:"<p>trim 所有空白</p>",summary:"<p>trim 所有空白</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:1,codeStart:10,code:`const trimAll = (str = '') => {
    return str.replace(/\\s+/g, '');
};`,ctx:{type:"declaration",name:"trimAll",value:"(str = '') => {",string:"trimAll"}},{tags:[{type:"param",string:"{String} str 字符串",name:"str",description:"<p>字符串</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}     帕斯卡形式的字符串",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>帕斯卡形式的字符串</p>"},{type:"example",string:`
pascalCase('a b c');
// => 'ABC'`,html:`<p>pascalCase('a b c');<br />
// =&gt; 'ABC'</p>`},{type:"example",string:`
pascalCase('a-b-c');
// => 'ABC'`,html:`<p>pascalCase('a-b-c');<br />
// =&gt; 'ABC'</p>`},{type:"example",string:`
pascalCase('a_b_c');
// => 'ABC'`,html:`<p>pascalCase('a_b_c');<br />
// =&gt; 'ABC'</p>`},{type:"example",string:`
pascalCase('a,b,c');
// => 'ABC'`,html:`<p>pascalCase('a,b,c');<br />
// =&gt; 'ABC'</p>`},{type:"example",string:`
pascalCase('aBc');
// => 'ABc'`,html:`<p>pascalCase('aBc');<br />
// =&gt; 'ABc'</p>`}],description:{full:"<p>帕斯卡</p>",summary:"<p>帕斯卡</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:14,codeStart:43,code:`const pascalCase = (string = '') => {
    const matchs = string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
    if (!matchs) {
        return '';
    }
    return matchs
        .map(x => {
            return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
        })
        .join('');
};`,ctx:{type:"declaration",name:"pascalCase",value:"(string = '') => {",string:"pascalCase"}}],d=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"documents/string.md","filePath":"documents/string.md","lastUpdated":null}'),i={name:"documents/string.md"},f=Object.assign(i,{setup(c){const a=t(p);return(o,m)=>{const e=s("Dox");return r(),n("div",null,[l(e,{data:a.value},null,8,["data"])])}}});export{d as __pageData,f as default};
