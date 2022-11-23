<div><div id="rules" class="item-method-name" style="margin-top: -65px; padding-top: 65px;"><div class="item-method-name-area">rules = new ValidatorRules();</div></div><div class="item-method-content"><div>校验规则<br /><br />校验库参考: <a href="https://www.npmjs.com/package/async-validator">async-validator</a></div><h4>Arguments</h4><h4>Returns</h4><h4><span>Example</span><i style="margin-left: 10px; cursor: pointer;" ariaLabel="图标: code" class="anticon anticon-code action-showREPL" data-funcname="rules" data-example="__@@__rules.required(&#39;Form.Item label&#39;)__@@__rules.selectRequired(&#39;Form.Item label&#39;)__@@__rules.multipleRequired(&#39;Form.Item label&#39;)__@@__rules.cascaderRequired(&#39;Form.Item label&#39;)__@@__rules.min(&#39;Form.Item label&#39;, 1)__@@__rules.max(&#39;Form.Item label&#39;, 5)__@@__rules.numberRange(&#39;Form.Item label&#39;, {  })__@@__// 数字范围的抽象描述__@@__[__@@__    {__@@__        key: &#39;eq&#39;,__@@__        description: &#39;等于&#39;,__@@__        validate: (a, b) =&gt; {__@@__            return a === b;__@@__        }__@@__    },__@@__    {__@@__        key: &#39;ne&#39;,__@@__        description: &#39;不等于&#39;,__@@__        validate: (a, b) =&gt; {__@@__            return a !== b;__@@__        }__@@__    },__@@__    {__@@__        key: &#39;gt&#39;,__@@__        description: &#39;大于&#39;,__@@__        validate: (a, b) =&gt; {__@@__            return a &gt; b;__@@__        }__@@__    },__@@__    {__@@__        key: &#39;lt&#39;,__@@__        description: &#39;小于&#39;,__@@__        validate: (a, b) =&gt; {__@@__            return a &lt; b;__@@__        }__@@__    },__@@__    {__@@__        key: &#39;ge&#39;,__@@__        description: &#39;大于等于&#39;,__@@__        validate: (a, b) =&gt; {__@@__            return a &gt;= b;__@@__        }__@@__    },__@@__    {__@@__        key: &#39;le&#39;,__@@__        description: &#39;小于等于&#39;,__@@__        validate: (a, b) =&gt; {__@@__            return a &lt;= b;__@@__        }__@@__    },__@@__    // 小数位数限制__@@__    {__@@__        key: &#39;decimalLength&#39;,__@@__        description: value =&gt; {__@@__            return [&#39;最多&#39;, value, &#39;位小数&#39;].join(&#39;&#39;);__@@__        },__@@__        validate: (a, b) =&gt; {__@@__            const [, decimal = &#39;&#39;] = String(a).split(&#39;.&#39;);__@@__            return decimal.length &lt;= b;__@@__        }__@@__    }__@@__]"><svg viewBox="64 64 896 896" focusable="false" class="" data-icon="code" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M516 673c0 4.4 3.4 8 7.5 8h185c4.1 0 7.5-3.6 7.5-8v-48c0-4.4-3.4-8-7.5-8h-185c-4.1 0-7.5 3.6-7.5 8v48zm-194.9 6.1l192-161c3.8-3.2 3.8-9.1 0-12.3l-192-160.9A7.95 7.95 0 0 0 308 351v62.7c0 2.4 1 4.6 2.9 6.1L420.7 512l-109.8 92.2a8.1 8.1 0 0 0-2.9 6.1V673c0 6.8 7.9 10.5 13.1 6.1zM880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z"></path></svg></i></h4><div style="display: none;">暂无</div><pre style="">
rules.required(&#39;Form.Item label&#39;)
rules.selectRequired(&#39;Form.Item label&#39;)
rules.multipleRequired(&#39;Form.Item label&#39;)
rules.cascaderRequired(&#39;Form.Item label&#39;)
rules.min(&#39;Form.Item label&#39;, 1)
rules.max(&#39;Form.Item label&#39;, 5)
rules.numberRange(&#39;Form.Item label&#39;, {  })
// 数字范围的抽象描述
[
    {
        key: &#39;eq&#39;,
        description: &#39;等于&#39;,
        validate: (a, b) =&gt; {
            return a === b;
        }
    },
    {
        key: &#39;ne&#39;,
        description: &#39;不等于&#39;,
        validate: (a, b) =&gt; {
            return a !== b;
        }
    },
    {
        key: &#39;gt&#39;,
        description: &#39;大于&#39;,
        validate: (a, b) =&gt; {
            return a &gt; b;
        }
    },
    {
        key: &#39;lt&#39;,
        description: &#39;小于&#39;,
        validate: (a, b) =&gt; {
            return a &lt; b;
        }
    },
    {
        key: &#39;ge&#39;,
        description: &#39;大于等于&#39;,
        validate: (a, b) =&gt; {
            return a &gt;= b;
        }
    },
    {
        key: &#39;le&#39;,
        description: &#39;小于等于&#39;,
        validate: (a, b) =&gt; {
            return a &lt;= b;
        }
    },
    // 小数位数限制
    {
        key: &#39;decimalLength&#39;,
        description: value =&gt; {
            return [&#39;最多&#39;, value, &#39;位小数&#39;].join(&#39;&#39;);
        },
        validate: (a, b) =&gt; {
            const [, decimal = &#39;&#39;] = String(a).split(&#39;.&#39;);
            return decimal.length &lt;= b;
        }
    }
]</pre></div></div>