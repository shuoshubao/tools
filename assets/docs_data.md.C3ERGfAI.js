import{e as t,ah as r,c as n,U as s,o as l}from"./chunks/framework.DI3RqUrd.js";const o=[{tags:[{type:"param",string:"{Array}    arr         [数组]",name:"arr",description:"<p>[数组]</p>",types:["Array"],typesDescription:"<code>Array</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Number}   fromIndex   起始位置",name:"fromIndex",description:"<p>起始位置</p>",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Number}   toIndex     结束位置",name:"toIndex",description:"<p>结束位置</p>",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Array}                源数据被修改",types:["Array"],typesDescription:"<code>Array</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>源数据被修改</p>"},{type:"example",string:`
const arr1 = [11, 22, 33, 44, 55, 66]
arrayMove(arr1, 0, 1)
console.log(arr1)`,html:`<p>const arr1 = [11, 22, 33, 44, 55, 66]<br />
arrayMove(arr1, 0, 1)<br />
console.log(arr1)</p>`},{type:"example",string:`
const arr2 = [11, 22, 33, 44, 55, 66]
arrayMove(arr2, 0, -1)
console.log(arr2)`,html:`<p>const arr2 = [11, 22, 33, 44, 55, 66]<br />
arrayMove(arr2, 0, -1)<br />
console.log(arr2)</p>`}],description:{full:"<p>数组交换位置</p>",summary:"<p>数组交换位置</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:8,codeStart:26,code:`const arrayMove = (arr, fromIndex, toIndex) => {
    const { length } = arr;
    const start = getPositiveIndex(fromIndex, length);
    const end = getPositiveIndex(toIndex, length);
    const ref = [arr[start], arr[end]];
    arr[start] = ref[1];
    arr[end] = ref[0];
    return arr;
};`,ctx:{type:"declaration",name:"arrayMove",value:"(arr, fromIndex, toIndex) => {",string:"arrayMove"}},{tags:[{type:"param",string:"{Object} [data] 数据源",name:"[data]",description:"<p>数据源</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Array}  [keys] 需要保留的属性列表",name:"[keys]",description:"<p>需要保留的属性列表</p>",types:["Array"],typesDescription:"<code>Array</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{*}      修改数据源",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>修改数据源</p>"},{type:"example",string:`
const data = { a: 1, b: 2, c: 3 }
reserveProperties(data, ['a'])
console.log(data);

// => { a: 1 };`,html:`<p>const data = { a: 1, b: 2, c: 3 }<br />
reserveProperties(data, ['a'])<br />
console.log(data);</p>
<p>// =&gt; { a: 1 };</p>`}],description:{full:"<p>只保留对象的部分属性(删除之外的属性)</p>",summary:"<p>只保留对象的部分属性(删除之外的属性)</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:36,codeStart:50,code:`const reserveProperties = (data = {}, keys = []) => {
    Object.keys(data)
        .filter(v => !keys.includes(v))
        .forEach(v => {
            delete data[v];
        });
};`,ctx:{type:"declaration",name:"reserveProperties",value:"(data = {}, keys = []) => {",string:"reserveProperties"}},{tags:[{type:"param",string:"{Object} [data] 数据源",name:"[data]",description:"<p>数据源</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Array}  [keys] 需要删除的属性列表",name:"[keys]",description:"<p>需要删除的属性列表</p>",types:["Array"],typesDescription:"<code>Array</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{*}      修改数据源",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>修改数据源</p>"},{type:"example",string:`
const data = { a: 1, b: 2, c: 3 };
removeProperties(data, ['a']);
console.log(data);
// => { b: 2, c: 3 };`,html:`<p>const data = { a: 1, b: 2, c: 3 };<br />
removeProperties(data, ['a']);<br />
console.log(data);<br />
// =&gt; { b: 2, c: 3 };</p>`}],description:{full:"<p>批量删除属性</p>",summary:"<p>批量删除属性</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:58,codeStart:70,code:`const removeProperties = (data = {}, keys = []) => {
    keys.forEach(v => {
        delete data[v];
    });
};`,ctx:{type:"declaration",name:"removeProperties",value:"(data = {}, keys = []) => {",string:"removeProperties"}},{tags:[{type:"param",string:"{Object} [data] 数据源",name:"[data]",description:"<p>数据源</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{*}      修改数据源",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>修改数据源</p>"},{type:"example",string:`
const data = { a: '', b: 0, c: false, d: null, e: { a: 0 } };
removeEmptyProperties(data);
console.log(data);
// => { b: 0, c: false, e: { a: 0 } };`,html:`<p>const data = { a: '', b: 0, c: false, d: null, e: { a: 0 } };<br />
removeEmptyProperties(data);<br />
console.log(data);<br />
// =&gt; { b: 0, c: false, e: { a: 0 } };</p>`}],description:{full:"<p>批量删除属性值为空的属性</p>",summary:"<p>批量删除属性值为空的属性</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:76,codeStart:87,code:`const removeEmptyProperties = (data = {}) => {
    Object.entries(data).forEach(([k, v]) => {
        if (isEmptyValue(v)) {
            delete data[k];
        }
    });
};`,ctx:{type:"declaration",name:"removeEmptyProperties",value:"(data = {}) => {",string:"removeEmptyProperties"}},{tags:[{type:"param",string:"{Array}  [keys]      属性列表",name:"[keys]",description:"<p>属性列表</p>",types:["Array"],typesDescription:"<code>Array</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{String} [emptyText] 空值",name:"[emptyText]",description:"<p>空值</p>",types:["String"],typesDescription:"<code>String</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Object}           [值全为空的对象]",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>[值全为空的对象]</p>"},{type:"example",string:`
produceEmptyObject(['a', 'b']);
// => { a: '', b: '' }`,html:`<p>produceEmptyObject(['a', 'b']);<br />
// =&gt; { a: '', b: '' }</p>`},{type:"example",string:`
produceEmptyObject(['a', 'b'], null);
// => { a: null, b: null }`,html:`<p>produceEmptyObject(['a', 'b'], null);<br />
// =&gt; { a: null, b: null }</p>`}],description:{full:"<p>产生一个值全为空的对象</p>",summary:"<p>产生一个值全为空的对象</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:95,codeStart:110,code:`const produceEmptyObject = (keys = [], emptyText = '') => {
    return keys.reduce((prev, cur) => {
        prev[cur] = emptyText;
        return prev;
    }, {});
};`,ctx:{type:"declaration",name:"produceEmptyObject",value:"(keys = [], emptyText = '') => {",string:"produceEmptyObject"}},{tags:[{type:"param",string:"{Object} data     数据源",name:"data",description:"<p>数据源</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} formater [{ key, value }]",name:"formater",description:"<p>[{ key, value }]</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{*}      修改数据源",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>修改数据源</p>"},{type:"example",string:`
const data = {
    a: 1,
    b: null,
    c: '',
    d: ' '
};
const formater = {
    a: '',
    b: -1,
    c: -1
};
formatEmptyToDefault(data, formater);
console.log(data);
// => { a: 1, b: -1, c: -1, d: ' ' }`,html:`<p>const data = {<br />
a: 1,<br />
b: null,<br />
c: '',<br />
d: ' '<br />
};<br />
const formater = {<br />
a: '',<br />
b: -1,<br />
c: -1<br />
};<br />
formatEmptyToDefault(data, formater);<br />
console.log(data);<br />
// =&gt; { a: 1, b: -1, c: -1, d: ' ' }</p>`}],description:{full:"<p>将数据中的空值替换为默认值</p>",summary:"<p>将数据中的空值替换为默认值</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:117,codeStart:139,code:`const formatEmptyToDefault = (data = {}, formater = {}) => {
    Object.entries(data).forEach(([k, v]) => {
        Object.entries(formater).forEach(([k2, v2]) => {
            // eslint-disable-next-line sonarjs/no-collapsible-if
            if (k2 === k) {
                if (isEmptyValue(v)) {
                    data[k] = v2;
                }
            }
        });
    });
};`,ctx:{type:"declaration",name:"formatEmptyToDefault",value:"(data = {}, formater = {}) => {",string:"formatEmptyToDefault"}}],f=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"docs/data.md","filePath":"vitepress-docs/data.md","lastUpdated":null}'),p={name:"docs/data.md"},y=Object.assign(p,{setup(i){const e=t(o);return(c,d)=>{const a=r("Dox");return l(),n("div",null,[s(a,{data:e.value},null,8,["data"])])}}});export{f as __pageData,y as default};
