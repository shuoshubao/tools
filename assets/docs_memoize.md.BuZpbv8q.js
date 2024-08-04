import{e as a,ah as t,c as s,U as o,o as i}from"./chunks/framework.DI3RqUrd.js";const c=[{tags:[{type:"param",string:"{Function} fn     缓存的函数",name:"fn",description:"<p>缓存的函数</p>",types:["Function"],typesDescription:"<code>Function</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{Function}        包装的函数",types:["Function"],typesDescription:"<code>Function</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>包装的函数</p>"},{type:"example",string:`
const add = (a, b) => {
  return a + b;
}

const memoizedAdd = memoize(add);

memoizedAdd(1, 2) // 3
memoizedAdd(1, 2) // 3`,html:`<p>const add = (a, b) =&gt; {<br />
return a + b;<br />
}</p>
<p>const memoizedAdd = memoize(add);</p>
<p>memoizedAdd(1, 2) // 3<br />
memoizedAdd(1, 2) // 3</p>`}],description:{full:"<p>memoize/cache</p>",summary:"<p>memoize/cache</p>",body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:3,codeStart:18,code:`const memoize = fn => {
    const caches = [];
    const memoized = (...args) => {
        const item = caches.find(v => {
            return isEqual(v.args, args);
        });
        if (item) {
            return item.data;
        }
        const data = fn(...args);
        caches.unshift({
            args,
            data
        });
        return data;
    };
    memoized.clear = () => {
        caches.splice(0, Infinity);
    };
    return memoized;
};`,ctx:{type:"declaration",name:"memoize",value:"fn => {",string:"memoize"}}],u=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"docs/memoize.md","filePath":"vitepress-docs/memoize.md","lastUpdated":null}'),d={name:"docs/memoize.md"},f=Object.assign(d,{setup(m){const e=a(c);return(r,l)=>{const n=t("Dox");return i(),s("div",null,[o(n,{data:e.value},null,8,["data"])])}}});export{u as __pageData,f as default};
