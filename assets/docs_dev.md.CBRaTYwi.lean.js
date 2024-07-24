import{e as t,ah as a,c as n,U as l,o}from"./chunks/framework.DI3RqUrd.js";const i=[{tags:[{type:"param",string:"{Number} [time] 等待时长(秒)",name:"[time]",description:"<p>等待时长(秒)</p>",types:["Number"],typesDescription:"<code>Number</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"example",string:`
await sleep()
console.log('hi')
// => random(0, 1) 秒后输出: 'hi'`,html:`<p>await sleep()<br />
console.log('hi')<br />
// =&gt; random(0, 1) 秒后输出: 'hi'</p>`},{type:"example",string:`await sleep(3)
console.log('hi')
// => 3 秒后输出: 'hi'`,html:`<p>await sleep(3)<br />
console.log('hi')<br />
// =&gt; 3 秒后输出: 'hi'</p>`},{type:"example",string:`await sleep(2, 5)
console.log('hi')
// => random(2, 5) 秒后输出: 'hi'`,html:`<p>await sleep(2, 5)<br />
console.log('hi')<br />
// =&gt; random(2, 5) 秒后输出: 'hi'</p>`}],description:{full:`<p>睡眠函数<br />
可用于模拟接口请求, 或者 setTimeout 的替代形式</p>`,summary:`<p>睡眠函数<br />
可用于模拟接口请求, 或者 setTimeout 的替代形式</p>`,body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:3,codeStart:23,code:`const sleep = (...args) => {
    let sleepTime;
    if (args.length === 1) {
        sleepTime = args[0];
    } else {
        sleepTime = random(...args);
    }
    sleepTime *= 1000;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(sleepTime);
        }, sleepTime);
    });
};`,ctx:{type:"declaration",name:"sleep",value:"(...args) => {",string:"sleep"}}],g=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"docs/dev.md","filePath":"docs/dev.md","lastUpdated":null}'),r={name:"docs/dev.md"},u=Object.assign(r,{setup(p){const e=t(i);return(m,c)=>{const s=a("Dox");return o(),n("div",null,[l(s,{data:e.value},null,8,["data"])])}}});export{g as __pageData,u as default};
