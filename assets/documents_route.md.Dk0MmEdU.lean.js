import{e as a,ah as n,c as r,U as l,o as s}from"./chunks/framework.DI3RqUrd.js";const o=[{tags:[{type:"param",string:"{String} str query字符串",name:"str",description:"<p>query字符串</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{String} key query的key",name:"key",description:"<p>query的key</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String|Object}     完整的query对象或者单个的query值",types:["String","Object"],typesDescription:"<code>String</code> | <code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>完整的query对象或者单个的query值</p>"},{type:"example",string:`
getParams('a=1&b=2&c&d=2&d=3')
// => { a: '1', b: '2', c: null, d: ['2', '3'] }`,html:`<p>getParams('a=1&amp;b=2&amp;c&amp;d=2&amp;d=3')<br />
// =&gt; { a: '1', b: '2', c: null, d: ['2', '3'] }</p>`},{type:"example",string:`
getParams('a=1&b=2&c&d=2&d=3', 'a')
// => '1'`,html:`<p>getParams('a=1&amp;b=2&amp;c&amp;d=2&amp;d=3', 'a')<br />
// =&gt; '1'</p>`}],description:{full:"<p>获取参数</p>",summary:"<p>获取参数</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:5,codeStart:20,code:`const getParams = (str, key) => {
    const params = queryParse(str);
    if (isEmptyValue(key)) {
        return params;
    }
    return params[key];
};`,ctx:{type:"declaration",name:"getParams",value:"(str, key) => {",string:"getParams"}},{tags:[{type:"param",string:"{String} key key值",name:"key",description:"<p>key值</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String|Object}    传key时返回字符串; 不传key时, 则返回所有query参数的json",types:["String","Object"],typesDescription:"<code>String</code> | <code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>传key时返回字符串; 不传key时, 则返回所有query参数的json</p>"},{type:"example",string:`
// 假设当前的url为 http://aa.com/abc/d?a=1&b=2
search()
// => { a: '1', b: '2' }

search('a')
// => '1'`,html:`<p>// 假设当前的url为 http://aa.com/abc/d?a=1&amp;b=2<br />
search()<br />
// =&gt; { a: '1', b: '2' }</p>
<p>search('a')<br />
// =&gt; '1'</p>`}],description:{full:"<p>获取 search 参数</p>",summary:"<p>获取 search 参数</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:28,codeStart:41,code:`const search = (key = '') => {
    // 从hash里解析 search 参数 (router 模式)
    const [, str = ''] = (window.location.search || window.location.hash).split('?');
    return getParams(str, key);
};`,ctx:{type:"declaration",name:"search",value:"(key = '') => {",string:"search"}},{tags:[{type:"param",string:"{String} [url='']    基础url",name:"[url='']",description:"<p>基础url</p>",types:["String"],typesDescription:"<code>String</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} [params={}] query参数",name:"[params={}]",description:"<p>query参数</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}        拼接的完整url",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>拼接的完整url</p>"},{type:"example",string:`
stringifyUrl('', { a: 1 })
// => '?a=1'`,html:`<p>stringifyUrl('', { a: 1 })<br />
// =&gt; '?a=1'</p>`},{type:"example",string:`
stringifyUrl('abc', { a: 1 })
// => 'abc?a=1'`,html:`<p>stringifyUrl('abc', { a: 1 })<br />
// =&gt; 'abc?a=1'</p>`},{type:"example",string:`
stringifyUrl('http://aa.com/abc/d', { a: 1 })
// => 'http://aa.com/abc/d?a=1'`,html:`<p>stringifyUrl('http://aa.com/abc/d', { a: 1 })<br />
// =&gt; 'http://aa.com/abc/d?a=1'</p>`}],description:{full:"<p>拼接url</p>",summary:"<p>拼接url</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:47,codeStart:67,code:`const stringifyUrl = (url = '', params = {}) => {
    const args = Object.entries(params).reduce((prev, [k, v]) => {
        if (!isNil(v) && v !== '') {
            prev[k] = v;
        }
        return prev;
    }, {});
    if (isEmptyObject(args)) {
        return url;
    }
    return [url, queryStringify(args)].join('?');
};`,ctx:{type:"declaration",name:"stringifyUrl",value:"(url = '', params = {}) => {",string:"stringifyUrl"}},{tags:[{type:"param",string:"{Object} params 新的query参数",name:"params",description:"<p>新的query参数</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{String} url    基础url",name:"url",description:"<p>基础url</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}        更新query后的完整url",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>更新query后的完整url</p>"},{type:"example",string:`
updateUrlQuery({ a: 1 }, '');
// => '?a=1'`,html:`<p>updateUrlQuery({ a: 1 }, '');<br />
// =&gt; '?a=1'</p>`},{type:"example",string:`
updateUrlQuery({ a: 2 }, 'http://aa.com/abc/d?a=1')
// => 'http://aa.com/abc/d?a=2'`,html:`<p>updateUrlQuery({ a: 2 }, 'http://aa.com/abc/d?a=1')<br />
// =&gt; 'http://aa.com/abc/d?a=2'</p>`}],description:{full:"<p>更新 url 某个参数</p>",summary:"<p>更新 url 某个参数</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:80,codeStart:95,code:`const updateUrlQuery = (params = {}, url = '') => {
    const baseUrl = url.split('?')[0];
    const query = getParams(url.split('?')[1] || '');
    return stringifyUrl(baseUrl, { ...query, ...params });
};`,ctx:{type:"declaration",name:"updateUrlQuery",value:"(params = {}, url = '') => {",string:"updateUrlQuery"}},{tags:[{type:"param",string:"{String} url     基础url",name:"url",description:"<p>基础url</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} [params={}]  query参数",name:"[params={}]",description:"<p>query参数</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} [options={}] a链接的属性",name:"[options={}]",description:"<p>a链接的属性</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{*}         跳转页面",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>跳转页面</p>"},{type:"example",string:`
linkTo('http://aa.com/abc/d', { a: 1 })
// => 打开页面 http://aa.com/abc/d?a=1`,html:`<p>linkTo('http://aa.com/abc/d', { a: 1 })<br />
// =&gt; 打开页面 http://aa.com/abc/d?a=1</p>`},{type:"example",string:`
linkTo('http://aa.com/abc/d', { a: 1 }, { target: '_blank' })
// => 新标签打开页面 http://aa.com/abc/d?a=1`,html:`<p>linkTo('http://aa.com/abc/d', { a: 1 }, { target: '_blank' })<br />
// =&gt; 新标签打开页面 http://aa.com/abc/d?a=1</p>`}],description:{full:"<p>跳转页面</p>",summary:"<p>跳转页面</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:101,codeStart:117,code:`const linkTo = (url = '', params = {}, options = {}) => {
    const defaultOptions = {
        target: '_self', // a 标签属性
        isNewTab: false, // 是否在新 Tab打开（窗口、tab页）
        rel: 'noreferrer', // a 标签属性
        download: '' // a 标签属性
    };
    const computedOptions = {
        ...defaultOptions,
        ...options
    };
    if (computedOptions.isNewTab) {
        computedOptions.target = '_blank';
    }
    const { target, rel, download } = computedOptions;
    const href = stringifyUrl(url, params);
    const elmentA = document.createElement('a');
    elmentA.target = target;
    elmentA.href = href;
    if (rel) {
        elmentA.rel = rel;
    }
    if (download) {
        if (download === true) {
            elmentA.setAttribute('download', '');
        } else {
            elmentA.setAttribute('download', download);
        }
    }
    elmentA.setAttribute('hidden', 'hidden');
    document.body.appendChild(elmentA);
    elmentA.click();
    document.body.removeChild(elmentA);
};`,ctx:{type:"declaration",name:"linkTo",value:"(url = '', params = {}, options = {}) => {",string:"linkTo"}},{tags:[{type:"param",string:"{String} [url=''] url字符串",name:"[url='']",description:"<p>url字符串</p>",types:["String"],typesDescription:"<code>String</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Object}     { 'protocol', 'host', 'pathname', 'port', 'search', 'hash', 'origin', 'hostname' }",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>{ 'protocol', 'host', 'pathname', 'port', 'search', 'hash', 'origin', 'hostname' }</p>"},{type:"example",string:`
parseUrl('http://aa.com/abc/d?a=1');
// => {"protocol": "http:", "host": "aa.com", "pathname": "/abc/d", "port": "", "search": "?a=1", "hash": "", "origin": "http://aa.com", "hostname": "aa.com"}`,html:`<p>parseUrl('http://aa.com/abc/d?a=1');<br />
// =&gt; {&quot;protocol&quot;: &quot;http:&quot;, &quot;host&quot;: &quot;aa.com&quot;, &quot;pathname&quot;: &quot;/abc/d&quot;, &quot;port&quot;: &quot;&quot;, &quot;search&quot;: &quot;?a=1&quot;, &quot;hash&quot;: &quot;&quot;, &quot;origin&quot;: &quot;http://aa.com&quot;, &quot;hostname&quot;: &quot;aa.com&quot;}</p>`}],description:{full:"<p>解析 url</p>",summary:"<p>解析 url</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:152,codeStart:161,code:`const parseUrl = (url = '') => {
    let elmentA = document.createElement('a');
    elmentA.href = url;
    const result = pick(elmentA, ['protocol', 'host', 'pathname', 'port', 'search', 'hash', 'origin', 'hostname']);
    elmentA = null;
    return result;
};`,ctx:{type:"declaration",name:"parseUrl",value:"(url = '') => {",string:"parseUrl"}},{tags:[{type:"param",string:"{String} url 相对路径",name:"url",description:"<p>相对路径</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}     完整的url",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>完整的url</p>"},{type:"example",string:`
// 假设当前的url为 http://aa.com/abc/d?a=1&b=2
getFullUrl('/abc')
// => http://aa.com/abc`,html:`<p>// 假设当前的url为 http://aa.com/abc/d?a=1&amp;b=2<br />
getFullUrl('/abc')<br />
// =&gt; http://aa.com/abc</p>`}],description:{full:"<p>获取完整 url</p>",summary:"<p>获取完整 url</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:169,codeStart:179,code:`const getFullUrl = (url = '') => {
    if (!url) {
        return '';
    }
    let elmentA = document.createElement('a');
    elmentA.href = url;
    const result = elmentA.href;
    elmentA = null;
    return result;
};`,ctx:{type:"declaration",name:"getFullUrl",value:"(url = '') => {",string:"getFullUrl"}}],d=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"documents/route.md","filePath":"documents/route.md","lastUpdated":null}'),p={name:"documents/route.md"},b=Object.assign(p,{setup(i){const e=a(o);return(c,u)=>{const t=n("Dox");return s(),r("div",null,[l(t,{data:e.value},null,8,["data"])])}}});export{d as __pageData,b as default};
