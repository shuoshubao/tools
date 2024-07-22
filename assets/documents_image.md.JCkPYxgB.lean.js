import{e as n,ah as a,c as s,U as i,o}from"./chunks/framework.DI3RqUrd.js";const l=[{tags:[{type:"param",string:"{String} url 图片的url",name:"url",description:"<p>图片的url</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Object}     图片的尺寸 { width, height }",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>图片的尺寸 { width, height }</p>"},{type:"example",string:`
(async() => {
  const size = await getImageSize('https://github.githubassets.com/favicons/favicon.png');
  console.log(size);
})();

// => { width: 24, height: 24 }`,html:`<p>(async() =&gt; {<br />
const size = await getImageSize('https://github.githubassets.com/favicons/favicon.png');<br />
console.log(size);<br />
})();</p>
<p>// =&gt; { width: 24, height: 24 }</p>`}],description:{full:"<p>获取图片的尺寸</p>",summary:"<p>获取图片的尺寸</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:3,codeStart:16,code:`const getImageSize = (url = '') => {
    return new Promise(reslove => {
        const img = new Image();
        img.src = url;
        img.onload = async () => {
            reslove(pick(img, ['width', 'height']));
        };
        img.onerror = async () => {
            reslove({ width: 0, height: 0 });
        };
    });
};`,ctx:{type:"declaration",name:"getImageSize",value:"(url = '') => {",string:"getImageSize"}}],d=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"documents/image.md","filePath":"documents/image.md","lastUpdated":null}'),r={name:"documents/image.md"},u=Object.assign(r,{setup(c){const e=n(l);return(g,p)=>{const t=a("Dox");return o(),s("div",null,[i(t,{data:e.value},null,8,["data"])])}}});export{d as __pageData,u as default};
