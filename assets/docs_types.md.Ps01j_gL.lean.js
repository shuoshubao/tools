import{s,D as l,c as a,I as n,o as r}from"./chunks/framework.0k0VOrm2.js";const i=[{tags:[{type:"param",string:"{*} value    值",name:"value",description:"<p>值</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}     构造函数名",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>构造函数名</p>"},{type:"example",string:`
getType()
// => 'Undefined'`,html:`<p>getType()<br />
// =&gt; 'Undefined'</p>`},{type:"example",string:`
getType(null)
// => 'Null'`,html:`<p>getType(null)<br />
// =&gt; 'Null'</p>`},{type:"example",string:`
getType(() => {})
// => 'Function'`,html:`<p>getType(() =&gt; {})<br />
// =&gt; 'Function'</p>`}],description:{full:"<p>获取类型</p>",summary:"<p>获取类型</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:3,codeStart:22,code:`const getType = value => {
    return Object.prototype.toString.call(value).slice(8, -1);
};`,ctx:{type:"declaration",name:"getType",value:"value => {",string:"getType"}},{tags:[{type:"param",string:"{Array}  [arr=[]] 数组",name:"[arr=[]]",description:"<p>数组</p>",types:["Array"],typesDescription:"<code>Array</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Boolean}     数组是否存在重复项",types:["Boolean"],typesDescription:"<code>Boolean</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>数组是否存在重复项</p>"},{type:"example",string:`
isUniq();
// => true`,html:`<p>isUniq();<br />
// =&gt; true</p>`},{type:"example",string:`
isUniq([1, 2, 3]);
// => true`,html:`<p>isUniq([1, 2, 3]);<br />
// =&gt; true</p>`},{type:"example",string:`
isUniq([1, 2, 3, 2]);
// => false`,html:`<p>isUniq([1, 2, 3, 2]);<br />
// =&gt; false</p>`}],description:{full:"<p>重复数组</p>",summary:"<p>重复数组</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:26,codeStart:45,code:`const isUniq = (arr = []) => {
    return uniq(arr).length === arr.length;
};`,ctx:{type:"declaration",name:"isUniq",value:"(arr = []) => {",string:"isUniq"}},{tags:[{type:"param",string:"{*} value 值",name:"value",description:"<p>值</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Boolean}     是否是空字符串",types:["Boolean"],typesDescription:"<code>Boolean</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>是否是空字符串</p>"},{type:"example",string:`
isEmptyString('');
// => true`,html:`<p>isEmptyString('');<br />
// =&gt; true</p>`},{type:"example",string:`
isEmptyString(null);
// => false`,html:`<p>isEmptyString(null);<br />
// =&gt; false</p>`},{type:"example",string:`
isEmptyString([]);
// => false`,html:`<p>isEmptyString([]);<br />
// =&gt; false</p>`}],description:{full:"<p>空字符串</p>",summary:"<p>空字符串</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:49,codeStart:68,code:`const isEmptyString = value => {
    return value === '';
};`,ctx:{type:"declaration",name:"isEmptyString",value:"value => {",string:"isEmptyString"}},{tags:[{type:"param",string:"{*} value 值",name:"value",description:"<p>值</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Boolean}     是否为空值",types:["Boolean"],typesDescription:"<code>Boolean</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>是否为空值</p>"},{type:"example",string:`
isEmptyValue(null);
// => true
isEmptyValue(undefined);
// => true
isEmptyValue('');
// => true
isEmptyValue([]);
// => false
isEmptyValue(false);
// => false
isEmptyValue(123);
// => false`,html:`<p>isEmptyValue(null);<br />
// =&gt; true<br />
isEmptyValue(undefined);<br />
// =&gt; true<br />
isEmptyValue('');<br />
// =&gt; true<br />
isEmptyValue([]);<br />
// =&gt; false<br />
isEmptyValue(false);<br />
// =&gt; false<br />
isEmptyValue(123);<br />
// =&gt; false</p>`}],description:{full:"<p>空值: null undefined ''</p>",summary:"<p>空值: null undefined ''</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:72,codeStart:91,code:`const isEmptyValue = value => {
    return [isNull, isUndefined, isEmptyString].some(v => v(value));
};`,ctx:{type:"declaration",name:"isEmptyValue",value:"value => {",string:"isEmptyValue"}},{tags:[{type:"param",string:"{*} value 值",name:"value",description:"<p>值</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Boolean}     是否是Promise",types:["Boolean"],typesDescription:"<code>Boolean</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>是否是Promise</p>"},{type:"example",string:`
const p1 = new Promise((resolve, reject) => {

});
isPromise(p1);
// => false

