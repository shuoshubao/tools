import{s as l,D as t,c as n,I as s,o as r}from"./chunks/framework.0k0VOrm2.js";const o=[{tags:[{type:"param",string:"{*} value     value 值",name:"value",description:"<p>value 值</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Array}  [data=[{ value, label }]]      数据源",name:"[data=[{ value, label }]]",description:"<p>数据源</p>",types:["Array"],typesDescription:"<code>Array</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{String} [emptyText='--'] 空值",name:"[emptyText='--']",description:"<p>空值</p>",types:["String"],typesDescription:"<code>String</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}           value对应的label",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>value对应的label</p>"},{type:"example",string:`
const data = [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]
getLabelByValue(5, data)
// => '优秀'`,html:`<p>const data = [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]<br />
getLabelByValue(5, data)<br />
// =&gt; '优秀'</p>`},{type:"example",string:`getLabelByValue('5', data)
// => '优秀'`,html:`<p>getLabelByValue('5', data)<br />
// =&gt; '优秀'</p>`},{type:"example",string:`getLabelByValue(null, data)
// => '--'`,html:`<p>getLabelByValue(null, data)<br />
// =&gt; '--'</p>`},{type:"example",string:`getLabelByValue(null, data, '暂无')
// => '暂无'`,html:`<p>getLabelByValue(null, data, '暂无')<br />
// =&gt; '暂无'</p>`}],description:{full:"<p>通过 value 获取 label</p>",summary:"<p>通过 value 获取 label</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:4,codeStart:28,code:`const getLabelByValue = (value, data = [], emptyText = '--') => {
    const item = data.find(v => String(v.value) === String(value));
    if (item) {
        return item.label;
    }
    return emptyText;
};`,ctx:{type:"declaration",name:"getLabelByValue",value:"(value, data = [], emptyText = '--') => {",string:"getLabelByValue"}},{tags:[{type:"param",string:"{Object} [data={}] json数据",name:"[data={}]",description:"<p>json数据</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Array}      标准的枚举数据格式 [{ value, label }]",types:["Array"],typesDescription:"<code>Array</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>标准的枚举数据格式 [{ value, label }]</p>"},{type:"example",string:`
const data = { 优秀: 5, 良好: 4, 及格: 3 }
convertJsonToEnum(data)
// => [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]`,html:`<p>const data = { 优秀: 5, 良好: 4, 及格: 3 }<br />
convertJsonToEnum(data)<br />
// =&gt; [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]</p>`}],description:{full:"<p>将 json 转换成 [{ value, label }]</p>",summary:"<p>将 json 转换成 [{ value, label }]</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:36,codeStart:46,code:`const convertJsonToEnum = (data = {}) => {
    return Object.entries(data).reduce((prev, [k, v]) => {
        prev.push({
            value: k,
            label: v
        });
        return prev;
    }, []);
};`,ctx:{type:"declaration",name:"convertJsonToEnum",value:"(data = {}) => {",string:"convertJsonToEnum"}},{tags:[{type:"see",string:"getLabelByValue",local:"getLabelByValue",html:"<p>getLabelByValue</p>"},{type:"param",string:"{*} label     label 值",name:"label",description:"<p>label 值</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Array}  [data=[{ value, label }]]      数据源",name:"[data=[{ value, label }]]",description:"<p>数据源</p>",types:["Array"],typesDescription:"<code>Array</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{String} [emptyText='--'] 空值",name:"[emptyText='--']",description:"<p>空值</p>",types:["String"],typesDescription:"<code>String</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}           value对应的label",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>value对应的label</p>"},{type:"example",string:`
const data = [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]
getValueByLabel('优秀', data)
// => 5`,html:`<p>const data = [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]<br />
getValueByLabel('优秀', data)<br />
// =&gt; 5</p>`}],description:{full:"<p>通过 label 获取 value</p>",summary:"<p>通过 label 获取 value</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:56,codeStart:69,code:`const getValueByLabel = (label, data = [], emptyText = '--') => {
    let tempData = data;
    if (!Array.isArray(data)) {
        tempData = convertJsonToEnum(data);
    }
    const item = tempData.find(v => String(v.label) === String(label));
    if (item) {
        return item.value;
    }
    return emptyText;
};`,ctx:{type:"declaration",name:"getValueByLabel",value:"(label, data = [], emptyText = '--') => {",string:"getValueByLabel"}},{tags:[{type:"param",string:"{Object} res     数据源",name:"res",description:"<p>数据源</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} [options]={} { path = '', valueKey = 'value', labelKey = 'label', renderLabel = node => node.label }",name:"[options]={}",description:"<p>{ path = '', valueKey = 'value', labelKey = 'label', renderLabel = node =&gt; node.label }</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Array}         标准的枚举数据格式 [{ value, label }]",types:["Array"],typesDescription:"<code>Array</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>标准的枚举数据格式 [{ value, label }]</p>"},{type:"example",string:`
const res = { code: 1, data: { list: [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格' }] }, message: 'success' }
convertDataToEnum(res, { path: 'data.list', valueKey: 'code', labelKey: 'desc' })
// => [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]`,html:`<p>const res = { code: 1, data: { list: [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格' }] }, message: 'success' }<br />
convertDataToEnum(res, { path: 'data.list', valueKey: 'code', labelKey: 'desc' })<br />
// =&gt; [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]</p>`}],description:{full:"<p>将任意数据返回转换成 Enum [{ value, label }]</p>",summary:"<p>将任意数据返回转换成 Enum [{ value, label }]</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:81,codeStart:92,code:`const convertDataToEnum = (res, options = {}) => {
    if (isEmptyValue(res)) {
        return [];
    }
    const {
        path = '', // list 的路径
        valueKey = 'value',
        labelKey = 'label',
        renderLabel = node => node.label
    } = options;
    const list = path ? get(res, path, []) : res;
    return list.map(v => {
        // 数组的每一项是基本类型: number | string
        if (typeof v !== 'object') {
            return {
                value: v,
                label: v
            };
        }
        const value = get(v, valueKey);
        const label = renderLabel({
            ...v,
            value,
            label: get(v, labelKey)
        });
        return {
            ...v,
            value,
            label
        };
    });
};`,ctx:{type:"declaration",name:"convertDataToEnum",value:"(res, options = {}) => {",string:"convertDataToEnum"}},{tags:[{type:"param",string:"{Object} res    数据源",name:"res",description:"<p>数据源</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} [options]={} { path = '', valueKey = 'value', labelKey = 'label', childrenKey = 'children', renderLabel = node => node.label }",name:"[options]={}",description:"<p>{ path = '', valueKey = 'value', labelKey = 'label', childrenKey = 'children', renderLabel = node =&gt; node.label }</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Array}         标准的枚举数据格式 [{ value, label }]",types:["Array"],typesDescription:"<code>Array</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>标准的枚举数据格式 [{ value, label }]</p>"},{type:"example",string:`
const res = { code: 1, data: { list: [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格', list: [ { code: 3.5, desc: '一般' }] }] }, message: 'success' }
convertDataToCascader(res, { path: 'data.list', valueKey: 'code', labelKey: 'desc', childrenKey: 'list' })
// => [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格', children: [{ value: 3.5, label: '一般' }] }]`,html:`<p>const res = { code: 1, data: { list: [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格', list: [ { code: 3.5, desc: '一般' }] }] }, message: 'success' }<br />
convertDataToCascader(res, { path: 'data.list', valueKey: 'code', labelKey: 'desc', childrenKey: 'list' })<br />
// =&gt; [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格', children: [{ value: 3.5, label: '一般' }] }]</p>`}],description:{full:"<p>将任意数据返回转换成 Cascader: [{ value, label, children: [{ value, label }]}]</p>",summary:"<p>将任意数据返回转换成 Cascader: [{ value, label, children: [{ value, label }]}]</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:125,codeStart:136,code:`const convertDataToCascader = (res, config) => {
    const { path = '', valueKey = 'value', labelKey = 'label', childrenKey = 'children', renderLabel = node => node.label } = config;
    const convertData = data => {
        return data.reduce((prev, cur) => {
            const item = {
                value: cur[valueKey],
                label: cur[labelKey],
                children: []
            };
            item.label = renderLabel(item);
            if (cur[childrenKey]) {
                item.children = convertData(cur[childrenKey]);
            }
            prev.push(item);
            return prev;
        }, []);
    };
    const list = path ? get(res, path, []) : res;
    return convertData(list);
};`,ctx:{type:"declaration",name:"convertDataToCascader",value:"(res, config) => {",string:"convertDataToCascader"}},{tags:[{type:"see",string:"getLabelByValue",local:"getLabelByValue",html:"<p>getLabelByValue</p>"},{type:"param",string:"{*} value      值",name:"value",description:"<p>值</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Array}  data 数据源",name:"data",description:"<p>数据源</p>",types:["Array"],typesDescription:"<code>Array</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} options    { key = '', valueKey = '', emptyText = '--' }",name:"options",description:"<p>{ key = '', valueKey = '', emptyText = '--' }</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{*}            值",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>值</p>"},{type:"example",string:`
const data = [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格' }];
getValueInCollection('优秀', data, { key: 'code', valueKey: 'desc' })
// => 5`,html:`<p>const data = [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格' }];<br />
getValueInCollection('优秀', data, { key: 'code', valueKey: 'desc' })<br />
// =&gt; 5</p>`},{type:"example",string:`
const data = [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格' }];
getValueInCollection(5, data, { valueKey: 'code', key: 'desc' })
// => '优秀'`,html:`<p>const data = [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格' }];<br />
getValueInCollection(5, data, { valueKey: 'code', key: 'desc' })<br />
// =&gt; '优秀'</p>`}],description:{full:`<p>从集合中取值<br />
比 getLabelByValue 更宽松, 容错, 默认值</p>`,summary:`<p>从集合中取值<br />
比 getLabelByValue 更宽松, 容错, 默认值</p>`,body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:157,codeStart:177,code:`const getValueInCollection = (value, data = [], options = {}) => {
    const { key = '', valueKey = '', emptyText = '--' } = options;
    const item = data.find(v => {
        return String(value) === String(v[key]);
    });
    if (item) {
        return item[valueKey];
    }
    return emptyText;
};`,ctx:{type:"declaration",name:"getValueInCollection",value:"(value, data = [], options = {}) => {",string:"getValueInCollection"}}],b=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"docs/enum.md","filePath":"docs/enum.md","lastUpdated":null}'),c={name:"docs/enum.md"},y=Object.assign(c,{setup(i){const e=l(o);return(p,d)=>{const a=t("Dox");return r(),n("div",null,[s(a,{data:e.value},null,8,["data"])])}}});export{b as __pageData,y as default};
