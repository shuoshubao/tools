import{e as t,ah as a,c as n,U as l,o}from"./chunks/framework.DI3RqUrd.js";const i=[{tags:[],description:{full:"<p>eslint-disable no-use-before-define</p>",summary:"<p>eslint-disable no-use-before-define</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:1,codeStart:3,code:`import { isNumber, kebabCase, last, uniq } from 'lodash';
import { isEmptyObject } from './types';`,ctx:!1},{tags:[{type:"param",string:"{HTMLElement} element   dom元素",name:"element",description:"<p>dom元素</p>",types:["HTMLElement"],typesDescription:"<code>HTMLElement</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} [attrs] 属性",name:"[attrs]",description:"<p>属性</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{*}       undefined",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>undefined</p>"},{type:"example",string:`
setAttrs(eDiv, { id: 1, class: 'abc' })
// => <div id="1" class="abc"></div>`,html:`<p>setAttrs(eDiv, { id: 1, class: 'abc' })<br />
// =&gt; <div id="1" class="abc"></div></p>`}],description:{full:"<p>给元素批量设置属性</p>",summary:"<p>给元素批量设置属性</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:6,codeStart:16,code:`const setAttrs = (element, attrs = {}) => {
    Object.entries(attrs).forEach(([k, v]) => {
        element.setAttribute(k, v);
    });
};`,ctx:{type:"declaration",name:"setAttrs",value:"(element, attrs = {}) => {",string:"setAttrs"}},{tags:[{type:"param",string:"{*} blob    blob数据",name:"blob",description:"<p>blob数据</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} [options] a链接的属性",name:"[options]",description:"<p>a链接的属性</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{*}       undefined",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>undefined</p>"},{type:"example",string:`
downloadBlob(blobData, { download: 'demo.png' })
// => 浏览器下载文件`,html:`<p>downloadBlob(blobData, { download: 'demo.png' })<br />
// =&gt; 浏览器下载文件</p>`}],description:{full:"<p>下载 blob</p>",summary:"<p>下载 blob</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:22,codeStart:32,code:`const downloadBlob = (blob, options = {}) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(blob);
    fileReader.onload = e => {
        const elmentA = document.createElement('a');
        const href = e.target.result;
        setAttrs(elmentA, { ...options, href });
        document.body.appendChild(elmentA);
        elmentA.click();
        document.body.removeChild(elmentA);
    };
};`,ctx:{type:"declaration",name:"downloadBlob",value:"(blob, options = {}) => {",string:"downloadBlob"}},{tags:[{type:"param",string:"{String} url    文件地址",name:"url",description:"<p>文件地址</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} config a 链接的属性",name:"config",description:"<p>a 链接的属性</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{*}       undefined",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>undefined</p>"},{type:"example",string:`
download('https://github.githubassets.com/favicons/favicon.png', { download: 'favicon.ico' })
// => 浏览器下载文件`,html:`<p>download('https://github.githubassets.com/favicons/favicon.png', { download: 'favicon.ico' })<br />
// =&gt; 浏览器下载文件</p>`}],description:{full:"<p>下载文件</p>",summary:"<p>下载文件</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:45,codeStart:55,code:`const download = (url = '', config = {}) => {
    const elmentA = document.createElement('a');
    document.body.append(elmentA);
    const downloadFileName = last(url.split('/'));
    setAttrs(elmentA, {
        href: url,
        download: downloadFileName,
        target: '_blank',
        rel: 'noopener noreferrer',
        ...config
    });
    setStyle(elmentA, {
        display: 'none !important'
    });
    elmentA.click();
    document.body.removeChild(elmentA);
};`,ctx:{type:"declaration",name:"download",value:"(url = '', config = {}) => {",string:"download"}},{tags:[{type:"param",string:"{Object} [cssom] css 对象",name:"[cssom]",description:"<p>css 对象</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Object}       带有'px'单位的 cssom",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>带有'px'单位的 cssom</p>"},{type:"example",string:`
convertCssom({ width: 100, height: 200 })
// => { width: '100px', height: '200px' }`,html:`<p>convertCssom({ width: 100, height: 200 })<br />
// =&gt; { width: '100px', height: '200px' }</p>`},{type:"example",string:`
convertCssom({ width: 100, minHeight: 100, marginTop: 10, paddingBottom: 10 })
// => { width: '100px', 'min-height': '100px', 'margin-top': '10px', 'padding-bottom': '10px' }`,html:`<p>convertCssom({ width: 100, minHeight: 100, marginTop: 10, paddingBottom: 10 })<br />
// =&gt; { width: '100px', 'min-height': '100px', 'margin-top': '10px', 'padding-bottom': '10px' }</p>`}],description:{full:"<p>给cssom加上单位px</p>",summary:"<p>给cssom加上单位px</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:73,codeStart:87,code:`const convertCssom = (cssom = {}) => {
    // 当值为数字时, 加上单位 \`px\` 的css属性
    const DefaultUnitsPxProperties = ['font-size', 'margin', 'padding', 'border'];

    // margin, padding, border
    ['top', 'right', 'bottom', 'left'].forEach(v => {
        DefaultUnitsPxProperties.push(v);
        DefaultUnitsPxProperties.push(['margin', v].join('-'));
        DefaultUnitsPxProperties.push(['padding', v].join('-'));
        DefaultUnitsPxProperties.push(['border', v, 'width'].join('-'));
    });

    // max min
    ['width', 'height'].forEach(v => {
        DefaultUnitsPxProperties.push(v);
        DefaultUnitsPxProperties.push(['max', v].join('-'), ['min', v].join('-'));
    });

    return Object.entries(cssom).reduce((prev, [k, v]) => {
        const key = kebabCase(k);
        // 对于一些特定属性, 当值为数字时, 加上单位 px
        if (isNumber(v) && DefaultUnitsPxProperties.includes(key)) {
            prev[key] = \`\${v}px\`;
        } else {
            prev[key] = v;
        }
        return prev;
    }, {});
};`,ctx:{type:"declaration",name:"convertCssom",value:"(cssom = {}) => {",string:"convertCssom"}},{tags:[{type:"param",string:"{HTMLElement} element   dom元素",name:"element",description:"<p>dom元素</p>",types:["HTMLElement"],typesDescription:"<code>HTMLElement</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{StyleSheet} cssom   cssom",name:"cssom",description:"<p>cssom</p>",types:["StyleSheet"],typesDescription:"<code>StyleSheet</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{*}       undefined",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>undefined</p>"},{type:"example",string:`
setStyle(eDiv, { width: 100, color: 'red' })
// => <div style="width: 100px; color: red;"></div>`,html:`<p>setStyle(eDiv, { width: 100, color: 'red' })<br />
// =&gt; <div style="width: 100px; color: red;"></div></p>`}],description:{full:"<p>给元素批量设置样式</p>",summary:"<p>给元素批量设置样式</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:117,codeStart:127,code:`const setStyle = (element, cssom) => {
    const computedCssom = convertCssom(cssom);
    Object.entries(computedCssom).forEach(([k, v]) => {
        element.style[k] = v;
    });
};`,ctx:{type:"declaration",name:"setStyle",value:"(element, cssom) => {",string:"setStyle"}},{tags:[{type:"param",string:"{StyleSheet} cssom   cssom",name:"cssom",description:"<p>cssom</p>",types:["StyleSheet"],typesDescription:"<code>StyleSheet</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}       cssText 字符串",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>cssText 字符串</p>"},{type:"example",string:`
getCssText({ width: 100, color: 'red' })
// => 'width: 100px; color: red;'`,html:`<p>getCssText({ width: 100, color: 'red' })<br />
// =&gt; 'width: 100px; color: red;'</p>`}],description:{full:"<p>获取 cssText</p>",summary:"<p>获取 cssText</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:134,codeStart:143,code:`const getCssText = (cssom = {}) => {
    if (isEmptyObject(cssom)) {
        return '';
    }
    const computedCssom = convertCssom(cssom);
    const cssText = Object.entries(computedCssom)
        .reduce((prev, [k, v]) => {
            prev.push([k, v].join(': '));
            return prev;
        }, [])
        .join('; ');
    return [cssText, ';'].join('');
};`,ctx:{type:"declaration",name:"getCssText",value:"(cssom = {}) => {",string:"getCssText"}},{tags:[{type:"param",string:"{String} word  字符串",name:"word",description:"<p>字符串</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{StyleSheet} cssom   cssom",name:"cssom",description:"<p>cssom</p>",types:["StyleSheet"],typesDescription:"<code>StyleSheet</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Number}       字符串在浏览器中所占的长度",types:["Number"],typesDescription:"<code>Number</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>字符串在浏览器中所占的长度</p>"},{type:"example",string:`getWordWidth('四个汉字')
// => 56`,html:`<p>getWordWidth('四个汉字')<br />
// =&gt; 56</p>`},{type:"example",string:`getWordWidth('汉字abc123')
// => 78`,html:`<p>getWordWidth('汉字abc123')<br />
// =&gt; 78</p>`}],description:{full:"<p>获取字符串在浏览器中所占的长度</p>",summary:"<p>获取字符串在浏览器中所占的长度</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:157,codeStart:171,code:`const getWordWidth = (word = '', cssom = {}) => {
    const eleSpan = document.createElement('span');
    const defaultCssom = { visibility: 'hidden', whiteSpace: 'nowrap', fontSize: 14 };
    eleSpan.style.cssText = getCssText({
        ...defaultCssom,
        ...cssom
    });
    document.body.appendChild(eleSpan);
    eleSpan.innerText = word;
    const width = eleSpan.offsetWidth;
    document.body.removeChild(eleSpan);
    return Math.ceil(Number.parseFloat(width));
};`,ctx:{type:"declaration",name:"getWordWidth",value:"(word = '', cssom = {}) => {",string:"getWordWidth"}},{tags:[{type:"param",string:"{*} text   要复制的文本",name:"text",description:"<p>要复制的文本</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{*}       undefined",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>undefined</p>"},{type:"example",string:`
copyText('abc')
// => 复制内容到粘贴板`,html:`<p>copyText('abc')<br />
// =&gt; 复制内容到粘贴板</p>`},{type:"example",string:`
copyText('abc\\n123')
// => 复制内容到粘贴板`,html:`<p>copyText('abc\\n123')<br />
// =&gt; 复制内容到粘贴板</p>`}],description:{full:"<p>复制文本</p>",summary:"<p>复制文本</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:185,codeStart:199,code:`const copyText = (text = '') => {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
};`,ctx:{type:"declaration",name:"copyText",value:"(text = '') => {",string:"copyText"}},{tags:[{type:"see",string:"https://www.npmjs.com/package/classnames",title:"",url:"https://www.npmjs.com/package/classnames",html:"<p>https://www.npmjs.com/package/classnames</p>"},{type:"param",string:"{...*} args   每个className的描述",name:"args",description:"<p>每个className的描述</p>",types:"[object Object]",typesDescription:"...*",optional:!1,nullable:!1,nonNullable:!1,variable:!0},{type:"return",string:"{String}       className 字符串",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>className 字符串</p>"},{type:"example",string:`
classNames('foo', 'bar')
// => 'foo bar'`,html:`<p>classNames('foo', 'bar')<br />
// =&gt; 'foo bar'</p>`},{type:"example",string:`
classNames('foo', { bar: true })
// => 'foo bar'`,html:`<p>classNames('foo', { bar: true })<br />
// =&gt; 'foo bar'</p>`},{type:"example",string:`
classNames({ 'foo-bar': true })
// => 'foo-bar'`,html:`<p>classNames({ 'foo-bar': true })<br />
// =&gt; 'foo-bar'</p>`},{type:"example",string:`
classNames({ 'foo-bar': false })
// => ''`,html:`<p>classNames({ 'foo-bar': false })<br />
// =&gt; ''</p>`},{type:"example",string:`
classNames({ foo: true }, { bar: true })
// => 'foo bar'`,html:`<p>classNames({ foo: true }, { bar: true })<br />
// =&gt; 'foo bar'</p>`},{type:"example",string:`
classNames({ foo: true, bar: true })
// => 'foo bar'`,html:`<p>classNames({ foo: true, bar: true })<br />
// =&gt; 'foo bar'</p>`}],description:{full:"<p>classNames</p>",summary:"<p>classNames</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:208,codeStart:243,code:`const classNames = (...args) => {
    const classNameList = [];
    []
        .concat(...args)
        .filter(Boolean)
        .forEach(v => {
            if (typeof v === 'object') {
                Object.entries(v).forEach(([k2, v2]) => {
                    if (v2) {
                        classNameList.push(k2);
                    }
                });
            } else {
                classNameList.push(String(v || '').trim());
            }
        });
    return uniq(classNameList.join(' ').split(' ').filter(Boolean)).join(' ');
};`,ctx:{type:"declaration",name:"classNames",value:"(...args) => {",string:"classNames"}},{tags:[{type:"param",string:"{String} [baseClassName='']   基准 ClassName",name:"[baseClassName='']",description:"<p>基准 ClassName</p>",types:["String"],typesDescription:"<code>String</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} [suffixConfig={}]   classNames 对象",name:"[suffixConfig={}]",description:"<p>classNames 对象</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} [config={separator: '-'}]   classNames 对象",name:"[config={separator: '-'}]",description:"<p>classNames 对象</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}       className 字符串",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>className 字符串</p>"},{type:"example",string:`
suffixClassNames('table', { bordered: true, shadow: false })
// => 'table table-bordered'`,html:`<p>suffixClassNames('table', { bordered: true, shadow: false })<br />
// =&gt; 'table table-bordered'</p>`}],description:{full:`<p>给 className 加后缀<br />
适用于开发组件库时, 给className加作用域</p>`,summary:`<p>给 className 加后缀<br />
适用于开发组件库时, 给className加作用域</p>`,body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:262,codeStart:274,code:`const suffixClassNames = (baseClassName = '', suffixConfig = {}, config = {}) => {
    const computedConfig = {
        separator: '-',
        ...config
    };
    const classNameList = [baseClassName];
    Object.entries(suffixConfig).forEach(([k, v]) => {
        if (v) {
            classNameList.push([baseClassName, k].join(computedConfig.separator));
        }
    });
    return classNames(classNameList);
};`,ctx:{type:"declaration",name:"suffixClassNames",value:"(baseClassName = '', suffixConfig = {}, config = {}) => {",string:"suffixClassNames"}}],f=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"documents/dom.md","filePath":"documents/dom.md","lastUpdated":null}'),r={name:"documents/dom.md"},b=Object.assign(r,{setup(p){const e=t(i);return(c,d)=>{const s=a("Dox");return o(),n("div",null,[l(s,{data:e.value},null,8,["data"])])}}});export{f as __pageData,b as default};