isPromise(1);
// => false`,html:`<p>const p1 = new Promise((resolve, reject) =&gt; {</p>
<p>});<br />
isPromise(p1);<br />
// =&gt; false</p>
<p>isPromise(1);<br />
// =&gt; false</p>`}],description:{full:"<p>Promise</p>",summary:"<p>Promise</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:95,codeStart:110,code:`const isPromise = value => {
    return getType(value) === 'Promise';
};`,ctx:{type:"declaration",name:"isPromise",value:"value => {",string:"isPromise"}},{tags:[{type:"param",string:"{*} value 值",name:"value",description:"<p>值</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Boolean}     是否是Blob类型",types:["Boolean"],typesDescription:"<code>Boolean</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>是否是Blob类型</p>"},{type:"example",string:`
isBlob(new Blob());
// => true`,html:`<p>isBlob(new Blob());<br />
// =&gt; true</p>`},{type:"example",string:`
isBlob(123);
// => false`,html:`<p>isBlob(123);<br />
// =&gt; false</p>`}],description:{full:"<p>Blob</p>",summary:"<p>Blob</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:114,codeStart:128,code:`const isBlob = value => {
    return getType(value) === 'Blob';
};`,ctx:{type:"declaration",name:"isBlob",value:"value => {",string:"isBlob"}},{tags:[{type:"param",string:"{*} arr 值",name:"arr",description:"<p>值</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Boolean}     是否是空数组",types:["Boolean"],typesDescription:"<code>Boolean</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>是否是空数组</p>"},{type:"example",string:`
isEmptyArray([]);
// => true`,html:`<p>isEmptyArray([]);<br />
// =&gt; true</p>`},{type:"example",string:`
isEmptyArray([1, 2]);
// => false`,html:`<p>isEmptyArray([1, 2]);<br />
// =&gt; false</p>`},{type:"example",string:`
isEmptyArray('abc');
// => false`,html:`<p>isEmptyArray('abc');<br />
// =&gt; false</p>`}],description:{full:"<p>空数组</p>",summary:"<p>空数组</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:132,codeStart:151,code:`const isEmptyArray = arr => {
    return Array.isArray(arr) && arr.length === 0;
};`,ctx:{type:"declaration",name:"isEmptyArray",value:"arr => {",string:"isEmptyArray"}},{tags:[{type:"param",string:"{*} obj 值",name:"obj",description:"<p>值</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Boolean}     是否是空对象 {}",types:["Boolean"],typesDescription:"<code>Boolean</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>是否是空对象 {}</p>"},{type:"example",string:`
isEmptyObject({});
// => true`,html:`<p>isEmptyObject({});<br />
// =&gt; true</p>`},{type:"example",string:`
isEmptyObject({ a: 1 });
// => false`,html:`<p>isEmptyObject({ a: 1 });<br />
// =&gt; false</p>`},{type:"example",string:`
isEmptyObject(null);
// => false`,html:`<p>isEmptyObject(null);<br />
// =&gt; false</p>`}],description:{full:"<p>空对象</p>",summary:"<p>空对象</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:155,codeStart:174,code:`const isEmptyObject = obj => {
    return obj && getType(obj) === 'Object' && isEmptyArray(Object.keys(obj));
};`,ctx:{type:"declaration",name:"isEmptyObject",value:"obj => {",string:"isEmptyObject"}},{tags:[{type:"param",string:"{...*} args 值",name:"args",description:"<p>值</p>",types:"[object Object]",typesDescription:"...*",optional:!1,nullable:!1,nonNullable:!1,variable:!0},{type:"return",string:"{Boolean}         数组每一项都是truthy",types:["Boolean"],typesDescription:"<code>Boolean</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>数组每一项都是truthy</p>"},{type:"example",string:`
isEveryTruthy(1, 2, 3);
// true`,html:`<p>isEveryTruthy(1, 2, 3);<br />
// true</p>`},{type:"example",string:`isEveryTruthy([1, 2, 3]);
// true`,html:`<p>isEveryTruthy([1, 2, 3]);<br />
// true</p>`},{type:"example",string:`isEveryTruthy(0, 2, 3);
// false`,html:`<p>isEveryTruthy(0, 2, 3);<br />
// false</p>`},{type:"example",string:`isEveryTruthy(1 > 0, 2 != 1, 3);
// true`,html:`<p>isEveryTruthy(1 &gt; 0, 2 != 1, 3);<br />
// true</p>`}],description:{full:"<p>全真</p>",summary:"<p>全真</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:178,codeStart:199,code:`const isEveryTruthy = (...args) => {
    return [].concat(...args).every(Boolean);
};`,ctx:{type:"declaration",name:"isEveryTruthy",value:"(...args) => {",string:"isEveryTruthy"}},{tags:[{type:"param",string:"{...*} args 值",name:"args",description:"<p>值</p>",types:"[object Object]",typesDescription:"...*",optional:!1,nullable:!1,nonNullable:!1,variable:!0},{type:"return",string:"{Boolean}         数组每一项都是falsy",types:["Boolean"],typesDescription:"<code>Boolean</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>数组每一项都是falsy</p>"},{type:"example",string:`
isEveryFalsy(false, '', 0);
// => true`,html:`<p>isEveryFalsy(false, '', 0);<br />
// =&gt; true</p>`},{type:"example",string:`
isEveryFalsy([false, '', 0]);
// => true`,html:`<p>isEveryFalsy([false, '', 0]);<br />
// =&gt; true</p>`},{type:"example",string:`
isEveryFalsy(false, '', 2 > 1);
// => false`,html:`<p>isEveryFalsy(false, '', 2 &gt; 1);<br />
// =&gt; false</p>`}],description:{full:"<p>全假</p>",summary:"<p>全假</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:203,codeStart:222,code:`const isEveryFalsy = (...args) => {
    return [].concat(...args).every(v => !v);
};`,ctx:{type:"declaration",name:"isEveryFalsy",value:"(...args) => {",string:"isEveryFalsy"}},{tags:[{type:"param",string:"{...*} args 值",name:"args",description:"<p>值</p>",types:"[object Object]",typesDescription:"...*",optional:!1,nullable:!1,nonNullable:!1,variable:!0},{type:"return",string:"{Boolean}         部分真",types:["Boolean"],typesDescription:"<code>Boolean</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>部分真</p>"},{type:"example",string:`
isSomeTruthy(1, 2, 3);
// => true`,html:`<p>isSomeTruthy(1, 2, 3);<br />
// =&gt; true</p>`},{type:"example",string:`
isSomeTruthy([1, 2]);
// => true`,html:`<p>isSomeTruthy([1, 2]);<br />
// =&gt; true</p>`},{type:"example",string:`
isSomeTruthy(0, null);
// => false`,html:`<p>isSomeTruthy(0, null);<br />
// =&gt; false</p>`},{type:"example",string:`
isSomeTruthy([]);
// => false`,html:`<p>isSomeTruthy([]);<br />
// =&gt; false</p>`},{type:"example",string:`
isSomeTruthy([0, false]);
// => false`,html:`<p>isSomeTruthy([0, false]);<br />
// =&gt; false</p>`}],description:{full:"<p>部分真</p>",summary:"<p>部分真</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:226,codeStart:255,code:`const isSomeTruthy = (...args) => {
    return [].concat(...args).some(Boolean);
};`,ctx:{type:"declaration",name:"isSomeTruthy",value:"(...args) => {",string:"isSomeTruthy"}},{tags:[{type:"param",string:"{...*} args 值",name:"args",description:"<p>值</p>",types:"[object Object]",typesDescription:"...*",optional:!1,nullable:!1,nonNullable:!1,variable:!0},{type:"return",string:"{Boolean}         部分假",types:["Boolean"],typesDescription:"<code>Boolean</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>部分假</p>"},{type:"example",string:`
isSomeFalsy(0, 1, 2);
// => true`,html:`<p>isSomeFalsy(0, 1, 2);<br />
// =&gt; true</p>`},{type:"example",string:`
isSomeFalsy([0, null]);
// => true`,html:`<p>isSomeFalsy([0, null]);<br />
// =&gt; true</p>`},{type:"example",string:`
isSomeFalsy(1, 2, true, 'false');
// => false`,html:`<p>isSomeFalsy(1, 2, true, 'false');<br />
// =&gt; false</p>`}],description:{full:"<p>部分假</p>",summary:"<p>部分假</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:259,codeStart:278,code:`const isSomeFalsy = (...args) => {
    return [].concat(...args).some(v => !v);
};`,ctx:{type:"declaration",name:"isSomeFalsy",value:"(...args) => {",string:"isSomeFalsy"}}],f=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"docs/types.md","filePath":"docs/types.md","lastUpdated":null}'),p={name:"docs/types.md"},m=Object.assign(p,{setup(o){const e=s(i);return(y,u)=>{const t=l("Dox");return r(),a("div",null,[n(t,{data:e.value},null,8,["data"])])}}});export{f as __pageData,m as default};
