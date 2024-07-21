import{e as a,ah as n,c as s,U as i,o as l}from"./chunks/framework.DI3RqUrd.js";const r=[{tags:[{type:"param",string:"{String} url 图片的url",name:"url",description:"<p>图片的url</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Object}     图片的尺寸 { width, height }",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>图片的尺寸 { width, height }</p>"},{type:"example",string:`
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
};`,ctx:{type:"declaration",name:"getImageSize",value:"(url = '') => {",string:"getImageSize"}},{tags:[{type:"param",string:"{String} url 图片的url",name:"url",description:"<p>图片的url</p>",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}     图片的base64数据",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>图片的base64数据</p>"}],description:{full:"<p>将图片的 http-url 变成 base64</p>",summary:"<p>将图片的 http-url 变成 base64</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:29,codeStart:34,code:`const changeImageUrlToBase64 = url => {
    if (url.startsWith('data:image')) {
        return url;
    }
    return new Promise(reslove => {
        const img = new Image();
        img.src = url;
        img.onload = async () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const { width, height } = img;
            canvas.width = width;
            canvas.height = height;
            ctx.drawImage(img, 0, 0, width, height);
            reslove(canvas.toDataURL('image/jpeg'));
        };
    });
};`,ctx:{type:"declaration",name:"changeImageUrlToBase64",value:"url => {",string:"changeImageUrlToBase64"}}],d=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"documents/image.md","filePath":"documents/image.md","lastUpdated":null}'),o={name:"documents/image.md"},u=Object.assign(o,{setup(c){const e=a(r);return(g,p)=>{const t=n("Dox");return l(),s("div",null,[i(t,{data:e.value},null,8,["data"])])}}});export{d as __pageData,u as default};
