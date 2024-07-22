import{e as a,ah as n,c as r,U as s,o}from"./chunks/framework.DI3RqUrd.js";const i=[{tags:[{type:"param",string:"{Number|String|Date} date        日期",name:"date",description:"<p>日期</p>",types:["Number","String","Date"],typesDescription:"<code>Number</code> | <code>String</code> | <code>Date</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{String} [format='YYYY-MM-DD']      格式化",name:"[format='YYYY-MM-DD']",description:"<p>格式化</p>",types:["String"],typesDescription:"<code>String</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"param",string:"{String} [invalidText='--'] 解析错误时的返回",name:"[invalidText='--']",description:"<p>解析错误时的返回</p>",types:["String"],typesDescription:"<code>String</code>",optional:!0,nullable:!1,nonNullable:!1,variable:!1},{type:"return",string:"{String}             日期格式文本",types:["String"],typesDescription:"<code>String</code>",optional:!1,nullable:!1,nonNullable:!1,variable:!1,description:"<p>日期格式文本</p>"},{type:"example",string:`
formatTime(1628659676589);
// => '2021-08-11'`,html:`<p>formatTime(1628659676589);<br />
// =&gt; '2021-08-11'</p>`},{type:"example",string:`
formatTime(1628659676589, 'YYYY-MM-DD HH:mm');
// => '2021-08-11 13:27'`,html:`<p>formatTime(1628659676589, 'YYYY-MM-DD HH:mm');<br />
// =&gt; '2021-08-11 13:27'</p>`},{type:"example",string:`
formatTime(1628659676589, 'YYYY-MM-DD HH:mm:ss');
// => '2021-08-11 13:27:56'`,html:`<p>formatTime(1628659676589, 'YYYY-MM-DD HH:mm:ss');<br />
// =&gt; '2021-08-11 13:27:56'</p>`},{type:"example",string:`
formatTime(new Date('2021-08-11 13:27:56'));
// => '2021-08-11'`,html:`<p>formatTime(new Date('2021-08-11 13:27:56'));<br />
// =&gt; '2021-08-11'</p>`},{type:"example",string:`
formatTime('2021-08-11 13:27:56');
// => '2021-08-11'`,html:`<p>formatTime('2021-08-11 13:27:56');<br />
// =&gt; '2021-08-11'</p>`},{type:"example",string:`
formatTime(null);
// => '--'`,html:`<p>formatTime(null);<br />
// =&gt; '--'</p>`}],description:{full:`<p>日期格式化<br />
参考: <a href="https://dayjs.gitee.io/docs/zh-CN/display/format">dayjs.format</a></p>`,summary:`<p>日期格式化<br />
参考: <a href="https://dayjs.gitee.io/docs/zh-CN/display/format">dayjs.format</a></p>`,body:""},isPrivate:!1,isConstructor:!1,isClass:!1,isEvent:!1,ignore:!1,line:1,codeStart:38,code:`const formatTime = (date, format = 'YYYY-MM-DD', invalidText = '--') => {
    const WeekTextMap = ['日', '一', '二', '三', '四', '五', '六'];
    if (+date <= 0) {
        return invalidText;
    }
    const dt = new Date(+date || +new Date(date));
    const year = dt.getFullYear();
    const month = dt.getMonth() + 1;
    const day = dt.getDate();
    const hour = dt.getHours();
    const minute = dt.getMinutes();
    const second = dt.getSeconds();
    const week = \`星期\${WeekTextMap[dt.getDay()]}\`;
    const parse = {
        YYYY: year,
        MM: month,
        DD: day,
        HH: hour,
        mm: minute,
        ss: second,
        w: week
    };

    parse.yyyy = parse.YYYY;
    parse.dd = parse.DD;
    parse.hh = parse.HH;

    // 补零
    Object.entries(parse).forEach(([k, v]) => {
        parse[k] = String(v).padStart(2, 0);
    });

    // 上午|下午
    parse.a = hour / 12 >= 1 ? 'pm' : 'am';
    parse.A = parse.a.toUpperCase();

    return Object.entries(parse).reduce((prev, [k, v]) => {
        return prev.replace(k, v);
    }, format);
};`,ctx:{type:"declaration",name:"formatTime",value:"(date, format = 'YYYY-MM-DD', invalidText = '--') => {",string:"formatTime"}}],f=JSON.parse('{"title":"","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"docs/date.md","filePath":"docs/date.md","lastUpdated":null}'),p={name:"docs/date.md"},g=Object.assign(p,{setup(l){const e=a(i);return(m,d)=>{const t=n("Dox");return o(),r("div",null,[s(t,{data:e.value},null,8,["data"])])}}});export{f as __pageData,g as default};
