import{aw as a,c as e,o as s,aR as t}from"./chunks/framework.DI3RqUrd.js";const u=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"install.md","filePath":"install.md","lastUpdated":1721624720000}'),i={name:"install.md"},n=t('<h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @nbfe/tools</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { search, getLabelByValue, classNames, copyText } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;@nbfe/tools&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span></code></pre></div><h2 id="调试" tabindex="-1">调试 <a class="header-anchor" href="#调试" aria-label="Permalink to &quot;调试&quot;">​</a></h2><p>本文档为了方便调试, 特地将工具包打包成 umd 模式, 直接注入到了页面中, 挂载到了 windows.tools</p><p>你可以直接打开浏览器控制台, 输入 <code>Object.keys(tools)</code> 即可看到所有的方法</p><p>例如, 输入 <code>tools.classNames(&#39;a&#39;, { b: true, c: 2 &lt; 1 })</code>, 将会得到 <code>&#39;a b&#39;</code></p><h2 id="runkit" tabindex="-1">runkit <a class="header-anchor" href="#runkit" aria-label="Permalink to &quot;runkit&quot;">​</a></h2><p>传送门: <a href="https://runkit.com/" target="_blank" rel="noreferrer">runkit.com</a></p><p>由于 <em>runkit</em> 运行环境是 <em>Nodejs</em>, 因此工具库中的很多 <em>browser</em> 方法调试运行会报错. 此时就推荐在浏览器命令行直接调用当然, 工具库中部分方法可同时运行在 <em>Nodejs</em> 和 <em>browser</em> 环境中</p>',11),l=[n];function o(r,h,p,d,c,k){return s(),e("div",null,l)}const b=a(i,[["render",o]]);export{u as __pageData,b as default};