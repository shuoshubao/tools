<div><div id="rules" class="item-method-name" style="margin-top: -65px; padding-top: 65px;"><div class="item-method-name-area">rules = new ValidatorRules();</div></div><div class="item-method-content"><div>校验规则<br /><br />校验库参考: <a href="https://www.npmjs.com/package/async-validator">async-validator</a></div><h4>Arguments</h4><h4>Returns</h4><h4><span>Example</span><i style="margin-left: 10px; cursor: pointer;" ariaLabel="图标: code" class="anticon anticon-code-sandbox action-showREPL" data-funcname="rules" data-example="120,156,165,148,193,74,3,49,16,134,95,101,236,37,45,44,43,30,188,104,183,71,65,240,164,199,182,135,116,119,168,209,108,218,102,179,162,72,65,208,131,138,181,94,68,172,94,132,130,39,161,130,136,8,197,151,233,182,245,45,76,187,98,43,186,213,101,231,144,132,204,159,204,151,25,38,249,148,244,57,122,166,196,154,207,36,58,105,178,82,145,174,185,170,208,5,78,75,200,73,166,32,66,137,135,28,109,181,254,183,208,245,185,98,85,142,255,144,218,212,179,169,131,242,63,183,50,241,211,107,192,194,68,64,119,127,19,44,126,9,132,239,150,116,40,42,202,248,155,112,31,160,174,181,243,243,208,191,236,4,15,87,195,179,195,224,230,105,208,58,234,159,118,135,143,119,253,102,115,248,214,41,136,124,65,128,182,253,112,26,217,54,238,45,1,193,26,49,38,123,14,122,182,100,85,197,42,66,251,6,15,39,189,215,243,105,255,14,229,204,161,10,151,32,77,13,40,101,192,202,77,95,57,50,137,202,151,2,40,88,150,5,165,229,137,179,30,46,235,70,4,137,192,104,146,222,75,35,25,204,92,76,152,178,138,134,9,218,247,9,72,114,177,56,248,44,142,78,51,1,71,54,94,62,102,20,39,204,71,178,250,228,226,149,135,207,194,25,167,37,25,78,118,38,142,238,53,29,68,183,91,175,219,208,227,251,245,69,112,252,28,65,234,160,205,92,202,215,80,148,213,102,36,180,102,243,49,26,40,79,250,183,7,65,187,165,219,125,172,52,116,71,116,27,33,3,41,154,91,149,209,39,67,50,211,196,241,30,110,87,132,167,32,111,192,39,46,88,64,72,81,143,27,74,50,81,78,211,140,233,85,57,83,105,98,126,11,51,197,248,121,210,228,227,151,70,101,176,32,138,169,226,7,107,140,197,12"><svg viewBox="64 64 896 896" focusable="false" data-icon="code-sandbox" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M709.6 210l.4-.2h.2L512 96 313.9 209.8h-.2l.7.3L151.5 304v416L512 928l360.5-208V304l-162.9-94zM482.7 843.6L339.6 761V621.4L210 547.8V372.9l272.7 157.3v313.4zM238.2 321.5l134.7-77.8 138.9 79.7 139.1-79.9 135.2 78-273.9 158-274-158zM814 548.3l-128.8 73.1v139.1l-143.9 83V530.4L814 373.1v175.2z"></path></svg></i></h4><div style="display: none;">暂无</div><pre><code>rules.required(<span class="hljs-string">&#x27;Form.Item label&#x27;</span>)
rules.<span class="hljs-title function_">selectRequired</span>(<span class="hljs-string">&#x27;Form.Item label&#x27;</span>)
rules.<span class="hljs-title function_">multipleRequired</span>(<span class="hljs-string">&#x27;Form.Item label&#x27;</span>)
rules.<span class="hljs-title function_">cascaderRequired</span>(<span class="hljs-string">&#x27;Form.Item label&#x27;</span>)
rules.<span class="hljs-title function_">min</span>(<span class="hljs-string">&#x27;Form.Item label&#x27;</span>, <span class="hljs-number">1</span>)
rules.<span class="hljs-title function_">max</span>(<span class="hljs-string">&#x27;Form.Item label&#x27;</span>, <span class="hljs-number">5</span>)
rules.<span class="hljs-title function_">numberRange</span>(<span class="hljs-string">&#x27;Form.Item label&#x27;</span>, {  })
<span class="hljs-comment">// 数字范围的抽象描述</span>
[
    {
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;eq&#x27;</span>,
        <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;等于&#x27;</span>,
        <span class="hljs-attr">validate</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> {
            <span class="hljs-keyword">return</span> a === b;
        }
    },
    {
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;ne&#x27;</span>,
        <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;不等于&#x27;</span>,
        <span class="hljs-attr">validate</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> {
            <span class="hljs-keyword">return</span> a !== b;
        }
    },
    {
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;gt&#x27;</span>,
        <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;大于&#x27;</span>,
        <span class="hljs-attr">validate</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> {
            <span class="hljs-keyword">return</span> a &gt; b;
        }
    },
    {
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;lt&#x27;</span>,
        <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;小于&#x27;</span>,
        <span class="hljs-attr">validate</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> {
            <span class="hljs-keyword">return</span> a &lt; b;
        }
    },
    {
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;ge&#x27;</span>,
        <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;大于等于&#x27;</span>,
        <span class="hljs-attr">validate</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> {
            <span class="hljs-keyword">return</span> a &gt;= b;
        }
    },
    {
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;le&#x27;</span>,
        <span class="hljs-attr">description</span>: <span class="hljs-string">&#x27;小于等于&#x27;</span>,
        <span class="hljs-attr">validate</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> {
            <span class="hljs-keyword">return</span> a &lt;= b;
        }
    },
    <span class="hljs-comment">// 小数位数限制</span>
    {
        <span class="hljs-attr">key</span>: <span class="hljs-string">&#x27;decimalLength&#x27;</span>,
        <span class="hljs-attr">description</span>: <span class="hljs-function"><span class="hljs-params">value</span> =&gt;</span> {
            <span class="hljs-keyword">return</span> [<span class="hljs-string">&#x27;最多&#x27;</span>, value, <span class="hljs-string">&#x27;位小数&#x27;</span>].<span class="hljs-title function_">join</span>(<span class="hljs-string">&#x27;&#x27;</span>);
        },
        <span class="hljs-attr">validate</span>: <span class="hljs-function">(<span class="hljs-params">a, b</span>) =&gt;</span> {
            <span class="hljs-keyword">const</span> [, decimal = <span class="hljs-string">&#x27;&#x27;</span>] = <span class="hljs-title class_">String</span>(a).<span class="hljs-title function_">split</span>(<span class="hljs-string">&#x27;.&#x27;</span>);
            <span class="hljs-keyword">return</span> decimal.<span class="hljs-property">length</span> &lt;= b;
        }
    }
]</code></pre></div></div>