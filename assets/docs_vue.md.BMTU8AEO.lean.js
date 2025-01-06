import{e as t,ah as i,c as l,U as s,o}from"./chunks/framework.DI3RqUrd.js";const n=[{tags:[{type:"param",string:"{Function} [validate] 校验方法",name:"[validate]",description:"<p>校验方法</p>",types:["Function"],typesDescription:"<code>Function</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Promise<Boolean>} 校验结果",types:["Promise<Boolean>"],typesDescription:"<code>Promise</code><<code>Boolean</code>>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>校验结果</p>"},{type:"example",string:`
const isValid = await pifyValidate(this.$refs.form.validate)
// => false`,html:`<p>const isValid = await pifyValidate(this.$refs.form.validate)<br />
// =&gt; false</p>`}],description:{full:"<p>将 element-ui Form组件 的 validate 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式</p>",summary:"<p>将 element-ui Form组件 的 validate 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:1,codeStart:10,code:`const pifyValidate = validate => {
    return new Promise(resolve => {
        validate(resolve);
    });
};`,ctx:{type:"declaration",name:"pifyValidate",value:"validate => {",string:"pifyValidate"}},{tags:[{type:"param",string:"{Function} [validateField] 校验方法",name:"[validateField]",description:"<p>校验方法</p>",types:["Function"],typesDescription:"<code>Function</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Promise<String>} 校验结果",types:["Promise<String>"],typesDescription:"<code>Promise</code><<code>String</code>>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>校验结果</p>"},{type:"example",string:`
const errorMessage = await pifyValidateField(this.$refs.form.validateField)
// => '不能为空'`,html:`<p>const errorMessage = await pifyValidateField(this.$refs.form.validateField)<br />
// =&gt; '不能为空'</p>`}],description:{full:"<p>将 element-ui Form组件 的 validateField 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式</p>",summary:"<p>将 element-ui Form组件 的 validateField 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:16,codeStart:25,code:`const pifyValidateField = (validateField, props) => {
    return new Promise(resolve => {
        validateField(props, resolve);
    });
};`,ctx:{type:"declaration",name:"pifyValidateField",value:"(validateField, props) => {",string:"pifyValidateField"}}],m=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"docs/vue.md","filePath":"vitepress-docs/vue.md","lastUpdated":null}'),r={name:"docs/vue.md"},u=Object.assign(r,{setup(d){const e=t(n);return(p,c)=>{const a=i("Dox");return o(),l("div",null,[s(a,{data:e.value},null,8,["data"])])}}});export{m as __pageData,u as default};
