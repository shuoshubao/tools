import{e as t,ah as s,c as i,U as l,o}from"./chunks/framework.DI3RqUrd.js";const r=[{tags:[{type:"param",string:"{Function} [validate] 校验方法",name:"[validate]",description:"<p>校验方法</p>",types:["Function"],typesDescription:"<code>Function</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{Array | String} [,props] 校验方法",name:"[,props]",description:"<p>校验方法</p>",types:["Array","String"],typesDescription:"<code>Array</code> | <code>String</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Promise<Boolean | String>} 校验结果 或者 错误信息",types:["Promise<Boolean|String>"],typesDescription:"<code>Promise</code><<code>Boolean</code> | <code>String</code>>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>校验结果 或者 错误信息</p>"},{type:"example",string:`
const isValid = await pifyValidate(this.$refs.form.validate)
// => false`,html:`<p>const isValid = await pifyValidate(this.$refs.form.validate)<br />
// =&gt; false</p>`},{type:"example",string:`
const errorMessage = await pifyValidate(this.$refs.form.validateField, props)
// => '不能为空'`,html:`<p>const errorMessage = await pifyValidate(this.$refs.form.validateField, props)<br />
// =&gt; '不能为空'</p>`}],description:{full:"<p>将 element-ui Form组件 的 validate 和 validateField 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式</p>",summary:"<p>将 element-ui Form组件 的 validate 和 validateField 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:1,codeStart:16,code:`const pifyValidate = (validate, ...props) => {
    return new Promise(resolve => {
        validate(...props, resolve);
    });
};`,ctx:{type:"declaration",name:"pifyValidate",value:"(validate, ...props) => {",string:"pifyValidate"}}],m=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"docs/vue.md","filePath":"vitepress-docs/vue.md","lastUpdated":null}'),n={name:"docs/vue.md"},u=Object.assign(n,{setup(p){const e=t(r);return(d,c)=>{const a=s("Dox");return o(),i("div",null,[l(a,{data:e.value},null,8,["data"])])}}});export{m as __pageData,u as default};
