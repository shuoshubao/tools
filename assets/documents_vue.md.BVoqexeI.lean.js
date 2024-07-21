import{e as t,ah as l,c as s,U as n,o}from"./chunks/framework.DI3RqUrd.js";const i=[{tags:[{type:"param",string:"{Function} [.validate] 校验方法",name:"[.validate]",description:"<p>校验方法</p>",types:["Function"],typesDescription:"<code>Function</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Promise<Boolean>} 校验结果",types:["Promise<Boolean>"],typesDescription:"<code>Promise</code><<code>Boolean</code>>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>校验结果</p>"},{type:"example",string:`
const isValid = await pifyValidate(this.$refs.form.validate)
// => false`,html:`<p>const isValid = await pifyValidate(this.$refs.form.validate)<br />
// =&gt; false</p>`}],description:{full:"<p>将 element-ui Form组件 的 validate 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式</p>",summary:"<p>将 element-ui Form组件 的 validate 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:1,codeStart:10,code:`const pifyValidate = validateFn => {
    return new Promise(resolve => {
        validateFn(valid => {
            resolve(valid);
        });
    });
};`,ctx:{type:"declaration",name:"pifyValidate",value:"validateFn => {",string:"pifyValidate"}}],f=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"documents/vue.md","filePath":"documents/vue.md","lastUpdated":null}'),r={name:"documents/vue.md"},u=Object.assign(r,{setup(d){const e=t(i);return(c,p)=>{const a=l("Dox");return o(),s("div",null,[n(a,{data:e.value},null,8,["data"])])}}});export{f as __pageData,u as default};
