import{e as a,ah as s,c as n,U as o,o as l}from"./chunks/framework.DI3RqUrd.js";const r=[{tags:[{type:"param",string:"{*} context  this",name:"context",description:"<p>this</p>",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Object} newState 新的状态",name:"newState",description:"<p>新的状态</p>",types:["Object"],typesDescription:"<code>Object</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{*}          无",types:"[object Object]",typesDescription:"*",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>无</p>"},{type:"example",string:`
this.setState({ a: 1 }, () => {
  console.log('do something here');
});
// 等价于
await setAsyncState(this, { a: 1 });
console.log('do something here');`,html:`<p>this.setState({ a: 1 }, () =&gt; {<br />
console.log('do something here');<br />
});<br />
// 等价于<br />
await setAsyncState(this, { a: 1 });<br />
console.log('do something here');</p>`}],description:{full:"<p>setState =&gt; promise</p>",summary:"<p>setState =&gt; promise</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:1,codeStart:15,code:`const setAsyncState = (context, newState) => {
    return new Promise(resolve => {
        context.setState(newState, resolve);
    });
};`,ctx:{type:"declaration",name:"setAsyncState",value:"(context, newState) => {",string:"setAsyncState"}}],f=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"docs/react.md","filePath":"docs/react.md","lastUpdated":null}'),c={name:"docs/react.md"},b=Object.assign(c,{setup(i){const e=a(r);return(p,d)=>{const t=s("Dox");return l(),n("div",null,[o(t,{data:e.value},null,8,["data"])])}}});export{f as __pageData,b as default};
