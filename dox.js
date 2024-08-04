export default  [
    {
        "value": "date",
        "label": "日期",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Number|String|Date} date        日期",
                        "name": "date",
                        "description": "<p>日期</p>",
                        "types": [
                            "Number",
                            "String",
                            "Date"
                        ],
                        "typesDescription": "<code>Number</code> | <code>String</code> | <code>Date</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{String} [format='YYYY-MM-DD']      格式化",
                        "name": "[format='YYYY-MM-DD']",
                        "description": "<p>格式化</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{String} [invalidText='--'] 解析错误时的返回",
                        "name": "[invalidText='--']",
                        "description": "<p>解析错误时的返回</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}             日期格式文本",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>日期格式文本</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nformatTime(1628659676589);\n// => '2021-08-11'",
                        "html": "<p>formatTime(1628659676589);<br />\n// =&gt; '2021-08-11'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nformatTime(1628659676589, 'YYYY-MM-DD HH:mm');\n// => '2021-08-11 13:27'",
                        "html": "<p>formatTime(1628659676589, 'YYYY-MM-DD HH:mm');<br />\n// =&gt; '2021-08-11 13:27'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nformatTime(1628659676589, 'YYYY-MM-DD HH:mm:ss');\n// => '2021-08-11 13:27:56'",
                        "html": "<p>formatTime(1628659676589, 'YYYY-MM-DD HH:mm:ss');<br />\n// =&gt; '2021-08-11 13:27:56'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nformatTime(new Date('2021-08-11 13:27:56'));\n// => '2021-08-11'",
                        "html": "<p>formatTime(new Date('2021-08-11 13:27:56'));<br />\n// =&gt; '2021-08-11'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nformatTime('2021-08-11 13:27:56');\n// => '2021-08-11'",
                        "html": "<p>formatTime('2021-08-11 13:27:56');<br />\n// =&gt; '2021-08-11'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nformatTime(null);\n// => '--'",
                        "html": "<p>formatTime(null);<br />\n// =&gt; '--'</p>"
                    }
                ],
                "description": {
                    "full": "<p>日期格式化<br />\n参考: <a href=\"https://dayjs.gitee.io/docs/zh-CN/display/format\">dayjs.format</a></p>",
                    "summary": "<p>日期格式化<br />\n参考: <a href=\"https://dayjs.gitee.io/docs/zh-CN/display/format\">dayjs.format</a></p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 1,
                "codeStart": 38,
                "code": "const formatTime = (date, format = 'YYYY-MM-DD', invalidText = '--') => {\n    const WeekTextMap = ['日', '一', '二', '三', '四', '五', '六'];\n    if (+date <= 0) {\n        return invalidText;\n    }\n    const dt = new Date(+date || +new Date(date));\n    const year = dt.getFullYear();\n    const month = dt.getMonth() + 1;\n    const day = dt.getDate();\n    const hour = dt.getHours();\n    const minute = dt.getMinutes();\n    const second = dt.getSeconds();\n    const week = `星期${WeekTextMap[dt.getDay()]}`;\n    const parse = {\n        YYYY: year,\n        MM: month,\n        DD: day,\n        HH: hour,\n        mm: minute,\n        ss: second,\n        w: week\n    };\n\n    parse.yyyy = parse.YYYY;\n    parse.dd = parse.DD;\n    parse.hh = parse.HH;\n\n    // 补零\n    Object.entries(parse).forEach(([k, v]) => {\n        parse[k] = String(v).padStart(2, 0);\n    });\n\n    // 上午|下午\n    parse.a = hour / 12 >= 1 ? 'pm' : 'am';\n    parse.A = parse.a.toUpperCase();\n\n    return Object.entries(parse).reduce((prev, [k, v]) => {\n        return prev.replace(k, v);\n    }, format);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "formatTime",
                    "value": "(date, format = 'YYYY-MM-DD', invalidText = '--') => {",
                    "string": "formatTime"
                }
            }
        ]
    },
    {
        "value": "enum",
        "label": "枚举",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{*} value     value 值",
                        "name": "value",
                        "description": "<p>value 值</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Array}  [data=[{ value, label }]]      数据源",
                        "name": "[data=[{ value, label }]]",
                        "description": "<p>数据源</p>",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{String} [emptyText='--'] 空值",
                        "name": "[emptyText='--']",
                        "description": "<p>空值</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}           value对应的label",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>value对应的label</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst data = [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]\ngetLabelByValue(5, data)\n// => '优秀'",
                        "html": "<p>const data = [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]<br />\ngetLabelByValue(5, data)<br />\n// =&gt; '优秀'</p>"
                    },
                    {
                        "type": "example",
                        "string": "getLabelByValue('5', data)\n// => '优秀'",
                        "html": "<p>getLabelByValue('5', data)<br />\n// =&gt; '优秀'</p>"
                    },
                    {
                        "type": "example",
                        "string": "getLabelByValue(null, data)\n// => '--'",
                        "html": "<p>getLabelByValue(null, data)<br />\n// =&gt; '--'</p>"
                    },
                    {
                        "type": "example",
                        "string": "getLabelByValue(null, data, '暂无')\n// => '暂无'",
                        "html": "<p>getLabelByValue(null, data, '暂无')<br />\n// =&gt; '暂无'</p>"
                    }
                ],
                "description": {
                    "full": "<p>通过 value 获取 label</p>",
                    "summary": "<p>通过 value 获取 label</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 4,
                "codeStart": 28,
                "code": "const getLabelByValue = (value, data = [], emptyText = '--') => {\n    const item = data.find(v => String(v.value) === String(value));\n    if (item) {\n        return item.label;\n    }\n    return emptyText;\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "getLabelByValue",
                    "value": "(value, data = [], emptyText = '--') => {",
                    "string": "getLabelByValue"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Object} [data={}] json数据",
                        "name": "[data={}]",
                        "description": "<p>json数据</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Array}      标准的枚举数据格式 [{ value, label }]",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>标准的枚举数据格式 [{ value, label }]</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst data = { 优秀: 5, 良好: 4, 及格: 3 }\nconvertJsonToEnum(data)\n// => [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]",
                        "html": "<p>const data = { 优秀: 5, 良好: 4, 及格: 3 }<br />\nconvertJsonToEnum(data)<br />\n// =&gt; [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]</p>"
                    }
                ],
                "description": {
                    "full": "<p>将 json 转换成 [{ value, label }]</p>",
                    "summary": "<p>将 json 转换成 [{ value, label }]</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 36,
                "codeStart": 46,
                "code": "const convertJsonToEnum = (data = {}) => {\n    return Object.entries(data).reduce((prev, [k, v]) => {\n        prev.push({\n            value: k,\n            label: v\n        });\n        return prev;\n    }, []);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "convertJsonToEnum",
                    "value": "(data = {}) => {",
                    "string": "convertJsonToEnum"
                }
            },
            {
                "tags": [
                    {
                        "type": "see",
                        "string": "getLabelByValue",
                        "local": "getLabelByValue",
                        "html": "<p>getLabelByValue</p>"
                    },
                    {
                        "type": "param",
                        "string": "{*} label     label 值",
                        "name": "label",
                        "description": "<p>label 值</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Array}  [data=[{ value, label }]]      数据源",
                        "name": "[data=[{ value, label }]]",
                        "description": "<p>数据源</p>",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{String} [emptyText='--'] 空值",
                        "name": "[emptyText='--']",
                        "description": "<p>空值</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}           value对应的label",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>value对应的label</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst data = [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]\ngetValueByLabel('优秀', data)\n// => 5",
                        "html": "<p>const data = [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]<br />\ngetValueByLabel('优秀', data)<br />\n// =&gt; 5</p>"
                    }
                ],
                "description": {
                    "full": "<p>通过 label 获取 value</p>",
                    "summary": "<p>通过 label 获取 value</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 56,
                "codeStart": 69,
                "code": "const getValueByLabel = (label, data = [], emptyText = '--') => {\n    let tempData = data;\n    if (!Array.isArray(data)) {\n        tempData = convertJsonToEnum(data);\n    }\n    const item = tempData.find(v => String(v.label) === String(label));\n    if (item) {\n        return item.value;\n    }\n    return emptyText;\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "getValueByLabel",
                    "value": "(label, data = [], emptyText = '--') => {",
                    "string": "getValueByLabel"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Object} res     数据源",
                        "name": "res",
                        "description": "<p>数据源</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} [options]={} { path = '', valueKey = 'value', labelKey = 'label', renderLabel = node => node.label }",
                        "name": "[options]={}",
                        "description": "<p>{ path = '', valueKey = 'value', labelKey = 'label', renderLabel = node =&gt; node.label }</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Array}         标准的枚举数据格式 [{ value, label }]",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>标准的枚举数据格式 [{ value, label }]</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst res = { code: 1, data: { list: [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格' }] }, message: 'success' }\nconvertDataToEnum(res, { path: 'data.list', valueKey: 'code', labelKey: 'desc' })\n// => [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]",
                        "html": "<p>const res = { code: 1, data: { list: [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格' }] }, message: 'success' }<br />\nconvertDataToEnum(res, { path: 'data.list', valueKey: 'code', labelKey: 'desc' })<br />\n// =&gt; [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格' }]</p>"
                    }
                ],
                "description": {
                    "full": "<p>将任意数据返回转换成 Enum [{ value, label }]</p>",
                    "summary": "<p>将任意数据返回转换成 Enum [{ value, label }]</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 81,
                "codeStart": 92,
                "code": "const convertDataToEnum = (res, options = {}) => {\n    if (isEmptyValue(res)) {\n        return [];\n    }\n    const {\n        path = '', // list 的路径\n        valueKey = 'value',\n        labelKey = 'label',\n        renderLabel = node => node.label\n    } = options;\n    const list = path ? get(res, path, []) : res;\n    return list.map(v => {\n        // 数组的每一项是基本类型: number | string\n        if (typeof v !== 'object') {\n            return {\n                value: v,\n                label: v\n            };\n        }\n        const value = get(v, valueKey);\n        const label = renderLabel({\n            ...v,\n            value,\n            label: get(v, labelKey)\n        });\n        return {\n            ...v,\n            value,\n            label\n        };\n    });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "convertDataToEnum",
                    "value": "(res, options = {}) => {",
                    "string": "convertDataToEnum"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Object} res    数据源",
                        "name": "res",
                        "description": "<p>数据源</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} [options]={} { path = '', valueKey = 'value', labelKey = 'label', childrenKey = 'children', renderLabel = node => node.label }",
                        "name": "[options]={}",
                        "description": "<p>{ path = '', valueKey = 'value', labelKey = 'label', childrenKey = 'children', renderLabel = node =&gt; node.label }</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Array}         标准的枚举数据格式 [{ value, label }]",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>标准的枚举数据格式 [{ value, label }]</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst res = { code: 1, data: { list: [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格', list: [ { code: 3.5, desc: '一般' }] }] }, message: 'success' }\nconvertDataToCascader(res, { path: 'data.list', valueKey: 'code', labelKey: 'desc', childrenKey: 'list' })\n// => [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格', children: [{ value: 3.5, label: '一般' }] }]",
                        "html": "<p>const res = { code: 1, data: { list: [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格', list: [ { code: 3.5, desc: '一般' }] }] }, message: 'success' }<br />\nconvertDataToCascader(res, { path: 'data.list', valueKey: 'code', labelKey: 'desc', childrenKey: 'list' })<br />\n// =&gt; [{ value: 5, label: '优秀' }, { value: 4, label: '良好' }, { value: 3, label: '及格', children: [{ value: 3.5, label: '一般' }] }]</p>"
                    }
                ],
                "description": {
                    "full": "<p>将任意数据返回转换成 Cascader: [{ value, label, children: [{ value, label }]}]</p>",
                    "summary": "<p>将任意数据返回转换成 Cascader: [{ value, label, children: [{ value, label }]}]</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 125,
                "codeStart": 136,
                "code": "const convertDataToCascader = (res, config) => {\n    const { path = '', valueKey = 'value', labelKey = 'label', childrenKey = 'children', renderLabel = node => node.label } = config;\n    const convertData = data => {\n        return data.reduce((prev, cur) => {\n            const item = {\n                value: cur[valueKey],\n                label: cur[labelKey],\n                children: []\n            };\n            item.label = renderLabel(item);\n            if (cur[childrenKey]) {\n                item.children = convertData(cur[childrenKey]);\n            }\n            prev.push(item);\n            return prev;\n        }, []);\n    };\n    const list = path ? get(res, path, []) : res;\n    return convertData(list);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "convertDataToCascader",
                    "value": "(res, config) => {",
                    "string": "convertDataToCascader"
                }
            },
            {
                "tags": [
                    {
                        "type": "see",
                        "string": "getLabelByValue",
                        "local": "getLabelByValue",
                        "html": "<p>getLabelByValue</p>"
                    },
                    {
                        "type": "param",
                        "string": "{*} value      值",
                        "name": "value",
                        "description": "<p>值</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Array}  data 数据源",
                        "name": "data",
                        "description": "<p>数据源</p>",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} options    { key = '', valueKey = '', emptyText = '--' }",
                        "name": "options",
                        "description": "<p>{ key = '', valueKey = '', emptyText = '--' }</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{*}            值",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>值</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst data = [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格' }];\ngetValueInCollection('优秀', data, { key: 'code', valueKey: 'desc' })\n// => 5",
                        "html": "<p>const data = [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格' }];<br />\ngetValueInCollection('优秀', data, { key: 'code', valueKey: 'desc' })<br />\n// =&gt; 5</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst data = [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格' }];\ngetValueInCollection(5, data, { valueKey: 'desc', key: 'code' })\n// => '优秀'",
                        "html": "<p>const data = [{ code: 5, desc: '优秀' }, { code: 4, desc: '良好' }, { code: 3, desc: '及格' }];<br />\ngetValueInCollection(5, data, { valueKey: 'desc', key: 'code' })<br />\n// =&gt; '优秀'</p>"
                    }
                ],
                "description": {
                    "full": "<p>从集合中取值<br />\n比 getLabelByValue 更宽松, 容错, 默认值</p>",
                    "summary": "<p>从集合中取值<br />\n比 getLabelByValue 更宽松, 容错, 默认值</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 157,
                "codeStart": 177,
                "code": "const getValueInCollection = (value, data = [], options = {}) => {\n    const { key = '', valueKey = '', emptyText = '--' } = options;\n    const item = data.find(v => {\n        return String(value) === String(v[key]);\n    });\n    if (item) {\n        return item[valueKey];\n    }\n    return emptyText;\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "getValueInCollection",
                    "value": "(value, data = [], options = {}) => {",
                    "string": "getValueInCollection"
                }
            }
        ]
    },
    {
        "value": "route",
        "label": "路由",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} [queryString] query字符串",
                        "name": "[queryString]",
                        "description": "<p>query字符串</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Object}             query对象",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>query对象</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nqueryParse()\n// => {}",
                        "html": "<p>queryParse()<br />\n// =&gt; {}</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nqueryParse('')\n// => {}",
                        "html": "<p>queryParse('')<br />\n// =&gt; {}</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nqueryParse('?')\n// => {}",
                        "html": "<p>queryParse('?')<br />\n// =&gt; {}</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nqueryParse('?a')\n// => { a: null }",
                        "html": "<p>queryParse('?a')<br />\n// =&gt; { a: null }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nqueryParse('?a=1')\n// => { a: '1' }",
                        "html": "<p>queryParse('?a=1')<br />\n// =&gt; { a: '1' }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nqueryParse('a=1')\n// => { a: '1' }",
                        "html": "<p>queryParse('a=1')<br />\n// =&gt; { a: '1' }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nqueryParse('a=true')\n// => { a: 'true' }",
                        "html": "<p>queryParse('a=true')<br />\n// =&gt; { a: 'true' }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nqueryParse('a=1&b')\n// => { a: '1', b: null }",
                        "html": "<p>queryParse('a=1&amp;b')<br />\n// =&gt; { a: '1', b: null }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nqueryParse('a=1&b=2')\n// => { a: '1', b: '2' }",
                        "html": "<p>queryParse('a=1&amp;b=2')<br />\n// =&gt; { a: '1', b: '2' }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nqueryParse('a=1&b&c')\n// => { a: '1', b: null, c: null }",
                        "html": "<p>queryParse('a=1&amp;b&amp;c')<br />\n// =&gt; { a: '1', b: null, c: null }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nqueryParse('a=1&b=2&c&d=2&d=3')\n// => { a: '1', b: '2', c: null, d: ['2', '3'] }",
                        "html": "<p>queryParse('a=1&amp;b=2&amp;c&amp;d=2&amp;d=3')<br />\n// =&gt; { a: '1', b: '2', c: null, d: ['2', '3'] }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nqueryParse('a=1&b=2&c&d=2&d=3&d')\n// => { a: '1', b: '2', c: null, d: ['2', '3', null] }",
                        "html": "<p>queryParse('a=1&amp;b=2&amp;c&amp;d=2&amp;d=3&amp;d')<br />\n// =&gt; { a: '1', b: '2', c: null, d: ['2', '3', null] }</p>"
                    }
                ],
                "description": {
                    "full": "<p>将query字符串变成对象</p>",
                    "summary": "<p>将query字符串变成对象</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 4,
                "codeStart": 68,
                "code": "const queryParse = (queryString = '') => {\n    let query;\n    if (queryString.startsWith('?')) {\n        query = queryString.substring(1);\n    } else {\n        query = queryString;\n    }\n    if (isEmptyString(query)) {\n        return {};\n    }\n    return query.split('&').reduce((prev, cur) => {\n        const [k, v = null] = cur.split('=');\n        const val = isNull(v) ? v : decodeURIComponent(v);\n        if (isUndefined(prev[k])) {\n            prev[k] = val;\n        } else {\n            prev[k] = [].concat(prev[k], val);\n        }\n        return prev;\n    }, {});\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "queryParse",
                    "value": "(queryString = '') => {",
                    "string": "queryParse"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Object} [params] query对象",
                        "name": "[params]",
                        "description": "<p>query对象</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}        query字符串",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>query字符串</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify()\n// => ''",
                        "html": "<p>queryStringify()<br />\n// =&gt; ''</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify(null)\n// => ''",
                        "html": "<p>queryStringify(null)<br />\n// =&gt; ''</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify({})\n// => ''",
                        "html": "<p>queryStringify({})<br />\n// =&gt; ''</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify({ a: 1 })\n// => 'a=1'",
                        "html": "<p>queryStringify({ a: 1 })<br />\n// =&gt; 'a=1'</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify({ a: '1' })\n// => 'a=1'",
                        "html": "<p>queryStringify({ a: '1' })<br />\n// =&gt; 'a=1'</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify({ a: 1, b: 2 })\n// => 'a=1&b=2'",
                        "html": "<p>queryStringify({ a: 1, b: 2 })<br />\n// =&gt; 'a=1&amp;b=2'</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify({ a: 1, b: null })\n// => 'a=1&b'",
                        "html": "<p>queryStringify({ a: 1, b: null })<br />\n// =&gt; 'a=1&amp;b'</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify({ a: 1, b: null, c: null })\n// => 'a=1&b&c'",
                        "html": "<p>queryStringify({ a: 1, b: null, c: null })<br />\n// =&gt; 'a=1&amp;b&amp;c'</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify({ a: 1, b: undefined, c: null })\n// => 'a=1&c'",
                        "html": "<p>queryStringify({ a: 1, b: undefined, c: null })<br />\n// =&gt; 'a=1&amp;c'</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify({ a: true })\n// => 'a=true'",
                        "html": "<p>queryStringify({ a: true })<br />\n// =&gt; 'a=true'</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify({ a: true, b: false })\n// => 'a=true&b=false'",
                        "html": "<p>queryStringify({ a: true, b: false })<br />\n// =&gt; 'a=true&amp;b=false'</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify({ a: 1, b: 2, c: null, d: [2, 3] })\n// => 'a=1&b=2&c&d=2&d=3'",
                        "html": "<p>queryStringify({ a: 1, b: 2, c: null, d: [2, 3] })<br />\n// =&gt; 'a=1&amp;b=2&amp;c&amp;d=2&amp;d=3'</p>"
                    },
                    {
                        "type": "example",
                        "string": "queryStringify({ a: 1, b: 2, c: null, d: [2, undefined, 3, null] })\n// => 'a=1&b=2&c&d=2&d=3&d'",
                        "html": "<p>queryStringify({ a: 1, b: 2, c: null, d: [2, undefined, 3, null] })<br />\n// =&gt; 'a=1&amp;b=2&amp;c&amp;d=2&amp;d=3&amp;d'</p>"
                    }
                ],
                "description": {
                    "full": "<p>将对象变成query字符串</p>",
                    "summary": "<p>将对象变成query字符串</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 90,
                "codeStart": 146,
                "code": "const queryStringify = (params = {}) => {\n    return Object.entries(params || {})\n        .reduce((prev, cur) => {\n            const [k, v] = cur;\n            if (isUndefined(v)) {\n                return prev;\n            }\n            if (isNull(v)) {\n                prev.push(k);\n            } else {\n                const list = []\n                    .concat(v)\n                    .filter(v2 => {\n                        return !isUndefined(v2);\n                    })\n                    .map(v2 => {\n                        const val = encodeURIComponent(v2);\n                        return isNull(v2) ? k : [k, val].join('=');\n                    });\n                prev.push(...list);\n            }\n            return prev;\n        }, [])\n        .join('&');\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "queryStringify",
                    "value": "(params = {}) => {",
                    "string": "queryStringify"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} str query字符串",
                        "name": "str",
                        "description": "<p>query字符串</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{String} key query的key",
                        "name": "key",
                        "description": "<p>query的key</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String|Object}     完整的query对象或者单个的query值",
                        "types": [
                            "String",
                            "Object"
                        ],
                        "typesDescription": "<code>String</code> | <code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>完整的query对象或者单个的query值</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetParams('a=1&b=2&c&d=2&d=3')\n// => { a: '1', b: '2', c: null, d: ['2', '3'] }",
                        "html": "<p>getParams('a=1&amp;b=2&amp;c&amp;d=2&amp;d=3')<br />\n// =&gt; { a: '1', b: '2', c: null, d: ['2', '3'] }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetParams('a=1&b=2&c&d=2&d=3', 'a')\n// => '1'",
                        "html": "<p>getParams('a=1&amp;b=2&amp;c&amp;d=2&amp;d=3', 'a')<br />\n// =&gt; '1'</p>"
                    }
                ],
                "description": {
                    "full": "<p>获取参数</p>",
                    "summary": "<p>获取参数</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 172,
                "codeStart": 187,
                "code": "const getParams = (str, key) => {\n    const params = queryParse(str);\n    if (isEmptyValue(key)) {\n        return params;\n    }\n    return params[key];\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "getParams",
                    "value": "(str, key) => {",
                    "string": "getParams"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} key key值",
                        "name": "key",
                        "description": "<p>key值</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String|Object}    传key时返回字符串; 不传key时, 则返回所有query参数的json",
                        "types": [
                            "String",
                            "Object"
                        ],
                        "typesDescription": "<code>String</code> | <code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>传key时返回字符串; 不传key时, 则返回所有query参数的json</p>"
                    },
                    {
                        "type": "example",
                        "string": "\n// 假设当前的url为 http://aa.com/abc/d?a=1&b=2\nsearch()\n// => { a: '1', b: '2' }\n\nsearch('a')\n// => '1'",
                        "html": "<p>// 假设当前的url为 http://aa.com/abc/d?a=1&amp;b=2<br />\nsearch()<br />\n// =&gt; { a: '1', b: '2' }</p>\n<p>search('a')<br />\n// =&gt; '1'</p>"
                    }
                ],
                "description": {
                    "full": "<p>获取 search 参数</p>",
                    "summary": "<p>获取 search 参数</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 195,
                "codeStart": 208,
                "code": "const search = (key = '') => {\n    // 从hash里解析 search 参数 (router 模式)\n    const [, str = ''] = (window.location.search || window.location.hash).split('?');\n    return getParams(str, key);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "search",
                    "value": "(key = '') => {",
                    "string": "search"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} [url='']    基础url",
                        "name": "[url='']",
                        "description": "<p>基础url</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} [params={}] query参数",
                        "name": "[params={}]",
                        "description": "<p>query参数</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}        拼接的完整url",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>拼接的完整url</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nstringifyUrl('', { a: 1 })\n// => '?a=1'",
                        "html": "<p>stringifyUrl('', { a: 1 })<br />\n// =&gt; '?a=1'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nstringifyUrl('abc', { a: 1 })\n// => 'abc?a=1'",
                        "html": "<p>stringifyUrl('abc', { a: 1 })<br />\n// =&gt; 'abc?a=1'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nstringifyUrl('http://aa.com/abc/d', { a: 1 })\n// => 'http://aa.com/abc/d?a=1'",
                        "html": "<p>stringifyUrl('http://aa.com/abc/d', { a: 1 })<br />\n// =&gt; 'http://aa.com/abc/d?a=1'</p>"
                    }
                ],
                "description": {
                    "full": "<p>拼接url</p>",
                    "summary": "<p>拼接url</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 214,
                "codeStart": 234,
                "code": "const stringifyUrl = (url = '', params = {}) => {\n    const args = Object.entries(params).reduce((prev, [k, v]) => {\n        if (!isNil(v) && v !== '') {\n            prev[k] = v;\n        }\n        return prev;\n    }, {});\n    if (isEmptyObject(args)) {\n        return url;\n    }\n    return [url, queryStringify(args)].join('?');\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "stringifyUrl",
                    "value": "(url = '', params = {}) => {",
                    "string": "stringifyUrl"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Object} params 新的query参数",
                        "name": "params",
                        "description": "<p>新的query参数</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{String} url    基础url",
                        "name": "url",
                        "description": "<p>基础url</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}        更新query后的完整url",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>更新query后的完整url</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nupdateUrlQuery({ a: 1 }, '');\n// => '?a=1'",
                        "html": "<p>updateUrlQuery({ a: 1 }, '');<br />\n// =&gt; '?a=1'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nupdateUrlQuery({ a: 2 }, 'http://aa.com/abc/d?a=1')\n// => 'http://aa.com/abc/d?a=2'",
                        "html": "<p>updateUrlQuery({ a: 2 }, 'http://aa.com/abc/d?a=1')<br />\n// =&gt; 'http://aa.com/abc/d?a=2'</p>"
                    }
                ],
                "description": {
                    "full": "<p>更新 url 某个参数</p>",
                    "summary": "<p>更新 url 某个参数</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 247,
                "codeStart": 262,
                "code": "const updateUrlQuery = (params = {}, url = '') => {\n    const baseUrl = url.split('?')[0];\n    const query = getParams(url.split('?')[1] || '');\n    return stringifyUrl(baseUrl, { ...query, ...params });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "updateUrlQuery",
                    "value": "(params = {}, url = '') => {",
                    "string": "updateUrlQuery"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} url     基础url",
                        "name": "url",
                        "description": "<p>基础url</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} [params={}]  query参数",
                        "name": "[params={}]",
                        "description": "<p>query参数</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} [options={}] a链接的属性",
                        "name": "[options={}]",
                        "description": "<p>a链接的属性</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{*}         跳转页面",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>跳转页面</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nlinkTo('http://aa.com/abc/d', { a: 1 })\n// => 打开页面 http://aa.com/abc/d?a=1",
                        "html": "<p>linkTo('http://aa.com/abc/d', { a: 1 })<br />\n// =&gt; 打开页面 http://aa.com/abc/d?a=1</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nlinkTo('http://aa.com/abc/d', { a: 1 }, { target: '_blank' })\n// => 新标签打开页面 http://aa.com/abc/d?a=1",
                        "html": "<p>linkTo('http://aa.com/abc/d', { a: 1 }, { target: '_blank' })<br />\n// =&gt; 新标签打开页面 http://aa.com/abc/d?a=1</p>"
                    }
                ],
                "description": {
                    "full": "<p>跳转页面</p>",
                    "summary": "<p>跳转页面</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 268,
                "codeStart": 284,
                "code": "const linkTo = (url = '', params = {}, options = {}) => {\n    const defaultOptions = {\n        target: '_self', // a 标签属性\n        isNewTab: false, // 是否在新 Tab打开（窗口、tab页）\n        rel: 'noreferrer', // a 标签属性\n        download: '' // a 标签属性\n    };\n    const computedOptions = {\n        ...defaultOptions,\n        ...options\n    };\n    if (computedOptions.isNewTab) {\n        computedOptions.target = '_blank';\n    }\n    const { target, rel, download } = computedOptions;\n    const href = stringifyUrl(url, params);\n    const elmentA = document.createElement('a');\n    elmentA.target = target;\n    elmentA.href = href;\n    if (rel) {\n        elmentA.rel = rel;\n    }\n    if (download) {\n        if (download === true) {\n            elmentA.setAttribute('download', '');\n        } else {\n            elmentA.setAttribute('download', download);\n        }\n    }\n    elmentA.setAttribute('hidden', 'hidden');\n    document.body.appendChild(elmentA);\n    elmentA.click();\n    document.body.removeChild(elmentA);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "linkTo",
                    "value": "(url = '', params = {}, options = {}) => {",
                    "string": "linkTo"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} [url=''] url字符串",
                        "name": "[url='']",
                        "description": "<p>url字符串</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Object}     { 'protocol', 'host', 'pathname', 'port', 'search', 'hash', 'origin', 'hostname' }",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>{ 'protocol', 'host', 'pathname', 'port', 'search', 'hash', 'origin', 'hostname' }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nparseUrl('http://aa.com/abc/d?a=1');\n// => {\"protocol\": \"http:\", \"host\": \"aa.com\", \"pathname\": \"/abc/d\", \"port\": \"\", \"search\": \"?a=1\", \"hash\": \"\", \"origin\": \"http://aa.com\", \"hostname\": \"aa.com\"}",
                        "html": "<p>parseUrl('http://aa.com/abc/d?a=1');<br />\n// =&gt; {&quot;protocol&quot;: &quot;http:&quot;, &quot;host&quot;: &quot;aa.com&quot;, &quot;pathname&quot;: &quot;/abc/d&quot;, &quot;port&quot;: &quot;&quot;, &quot;search&quot;: &quot;?a=1&quot;, &quot;hash&quot;: &quot;&quot;, &quot;origin&quot;: &quot;http://aa.com&quot;, &quot;hostname&quot;: &quot;aa.com&quot;}</p>"
                    }
                ],
                "description": {
                    "full": "<p>解析 url</p>",
                    "summary": "<p>解析 url</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 319,
                "codeStart": 328,
                "code": "const parseUrl = (url = '') => {\n    let elmentA = document.createElement('a');\n    elmentA.href = url;\n    const result = pick(elmentA, ['protocol', 'host', 'pathname', 'port', 'search', 'hash', 'origin', 'hostname']);\n    elmentA = null;\n    return result;\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "parseUrl",
                    "value": "(url = '') => {",
                    "string": "parseUrl"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} url 相对路径",
                        "name": "url",
                        "description": "<p>相对路径</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}     完整的url",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>完整的url</p>"
                    },
                    {
                        "type": "example",
                        "string": "\n// 假设当前的url为 http://aa.com/abc/d?a=1&b=2\ngetFullUrl('/abc')\n// => http://aa.com/abc",
                        "html": "<p>// 假设当前的url为 http://aa.com/abc/d?a=1&amp;b=2<br />\ngetFullUrl('/abc')<br />\n// =&gt; http://aa.com/abc</p>"
                    }
                ],
                "description": {
                    "full": "<p>获取完整 url</p>",
                    "summary": "<p>获取完整 url</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 336,
                "codeStart": 346,
                "code": "const getFullUrl = (url = '') => {\n    if (!url) {\n        return '';\n    }\n    let elmentA = document.createElement('a');\n    elmentA.href = url;\n    const result = elmentA.href;\n    elmentA = null;\n    return result;\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "getFullUrl",
                    "value": "(url = '') => {",
                    "string": "getFullUrl"
                }
            }
        ]
    },
    {
        "value": "decimal",
        "label": "浮点数",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{...Number} [args] 加数",
                        "name": "[args]",
                        "description": "<p>加数</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "...<code>Number</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": true
                    },
                    {
                        "type": "return",
                        "string": "{Number} 运算之和",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>运算之和</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nplus(0.1, 0.2)\n// => 0.3",
                        "html": "<p>plus(0.1, 0.2)<br />\n// =&gt; 0.3</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nplus(0.1, 0.1, 0.1)\n// => 0.3",
                        "html": "<p>plus(0.1, 0.1, 0.1)<br />\n// =&gt; 0.3</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nplus([0.1, 0.1, 0.1])\n// => 0.3",
                        "html": "<p>plus([0.1, 0.1, 0.1])<br />\n// =&gt; 0.3</p>"
                    }
                ],
                "description": {
                    "full": "<p>浮点数计算-加法</p>",
                    "summary": "<p>浮点数计算-加法</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 21,
                "codeStart": 40,
                "code": "const plus = (...args) => {\n    return [].concat(...args).reduce((prev, cur) => {\n        return plusTwo(prev, cur);\n    }, 0);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "plus",
                    "value": "(...args) => {",
                    "string": "plus"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Number} a 减数",
                        "name": "a",
                        "description": "<p>减数</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Number} b 被减数",
                        "name": "b",
                        "description": "<p>被减数</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Number} 运算之差",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>运算之差</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nminus(0.3, 0.1)\n// => 0.2",
                        "html": "<p>minus(0.3, 0.1)<br />\n// =&gt; 0.2</p>"
                    }
                ],
                "description": {
                    "full": "<p>浮点数计算-减法</p>",
                    "summary": "<p>浮点数计算-减法</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 46,
                "codeStart": 56,
                "code": "const minus = (a, b) => {\n    return plus(a, mulTwo(b, -1));\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "minus",
                    "value": "(a, b) => {",
                    "string": "minus"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{...Number} [args] 乘数",
                        "name": "[args]",
                        "description": "<p>乘数</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "...<code>Number</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": true
                    },
                    {
                        "type": "return",
                        "string": "{Number} 运算之积",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>运算之积</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nmultiply(0.1, 0.2)\n// => 0.02",
                        "html": "<p>multiply(0.1, 0.2)<br />\n// =&gt; 0.02</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nmultiply(0.1, 0.1, 0.1)\n// => 0.001",
                        "html": "<p>multiply(0.1, 0.1, 0.1)<br />\n// =&gt; 0.001</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nmultiply([0.1, 0.1, 0.1])\n// => 0.001",
                        "html": "<p>multiply([0.1, 0.1, 0.1])<br />\n// =&gt; 0.001</p>"
                    }
                ],
                "description": {
                    "full": "<p>浮点数计算-乘法</p>",
                    "summary": "<p>浮点数计算-乘法</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 60,
                "codeStart": 79,
                "code": "const multiply = (...args) => {\n    return [].concat(...args).reduce((prev, cur) => {\n        return mulTwo(prev, cur);\n    }, 1);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "multiply",
                    "value": "(...args) => {",
                    "string": "multiply"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Number} a 除数",
                        "name": "a",
                        "description": "<p>除数</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Number} b 被除数",
                        "name": "b",
                        "description": "<p>被除数</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Number} 运算之差",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>运算之差</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ndivide(0.3, 0.1)\n// => 3",
                        "html": "<p>divide(0.3, 0.1)<br />\n// =&gt; 3</p>"
                    }
                ],
                "description": {
                    "full": "<p>浮点数计算-除法</p>",
                    "summary": "<p>浮点数计算-除法</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 85,
                "codeStart": 95,
                "code": "const divide = (a, b) => {\n    const decMax = Math.max(getDecLength(a), getDecLength(b));\n    const temp = 10 ** decMax;\n    return mulTwo(a, temp) / mulTwo(b, temp);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "divide",
                    "value": "(a, b) => {",
                    "string": "divide"
                }
            }
        ]
    },
    {
        "value": "dom",
        "label": "DOM操作",
        "comments": [
            {
                "tags": [],
                "description": {
                    "full": "<p>eslint-disable no-use-before-define</p>",
                    "summary": "<p>eslint-disable no-use-before-define</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 1,
                "codeStart": 3,
                "code": "import { isNumber, kebabCase, last, uniq } from 'lodash';\nimport { isEmptyObject } from './types';",
                "ctx": false
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{HTMLElement} element   dom元素",
                        "name": "element",
                        "description": "<p>dom元素</p>",
                        "types": [
                            "HTMLElement"
                        ],
                        "typesDescription": "<code>HTMLElement</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} [attrs] 属性",
                        "name": "[attrs]",
                        "description": "<p>属性</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{*}       undefined",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>undefined</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nsetAttrs(eDiv, { id: 1, class: 'abc' })\n// => <div id=\"1\" class=\"abc\"></div>",
                        "html": "<p>setAttrs(eDiv, { id: 1, class: 'abc' })<br />\n// =&gt; <div id=\"1\" class=\"abc\"></div></p>"
                    }
                ],
                "description": {
                    "full": "<p>给元素批量设置属性</p>",
                    "summary": "<p>给元素批量设置属性</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 6,
                "codeStart": 16,
                "code": "const setAttrs = (element, attrs = {}) => {\n    Object.entries(attrs).forEach(([k, v]) => {\n        element.setAttribute(k, v);\n    });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "setAttrs",
                    "value": "(element, attrs = {}) => {",
                    "string": "setAttrs"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{*} blob    blob数据",
                        "name": "blob",
                        "description": "<p>blob数据</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} [options] a链接的属性",
                        "name": "[options]",
                        "description": "<p>a链接的属性</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{*}       undefined",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>undefined</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ndownloadBlob(blobData, { download: 'demo.png' })\n// => 浏览器下载文件",
                        "html": "<p>downloadBlob(blobData, { download: 'demo.png' })<br />\n// =&gt; 浏览器下载文件</p>"
                    }
                ],
                "description": {
                    "full": "<p>下载 blob</p>",
                    "summary": "<p>下载 blob</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 22,
                "codeStart": 32,
                "code": "const downloadBlob = (blob, options = {}) => {\n    const fileReader = new FileReader();\n    fileReader.readAsDataURL(blob);\n    fileReader.onload = e => {\n        const elmentA = document.createElement('a');\n        const href = e.target.result;\n        setAttrs(elmentA, { ...options, href });\n        document.body.appendChild(elmentA);\n        elmentA.click();\n        document.body.removeChild(elmentA);\n    };\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "downloadBlob",
                    "value": "(blob, options = {}) => {",
                    "string": "downloadBlob"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} url    文件地址",
                        "name": "url",
                        "description": "<p>文件地址</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} config a 链接的属性",
                        "name": "config",
                        "description": "<p>a 链接的属性</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{*}       undefined",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>undefined</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ndownload('https://github.githubassets.com/favicons/favicon.png', { download: 'favicon.ico' })\n// => 浏览器下载文件",
                        "html": "<p>download('https://github.githubassets.com/favicons/favicon.png', { download: 'favicon.ico' })<br />\n// =&gt; 浏览器下载文件</p>"
                    }
                ],
                "description": {
                    "full": "<p>下载文件</p>",
                    "summary": "<p>下载文件</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 45,
                "codeStart": 55,
                "code": "const download = (url = '', config = {}) => {\n    const elmentA = document.createElement('a');\n    document.body.append(elmentA);\n    const downloadFileName = last(url.split('/'));\n    setAttrs(elmentA, {\n        href: url,\n        download: downloadFileName,\n        target: '_blank',\n        rel: 'noopener noreferrer',\n        ...config\n    });\n    setStyle(elmentA, {\n        display: 'none !important'\n    });\n    elmentA.click();\n    document.body.removeChild(elmentA);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "download",
                    "value": "(url = '', config = {}) => {",
                    "string": "download"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Object} [cssom] css 对象",
                        "name": "[cssom]",
                        "description": "<p>css 对象</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Object}       带有'px'单位的 cssom",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>带有'px'单位的 cssom</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconvertCssom({ width: 100, height: 200 })\n// => { width: '100px', height: '200px' }",
                        "html": "<p>convertCssom({ width: 100, height: 200 })<br />\n// =&gt; { width: '100px', height: '200px' }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconvertCssom({ width: 100, minHeight: 100, marginTop: 10, paddingBottom: 10 })\n// => { width: '100px', 'min-height': '100px', 'margin-top': '10px', 'padding-bottom': '10px' }",
                        "html": "<p>convertCssom({ width: 100, minHeight: 100, marginTop: 10, paddingBottom: 10 })<br />\n// =&gt; { width: '100px', 'min-height': '100px', 'margin-top': '10px', 'padding-bottom': '10px' }</p>"
                    }
                ],
                "description": {
                    "full": "<p>给cssom加上单位px</p>",
                    "summary": "<p>给cssom加上单位px</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 73,
                "codeStart": 87,
                "code": "const convertCssom = (cssom = {}) => {\n    // 当值为数字时, 加上单位 `px` 的css属性\n    const DefaultUnitsPxProperties = ['font-size', 'margin', 'padding', 'border'];\n\n    // margin, padding, border\n    ['top', 'right', 'bottom', 'left'].forEach(v => {\n        DefaultUnitsPxProperties.push(v);\n        DefaultUnitsPxProperties.push(['margin', v].join('-'));\n        DefaultUnitsPxProperties.push(['padding', v].join('-'));\n        DefaultUnitsPxProperties.push(['border', v, 'width'].join('-'));\n    });\n\n    // max min\n    ['width', 'height'].forEach(v => {\n        DefaultUnitsPxProperties.push(v);\n        DefaultUnitsPxProperties.push(['max', v].join('-'), ['min', v].join('-'));\n    });\n\n    return Object.entries(cssom).reduce((prev, [k, v]) => {\n        const key = kebabCase(k);\n        // 对于一些特定属性, 当值为数字时, 加上单位 px\n        if (isNumber(v) && DefaultUnitsPxProperties.includes(key)) {\n            prev[key] = `${v}px`;\n        } else {\n            prev[key] = v;\n        }\n        return prev;\n    }, {});\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "convertCssom",
                    "value": "(cssom = {}) => {",
                    "string": "convertCssom"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{HTMLElement} element   dom元素",
                        "name": "element",
                        "description": "<p>dom元素</p>",
                        "types": [
                            "HTMLElement"
                        ],
                        "typesDescription": "<code>HTMLElement</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{StyleSheet} cssom   cssom",
                        "name": "cssom",
                        "description": "<p>cssom</p>",
                        "types": [
                            "StyleSheet"
                        ],
                        "typesDescription": "<code>StyleSheet</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{*}       undefined",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>undefined</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nsetStyle(eDiv, { width: 100, color: 'red' })\n// => <div style=\"width: 100px; color: red;\"></div>",
                        "html": "<p>setStyle(eDiv, { width: 100, color: 'red' })<br />\n// =&gt; <div style=\"width: 100px; color: red;\"></div></p>"
                    }
                ],
                "description": {
                    "full": "<p>给元素批量设置样式</p>",
                    "summary": "<p>给元素批量设置样式</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 117,
                "codeStart": 127,
                "code": "const setStyle = (element, cssom) => {\n    const computedCssom = convertCssom(cssom);\n    Object.entries(computedCssom).forEach(([k, v]) => {\n        element.style[k] = v;\n    });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "setStyle",
                    "value": "(element, cssom) => {",
                    "string": "setStyle"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{StyleSheet} cssom   cssom",
                        "name": "cssom",
                        "description": "<p>cssom</p>",
                        "types": [
                            "StyleSheet"
                        ],
                        "typesDescription": "<code>StyleSheet</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}       cssText 字符串",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>cssText 字符串</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetCssText({ width: 100, color: 'red' })\n// => 'width: 100px; color: red;'",
                        "html": "<p>getCssText({ width: 100, color: 'red' })<br />\n// =&gt; 'width: 100px; color: red;'</p>"
                    }
                ],
                "description": {
                    "full": "<p>获取 cssText</p>",
                    "summary": "<p>获取 cssText</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 134,
                "codeStart": 143,
                "code": "const getCssText = (cssom = {}) => {\n    if (isEmptyObject(cssom)) {\n        return '';\n    }\n    const computedCssom = convertCssom(cssom);\n    const cssText = Object.entries(computedCssom)\n        .reduce((prev, [k, v]) => {\n            prev.push([k, v].join(': '));\n            return prev;\n        }, [])\n        .join('; ');\n    return [cssText, ';'].join('');\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "getCssText",
                    "value": "(cssom = {}) => {",
                    "string": "getCssText"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} word  字符串",
                        "name": "word",
                        "description": "<p>字符串</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{StyleSheet} cssom   cssom",
                        "name": "cssom",
                        "description": "<p>cssom</p>",
                        "types": [
                            "StyleSheet"
                        ],
                        "typesDescription": "<code>StyleSheet</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Number}       字符串在浏览器中所占的长度",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>字符串在浏览器中所占的长度</p>"
                    },
                    {
                        "type": "example",
                        "string": "getWordWidth('四个汉字')\n// => 56",
                        "html": "<p>getWordWidth('四个汉字')<br />\n// =&gt; 56</p>"
                    },
                    {
                        "type": "example",
                        "string": "getWordWidth('汉字abc123')\n// => 78",
                        "html": "<p>getWordWidth('汉字abc123')<br />\n// =&gt; 78</p>"
                    }
                ],
                "description": {
                    "full": "<p>获取字符串在浏览器中所占的长度</p>",
                    "summary": "<p>获取字符串在浏览器中所占的长度</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 157,
                "codeStart": 171,
                "code": "const getWordWidth = (word = '', cssom = {}) => {\n    const eleSpan = document.createElement('span');\n    const defaultCssom = { visibility: 'hidden', whiteSpace: 'nowrap', fontSize: 14 };\n    eleSpan.style.cssText = getCssText({\n        ...defaultCssom,\n        ...cssom\n    });\n    document.body.appendChild(eleSpan);\n    eleSpan.innerText = word;\n    const width = eleSpan.offsetWidth;\n    document.body.removeChild(eleSpan);\n    return Math.ceil(Number.parseFloat(width));\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "getWordWidth",
                    "value": "(word = '', cssom = {}) => {",
                    "string": "getWordWidth"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{*} text   要复制的文本",
                        "name": "text",
                        "description": "<p>要复制的文本</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{*}       undefined",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>undefined</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ncopyText('abc')\n// => 复制内容到粘贴板",
                        "html": "<p>copyText('abc')<br />\n// =&gt; 复制内容到粘贴板</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ncopyText('abc\\n123')\n// => 复制内容到粘贴板",
                        "html": "<p>copyText('abc\\n123')<br />\n// =&gt; 复制内容到粘贴板</p>"
                    }
                ],
                "description": {
                    "full": "<p>复制文本</p>",
                    "summary": "<p>复制文本</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 185,
                "codeStart": 199,
                "code": "const copyText = (text = '') => {\n    const textarea = document.createElement('textarea');\n    textarea.value = text;\n    document.body.appendChild(textarea);\n    textarea.select();\n    document.execCommand('copy');\n    document.body.removeChild(textarea);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "copyText",
                    "value": "(text = '') => {",
                    "string": "copyText"
                }
            },
            {
                "tags": [
                    {
                        "type": "see",
                        "string": "https://www.npmjs.com/package/classnames",
                        "title": "",
                        "url": "https://www.npmjs.com/package/classnames",
                        "html": "<p>https://www.npmjs.com/package/classnames</p>"
                    },
                    {
                        "type": "param",
                        "string": "{...*} args   每个className的描述",
                        "name": "args",
                        "description": "<p>每个className的描述</p>",
                        "types": "[object Object]",
                        "typesDescription": "...*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": true
                    },
                    {
                        "type": "return",
                        "string": "{String}       className 字符串",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>className 字符串</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nclassNames('foo', 'bar')\n// => 'foo bar'",
                        "html": "<p>classNames('foo', 'bar')<br />\n// =&gt; 'foo bar'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nclassNames('foo', { bar: true })\n// => 'foo bar'",
                        "html": "<p>classNames('foo', { bar: true })<br />\n// =&gt; 'foo bar'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nclassNames({ 'foo-bar': true })\n// => 'foo-bar'",
                        "html": "<p>classNames({ 'foo-bar': true })<br />\n// =&gt; 'foo-bar'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nclassNames({ 'foo-bar': false })\n// => ''",
                        "html": "<p>classNames({ 'foo-bar': false })<br />\n// =&gt; ''</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nclassNames({ foo: true }, { bar: true })\n// => 'foo bar'",
                        "html": "<p>classNames({ foo: true }, { bar: true })<br />\n// =&gt; 'foo bar'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nclassNames({ foo: true, bar: true })\n// => 'foo bar'",
                        "html": "<p>classNames({ foo: true, bar: true })<br />\n// =&gt; 'foo bar'</p>"
                    }
                ],
                "description": {
                    "full": "<p>classNames</p>",
                    "summary": "<p>classNames</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 208,
                "codeStart": 243,
                "code": "const classNames = (...args) => {\n    const classNameList = [];\n    []\n        .concat(...args)\n        .filter(Boolean)\n        .forEach(v => {\n            if (typeof v === 'object') {\n                Object.entries(v).forEach(([k2, v2]) => {\n                    if (v2) {\n                        classNameList.push(k2);\n                    }\n                });\n            } else {\n                classNameList.push(String(v || '').trim());\n            }\n        });\n    return uniq(classNameList.join(' ').split(' ').filter(Boolean)).join(' ');\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "classNames",
                    "value": "(...args) => {",
                    "string": "classNames"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} [baseClassName='']   基准 ClassName",
                        "name": "[baseClassName='']",
                        "description": "<p>基准 ClassName</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} [suffixConfig={}]   classNames 对象",
                        "name": "[suffixConfig={}]",
                        "description": "<p>classNames 对象</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} [config={separator: '-'}]   classNames 对象",
                        "name": "[config={separator: '-'}]",
                        "description": "<p>classNames 对象</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}       className 字符串",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>className 字符串</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nsuffixClassNames('table', { bordered: true, shadow: false })\n// => 'table table-bordered'",
                        "html": "<p>suffixClassNames('table', { bordered: true, shadow: false })<br />\n// =&gt; 'table table-bordered'</p>"
                    }
                ],
                "description": {
                    "full": "<p>给 className 加后缀<br />\n适用于开发组件库时, 给className加作用域</p>",
                    "summary": "<p>给 className 加后缀<br />\n适用于开发组件库时, 给className加作用域</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 262,
                "codeStart": 274,
                "code": "const suffixClassNames = (baseClassName = '', suffixConfig = {}, config = {}) => {\n    const computedConfig = {\n        separator: '-',\n        ...config\n    };\n    const classNameList = [baseClassName];\n    Object.entries(suffixConfig).forEach(([k, v]) => {\n        if (v) {\n            classNameList.push([baseClassName, k].join(computedConfig.separator));\n        }\n    });\n    return classNames(classNameList);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "suffixClassNames",
                    "value": "(baseClassName = '', suffixConfig = {}, config = {}) => {",
                    "string": "suffixClassNames"
                }
            }
        ]
    },
    {
        "value": "rules",
        "label": "表单校验",
        "comments": [
            {
                "tags": [
                    {
                        "type": "type",
                        "string": "{Array.<ValidatorRules>}",
                        "types": [
                            "Array.<ValidatorRules>"
                        ],
                        "typesDescription": "<code>Array</code>.<<code>ValidatorRules</code>>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "html": "<p>{Array.<ValidatorRules>}</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nrules.required('Form.Item label')\nrules.selectRequired('Form.Item label')\nrules.multipleRequired('Form.Item label')\nrules.min('Form.Item label', 1)\nrules.max('Form.Item label', 5)\nrules.numberRange('Form.Item label', {  })\n// 数字范围的抽象描述\n[\n    {\n        key: 'eq',\n        description: '等于',\n        validate: (a, b) => {\n            return a === b;\n        }\n    },\n    {\n        key: 'ne',\n        description: '不等于',\n        validate: (a, b) => {\n            return a !== b;\n        }\n    },\n    {\n        key: 'gt',\n        description: '大于',\n        validate: (a, b) => {\n            return a > b;\n        }\n    },\n    {\n        key: 'lt',\n        description: '小于',\n        validate: (a, b) => {\n            return a < b;\n        }\n    },\n    {\n        key: 'ge',\n        description: '大于等于',\n        validate: (a, b) => {\n            return a >= b;\n        }\n    },\n    {\n        key: 'le',\n        description: '小于等于',\n        validate: (a, b) => {\n            return a <= b;\n        }\n    },\n    // 小数位数限制\n    {\n        key: 'decimalLength',\n        description: value => {\n            return ['最多', value, '位小数'].join('');\n        },\n        validate: (a, b) => {\n            const [, decimal = ''] = String(a).split('.');\n            return decimal.length <= b;\n        }\n    }\n]",
                        "html": "<p>rules.required('Form.Item label')<br />\nrules.selectRequired('Form.Item label')<br />\nrules.multipleRequired('Form.Item label')<br />\nrules.min('Form.Item label', 1)<br />\nrules.max('Form.Item label', 5)<br />\nrules.numberRange('Form.Item label', {  })<br />\n// 数字范围的抽象描述<br />\n[<br />\n{<br />\nkey: 'eq',<br />\ndescription: '等于',<br />\nvalidate: (a, b) =&gt; {<br />\nreturn a === b;<br />\n}<br />\n},<br />\n{<br />\nkey: 'ne',<br />\ndescription: '不等于',<br />\nvalidate: (a, b) =&gt; {<br />\nreturn a !== b;<br />\n}<br />\n},<br />\n{<br />\nkey: 'gt',<br />\ndescription: '大于',<br />\nvalidate: (a, b) =&gt; {<br />\nreturn a &gt; b;<br />\n}<br />\n},<br />\n{<br />\nkey: 'lt',<br />\ndescription: '小于',<br />\nvalidate: (a, b) =&gt; {<br />\nreturn a &lt; b;<br />\n}<br />\n},<br />\n{<br />\nkey: 'ge',<br />\ndescription: '大于等于',<br />\nvalidate: (a, b) =&gt; {<br />\nreturn a &gt;= b;<br />\n}<br />\n},<br />\n{<br />\nkey: 'le',<br />\ndescription: '小于等于',<br />\nvalidate: (a, b) =&gt; {<br />\nreturn a &lt;= b;<br />\n}<br />\n},<br />\n// 小数位数限制<br />\n{<br />\nkey: 'decimalLength',<br />\ndescription: value =&gt; {<br />\nreturn ['最多', value, '位小数'].join('');<br />\n},<br />\nvalidate: (a, b) =&gt; {<br />\nconst [, decimal = ''] = String(a).split('.');<br />\nreturn decimal.length &lt;= b;<br />\n}<br />\n}<br />\n]</p>"
                    }
                ],
                "description": {
                    "full": "<p>校验规则<br />\n校验库参考: <a href=\"https://www.npmjs.com/package/async-validator\">async-validator</a></p>",
                    "summary": "<p>校验规则<br />\n校验库参考: <a href=\"https://www.npmjs.com/package/async-validator\">async-validator</a></p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 179,
                "codeStart": 248,
                "code": "const rules = new ValidatorRules();",
                "ctx": {
                    "type": "declaration",
                    "name": "rules",
                    "value": "new ValidatorRules()",
                    "string": "rules"
                }
            }
        ]
    },
    {
        "value": "types",
        "label": "类型",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{*} value    值",
                        "name": "value",
                        "description": "<p>值</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}     构造函数名",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>构造函数名</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetType()\n// => 'Undefined'",
                        "html": "<p>getType()<br />\n// =&gt; 'Undefined'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetType(null)\n// => 'Null'",
                        "html": "<p>getType(null)<br />\n// =&gt; 'Null'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetType(() => {})\n// => 'Function'",
                        "html": "<p>getType(() =&gt; {})<br />\n// =&gt; 'Function'</p>"
                    }
                ],
                "description": {
                    "full": "<p>获取类型</p>",
                    "summary": "<p>获取类型</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 3,
                "codeStart": 22,
                "code": "const getType = value => {\n    return Object.prototype.toString.call(value).slice(8, -1);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "getType",
                    "value": "value => {",
                    "string": "getType"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Array}  [arr=[]] 数组",
                        "name": "[arr=[]]",
                        "description": "<p>数组</p>",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Boolean}     数组是否存在重复项",
                        "types": [
                            "Boolean"
                        ],
                        "typesDescription": "<code>Boolean</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>数组是否存在重复项</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisUniq();\n// => true",
                        "html": "<p>isUniq();<br />\n// =&gt; true</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisUniq([1, 2, 3]);\n// => true",
                        "html": "<p>isUniq([1, 2, 3]);<br />\n// =&gt; true</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisUniq([1, 2, 3, 2]);\n// => false",
                        "html": "<p>isUniq([1, 2, 3, 2]);<br />\n// =&gt; false</p>"
                    }
                ],
                "description": {
                    "full": "<p>重复数组</p>",
                    "summary": "<p>重复数组</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 26,
                "codeStart": 45,
                "code": "const isUniq = (arr = []) => {\n    return uniq(arr).length === arr.length;\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "isUniq",
                    "value": "(arr = []) => {",
                    "string": "isUniq"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{*} value 值",
                        "name": "value",
                        "description": "<p>值</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Boolean}     是否是空字符串",
                        "types": [
                            "Boolean"
                        ],
                        "typesDescription": "<code>Boolean</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>是否是空字符串</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEmptyString('');\n// => true",
                        "html": "<p>isEmptyString('');<br />\n// =&gt; true</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEmptyString(null);\n// => false",
                        "html": "<p>isEmptyString(null);<br />\n// =&gt; false</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEmptyString([]);\n// => false",
                        "html": "<p>isEmptyString([]);<br />\n// =&gt; false</p>"
                    }
                ],
                "description": {
                    "full": "<p>空字符串</p>",
                    "summary": "<p>空字符串</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 49,
                "codeStart": 68,
                "code": "const isEmptyString = value => {\n    return value === '';\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "isEmptyString",
                    "value": "value => {",
                    "string": "isEmptyString"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{*} value 值",
                        "name": "value",
                        "description": "<p>值</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Boolean}     是否为空值",
                        "types": [
                            "Boolean"
                        ],
                        "typesDescription": "<code>Boolean</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>是否为空值</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEmptyValue(null);\n// => true\nisEmptyValue(undefined);\n// => true\nisEmptyValue('');\n// => true\nisEmptyValue([]);\n// => false\nisEmptyValue(false);\n// => false\nisEmptyValue(123);\n// => false",
                        "html": "<p>isEmptyValue(null);<br />\n// =&gt; true<br />\nisEmptyValue(undefined);<br />\n// =&gt; true<br />\nisEmptyValue('');<br />\n// =&gt; true<br />\nisEmptyValue([]);<br />\n// =&gt; false<br />\nisEmptyValue(false);<br />\n// =&gt; false<br />\nisEmptyValue(123);<br />\n// =&gt; false</p>"
                    }
                ],
                "description": {
                    "full": "<p>空值: null undefined ''</p>",
                    "summary": "<p>空值: null undefined ''</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 72,
                "codeStart": 91,
                "code": "const isEmptyValue = value => {\n    return [isNull, isUndefined, isEmptyString].some(v => v(value));\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "isEmptyValue",
                    "value": "value => {",
                    "string": "isEmptyValue"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{*} value 值",
                        "name": "value",
                        "description": "<p>值</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Boolean}     是否是Promise",
                        "types": [
                            "Boolean"
                        ],
                        "typesDescription": "<code>Boolean</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>是否是Promise</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst p1 = new Promise((resolve, reject) => {\n\n});\nisPromise(p1);\n// => false\n\nisPromise(1);\n// => false",
                        "html": "<p>const p1 = new Promise((resolve, reject) =&gt; {</p>\n<p>});<br />\nisPromise(p1);<br />\n// =&gt; false</p>\n<p>isPromise(1);<br />\n// =&gt; false</p>"
                    }
                ],
                "description": {
                    "full": "<p>Promise</p>",
                    "summary": "<p>Promise</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 95,
                "codeStart": 110,
                "code": "const isPromise = value => {\n    return getType(value) === 'Promise';\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "isPromise",
                    "value": "value => {",
                    "string": "isPromise"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{*} value 值",
                        "name": "value",
                        "description": "<p>值</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Boolean}     是否是Blob类型",
                        "types": [
                            "Boolean"
                        ],
                        "typesDescription": "<code>Boolean</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>是否是Blob类型</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisBlob(new Blob());\n// => true",
                        "html": "<p>isBlob(new Blob());<br />\n// =&gt; true</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisBlob(123);\n// => false",
                        "html": "<p>isBlob(123);<br />\n// =&gt; false</p>"
                    }
                ],
                "description": {
                    "full": "<p>Blob</p>",
                    "summary": "<p>Blob</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 114,
                "codeStart": 128,
                "code": "const isBlob = value => {\n    return getType(value) === 'Blob';\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "isBlob",
                    "value": "value => {",
                    "string": "isBlob"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{*} arr 值",
                        "name": "arr",
                        "description": "<p>值</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Boolean}     是否是空数组",
                        "types": [
                            "Boolean"
                        ],
                        "typesDescription": "<code>Boolean</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>是否是空数组</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEmptyArray([]);\n// => true",
                        "html": "<p>isEmptyArray([]);<br />\n// =&gt; true</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEmptyArray([1, 2]);\n// => false",
                        "html": "<p>isEmptyArray([1, 2]);<br />\n// =&gt; false</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEmptyArray('abc');\n// => false",
                        "html": "<p>isEmptyArray('abc');<br />\n// =&gt; false</p>"
                    }
                ],
                "description": {
                    "full": "<p>空数组</p>",
                    "summary": "<p>空数组</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 132,
                "codeStart": 151,
                "code": "const isEmptyArray = arr => {\n    return Array.isArray(arr) && arr.length === 0;\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "isEmptyArray",
                    "value": "arr => {",
                    "string": "isEmptyArray"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{*} obj 值",
                        "name": "obj",
                        "description": "<p>值</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Boolean}     是否是空对象 {}",
                        "types": [
                            "Boolean"
                        ],
                        "typesDescription": "<code>Boolean</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>是否是空对象 {}</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEmptyObject({});\n// => true",
                        "html": "<p>isEmptyObject({});<br />\n// =&gt; true</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEmptyObject({ a: 1 });\n// => false",
                        "html": "<p>isEmptyObject({ a: 1 });<br />\n// =&gt; false</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEmptyObject(null);\n// => false",
                        "html": "<p>isEmptyObject(null);<br />\n// =&gt; false</p>"
                    }
                ],
                "description": {
                    "full": "<p>空对象</p>",
                    "summary": "<p>空对象</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 155,
                "codeStart": 174,
                "code": "const isEmptyObject = obj => {\n    return obj && getType(obj) === 'Object' && isEmptyArray(Object.keys(obj));\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "isEmptyObject",
                    "value": "obj => {",
                    "string": "isEmptyObject"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{...*} args 值",
                        "name": "args",
                        "description": "<p>值</p>",
                        "types": "[object Object]",
                        "typesDescription": "...*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": true
                    },
                    {
                        "type": "return",
                        "string": "{Boolean}         数组每一项都是truthy",
                        "types": [
                            "Boolean"
                        ],
                        "typesDescription": "<code>Boolean</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>数组每一项都是truthy</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEveryTruthy(1, 2, 3);\n// true",
                        "html": "<p>isEveryTruthy(1, 2, 3);<br />\n// true</p>"
                    },
                    {
                        "type": "example",
                        "string": "isEveryTruthy([1, 2, 3]);\n// true",
                        "html": "<p>isEveryTruthy([1, 2, 3]);<br />\n// true</p>"
                    },
                    {
                        "type": "example",
                        "string": "isEveryTruthy(0, 2, 3);\n// false",
                        "html": "<p>isEveryTruthy(0, 2, 3);<br />\n// false</p>"
                    },
                    {
                        "type": "example",
                        "string": "isEveryTruthy(1 > 0, 2 != 1, 3);\n// true",
                        "html": "<p>isEveryTruthy(1 &gt; 0, 2 != 1, 3);<br />\n// true</p>"
                    }
                ],
                "description": {
                    "full": "<p>全真</p>",
                    "summary": "<p>全真</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 178,
                "codeStart": 199,
                "code": "const isEveryTruthy = (...args) => {\n    return [].concat(...args).every(Boolean);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "isEveryTruthy",
                    "value": "(...args) => {",
                    "string": "isEveryTruthy"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{...*} args 值",
                        "name": "args",
                        "description": "<p>值</p>",
                        "types": "[object Object]",
                        "typesDescription": "...*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": true
                    },
                    {
                        "type": "return",
                        "string": "{Boolean}         数组每一项都是falsy",
                        "types": [
                            "Boolean"
                        ],
                        "typesDescription": "<code>Boolean</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>数组每一项都是falsy</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEveryFalsy(false, '', 0);\n// => true",
                        "html": "<p>isEveryFalsy(false, '', 0);<br />\n// =&gt; true</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEveryFalsy([false, '', 0]);\n// => true",
                        "html": "<p>isEveryFalsy([false, '', 0]);<br />\n// =&gt; true</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisEveryFalsy(false, '', 2 > 1);\n// => false",
                        "html": "<p>isEveryFalsy(false, '', 2 &gt; 1);<br />\n// =&gt; false</p>"
                    }
                ],
                "description": {
                    "full": "<p>全假</p>",
                    "summary": "<p>全假</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 203,
                "codeStart": 222,
                "code": "const isEveryFalsy = (...args) => {\n    return [].concat(...args).every(v => !v);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "isEveryFalsy",
                    "value": "(...args) => {",
                    "string": "isEveryFalsy"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{...*} args 值",
                        "name": "args",
                        "description": "<p>值</p>",
                        "types": "[object Object]",
                        "typesDescription": "...*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": true
                    },
                    {
                        "type": "return",
                        "string": "{Boolean}         部分真",
                        "types": [
                            "Boolean"
                        ],
                        "typesDescription": "<code>Boolean</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>部分真</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisSomeTruthy(1, 2, 3);\n// => true",
                        "html": "<p>isSomeTruthy(1, 2, 3);<br />\n// =&gt; true</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisSomeTruthy([1, 2]);\n// => true",
                        "html": "<p>isSomeTruthy([1, 2]);<br />\n// =&gt; true</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisSomeTruthy(0, null);\n// => false",
                        "html": "<p>isSomeTruthy(0, null);<br />\n// =&gt; false</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisSomeTruthy([]);\n// => false",
                        "html": "<p>isSomeTruthy([]);<br />\n// =&gt; false</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisSomeTruthy([0, false]);\n// => false",
                        "html": "<p>isSomeTruthy([0, false]);<br />\n// =&gt; false</p>"
                    }
                ],
                "description": {
                    "full": "<p>部分真</p>",
                    "summary": "<p>部分真</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 226,
                "codeStart": 255,
                "code": "const isSomeTruthy = (...args) => {\n    return [].concat(...args).some(Boolean);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "isSomeTruthy",
                    "value": "(...args) => {",
                    "string": "isSomeTruthy"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{...*} args 值",
                        "name": "args",
                        "description": "<p>值</p>",
                        "types": "[object Object]",
                        "typesDescription": "...*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": true
                    },
                    {
                        "type": "return",
                        "string": "{Boolean}         部分假",
                        "types": [
                            "Boolean"
                        ],
                        "typesDescription": "<code>Boolean</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>部分假</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisSomeFalsy(0, 1, 2);\n// => true",
                        "html": "<p>isSomeFalsy(0, 1, 2);<br />\n// =&gt; true</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisSomeFalsy([0, null]);\n// => true",
                        "html": "<p>isSomeFalsy([0, null]);<br />\n// =&gt; true</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nisSomeFalsy(1, 2, true, 'false');\n// => false",
                        "html": "<p>isSomeFalsy(1, 2, true, 'false');<br />\n// =&gt; false</p>"
                    }
                ],
                "description": {
                    "full": "<p>部分假</p>",
                    "summary": "<p>部分假</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 259,
                "codeStart": 278,
                "code": "const isSomeFalsy = (...args) => {\n    return [].concat(...args).some(v => !v);\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "isSomeFalsy",
                    "value": "(...args) => {",
                    "string": "isSomeFalsy"
                }
            }
        ]
    },
    {
        "value": "memoize",
        "label": "缓存",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Function} fn     缓存的函数",
                        "name": "fn",
                        "description": "<p>缓存的函数</p>",
                        "types": [
                            "Function"
                        ],
                        "typesDescription": "<code>Function</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Function}        包装的函数",
                        "types": [
                            "Function"
                        ],
                        "typesDescription": "<code>Function</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>包装的函数</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst add = (a, b) => {\n  return a + b;\n}\n\nconst memoizedAdd = memoize(add);\n\nmemoizedAdd(1, 2) // 3\nmemoizedAdd(1, 2) // 3",
                        "html": "<p>const add = (a, b) =&gt; {<br />\nreturn a + b;<br />\n}</p>\n<p>const memoizedAdd = memoize(add);</p>\n<p>memoizedAdd(1, 2) // 3<br />\nmemoizedAdd(1, 2) // 3</p>"
                    }
                ],
                "description": {
                    "full": "<p>memoize/cache</p>",
                    "summary": "<p>memoize/cache</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 3,
                "codeStart": 18,
                "code": "const memoize = fn => {\n    const caches = [];\n    const memoized = (...args) => {\n        const item = caches.find(v => {\n            return isEqual(v.args, args);\n        });\n        if (item) {\n            return item.data;\n        }\n        const data = fn(...args);\n        caches.unshift({\n            args,\n            data\n        });\n        return data;\n    };\n    memoized.clear = () => {\n        caches.splice(0, Infinity);\n    };\n    return memoized;\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "memoize",
                    "value": "fn => {",
                    "string": "memoize"
                }
            }
        ]
    },
    {
        "value": "dev",
        "label": "调试",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Number} [time] 等待时长(秒)",
                        "name": "[time]",
                        "description": "<p>等待时长(秒)</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "example",
                        "string": "\nawait sleep()\nconsole.log('hi')\n// => random(0, 1) 秒后输出: 'hi'",
                        "html": "<p>await sleep()<br />\nconsole.log('hi')<br />\n// =&gt; random(0, 1) 秒后输出: 'hi'</p>"
                    },
                    {
                        "type": "example",
                        "string": "await sleep(3)\nconsole.log('hi')\n// => 3 秒后输出: 'hi'",
                        "html": "<p>await sleep(3)<br />\nconsole.log('hi')<br />\n// =&gt; 3 秒后输出: 'hi'</p>"
                    },
                    {
                        "type": "example",
                        "string": "await sleep(2, 5)\nconsole.log('hi')\n// => random(2, 5) 秒后输出: 'hi'",
                        "html": "<p>await sleep(2, 5)<br />\nconsole.log('hi')<br />\n// =&gt; random(2, 5) 秒后输出: 'hi'</p>"
                    }
                ],
                "description": {
                    "full": "<p>睡眠函数<br />\n可用于模拟接口请求, 或者 setTimeout 的替代形式</p>",
                    "summary": "<p>睡眠函数<br />\n可用于模拟接口请求, 或者 setTimeout 的替代形式</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 3,
                "codeStart": 23,
                "code": "const sleep = (...args) => {\n    let sleepTime;\n    if (args.length === 1) {\n        sleepTime = args[0];\n    } else {\n        sleepTime = random(...args);\n    }\n    sleepTime *= 1000;\n    return new Promise(resolve => {\n        setTimeout(() => {\n            resolve(sleepTime);\n        }, sleepTime);\n    });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "sleep",
                    "value": "(...args) => {",
                    "string": "sleep"
                }
            }
        ]
    },
    {
        "value": "data",
        "label": "数据",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Array}    arr         [数组]",
                        "name": "arr",
                        "description": "<p>[数组]</p>",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Number}   fromIndex   起始位置",
                        "name": "fromIndex",
                        "description": "<p>起始位置</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Number}   toIndex     结束位置",
                        "name": "toIndex",
                        "description": "<p>结束位置</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Array}                源数据被修改",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>源数据被修改</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst arr1 = [11, 22, 33, 44, 55, 66]\narrayMove(arr1, 0, 1)\nconsole.log(arr1)",
                        "html": "<p>const arr1 = [11, 22, 33, 44, 55, 66]<br />\narrayMove(arr1, 0, 1)<br />\nconsole.log(arr1)</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst arr2 = [11, 22, 33, 44, 55, 66]\narrayMove(arr2, 0, -1)\nconsole.log(arr2)",
                        "html": "<p>const arr2 = [11, 22, 33, 44, 55, 66]<br />\narrayMove(arr2, 0, -1)<br />\nconsole.log(arr2)</p>"
                    }
                ],
                "description": {
                    "full": "<p>数组交换位置</p>",
                    "summary": "<p>数组交换位置</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 8,
                "codeStart": 26,
                "code": "const arrayMove = (arr, fromIndex, toIndex) => {\n    const { length } = arr;\n    const start = getPositiveIndex(fromIndex, length);\n    const end = getPositiveIndex(toIndex, length);\n    const ref = [arr[start], arr[end]];\n    arr[start] = ref[1];\n    arr[end] = ref[0];\n    return arr;\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "arrayMove",
                    "value": "(arr, fromIndex, toIndex) => {",
                    "string": "arrayMove"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Object} [data] 数据源",
                        "name": "[data]",
                        "description": "<p>数据源</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Array}  [keys] 需要保留的属性列表",
                        "name": "[keys]",
                        "description": "<p>需要保留的属性列表</p>",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{*}      修改数据源",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>修改数据源</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst data = { a: 1, b: 2, c: 3 }\nreserveProperties(data, ['a'])\nconsole.log(data);\n\n// => { a: 1 };",
                        "html": "<p>const data = { a: 1, b: 2, c: 3 }<br />\nreserveProperties(data, ['a'])<br />\nconsole.log(data);</p>\n<p>// =&gt; { a: 1 };</p>"
                    }
                ],
                "description": {
                    "full": "<p>只保留对象的部分属性(删除之外的属性)</p>",
                    "summary": "<p>只保留对象的部分属性(删除之外的属性)</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 36,
                "codeStart": 50,
                "code": "const reserveProperties = (data = {}, keys = []) => {\n    Object.keys(data)\n        .filter(v => !keys.includes(v))\n        .forEach(v => {\n            delete data[v];\n        });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "reserveProperties",
                    "value": "(data = {}, keys = []) => {",
                    "string": "reserveProperties"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Object} [data] 数据源",
                        "name": "[data]",
                        "description": "<p>数据源</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Array}  [keys] 需要删除的属性列表",
                        "name": "[keys]",
                        "description": "<p>需要删除的属性列表</p>",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{*}      修改数据源",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>修改数据源</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst data = { a: 1, b: 2, c: 3 };\nremoveProperties(data, ['a']);\nconsole.log(data);\n// => { b: 2, c: 3 };",
                        "html": "<p>const data = { a: 1, b: 2, c: 3 };<br />\nremoveProperties(data, ['a']);<br />\nconsole.log(data);<br />\n// =&gt; { b: 2, c: 3 };</p>"
                    }
                ],
                "description": {
                    "full": "<p>批量删除属性</p>",
                    "summary": "<p>批量删除属性</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 58,
                "codeStart": 70,
                "code": "const removeProperties = (data = {}, keys = []) => {\n    keys.forEach(v => {\n        delete data[v];\n    });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "removeProperties",
                    "value": "(data = {}, keys = []) => {",
                    "string": "removeProperties"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Object} [data] 数据源",
                        "name": "[data]",
                        "description": "<p>数据源</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{*}      修改数据源",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>修改数据源</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst data = { a: '', b: 0, c: false, d: null, e: { a: 0 } };\nremoveEmptyProperties(data);\nconsole.log(data);\n// => { b: 0, c: false, e: { a: 0 } };",
                        "html": "<p>const data = { a: '', b: 0, c: false, d: null, e: { a: 0 } };<br />\nremoveEmptyProperties(data);<br />\nconsole.log(data);<br />\n// =&gt; { b: 0, c: false, e: { a: 0 } };</p>"
                    }
                ],
                "description": {
                    "full": "<p>批量删除属性值为空的属性</p>",
                    "summary": "<p>批量删除属性值为空的属性</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 76,
                "codeStart": 87,
                "code": "const removeEmptyProperties = (data = {}) => {\n    Object.entries(data).forEach(([k, v]) => {\n        if (isEmptyValue(v)) {\n            delete data[k];\n        }\n    });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "removeEmptyProperties",
                    "value": "(data = {}) => {",
                    "string": "removeEmptyProperties"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Array}  [keys]      属性列表",
                        "name": "[keys]",
                        "description": "<p>属性列表</p>",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{String} [emptyText] 空值",
                        "name": "[emptyText]",
                        "description": "<p>空值</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Object}           [值全为空的对象]",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>[值全为空的对象]</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nproduceEmptyObject(['a', 'b']);\n// => { a: '', b: '' }",
                        "html": "<p>produceEmptyObject(['a', 'b']);<br />\n// =&gt; { a: '', b: '' }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nproduceEmptyObject(['a', 'b'], null);\n// => { a: null, b: null }",
                        "html": "<p>produceEmptyObject(['a', 'b'], null);<br />\n// =&gt; { a: null, b: null }</p>"
                    }
                ],
                "description": {
                    "full": "<p>产生一个值全为空的对象</p>",
                    "summary": "<p>产生一个值全为空的对象</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 95,
                "codeStart": 110,
                "code": "const produceEmptyObject = (keys = [], emptyText = '') => {\n    return keys.reduce((prev, cur) => {\n        prev[cur] = emptyText;\n        return prev;\n    }, {});\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "produceEmptyObject",
                    "value": "(keys = [], emptyText = '') => {",
                    "string": "produceEmptyObject"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Object} data     数据源",
                        "name": "data",
                        "description": "<p>数据源</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} formater [{ key, value }]",
                        "name": "formater",
                        "description": "<p>[{ key, value }]</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{*}      修改数据源",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>修改数据源</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst data = {\n    a: 1,\n    b: null,\n    c: '',\n    d: ' '\n};\nconst formater = {\n    a: '',\n    b: -1,\n    c: -1\n};\nformatEmptyToDefault(data, formater);\nconsole.log(data);\n// => { a: 1, b: -1, c: -1, d: ' ' }",
                        "html": "<p>const data = {<br />\na: 1,<br />\nb: null,<br />\nc: '',<br />\nd: ' '<br />\n};<br />\nconst formater = {<br />\na: '',<br />\nb: -1,<br />\nc: -1<br />\n};<br />\nformatEmptyToDefault(data, formater);<br />\nconsole.log(data);<br />\n// =&gt; { a: 1, b: -1, c: -1, d: ' ' }</p>"
                    }
                ],
                "description": {
                    "full": "<p>将数据中的空值替换为默认值</p>",
                    "summary": "<p>将数据中的空值替换为默认值</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 117,
                "codeStart": 139,
                "code": "const formatEmptyToDefault = (data = {}, formater = {}) => {\n    Object.entries(data).forEach(([k, v]) => {\n        Object.entries(formater).forEach(([k2, v2]) => {\n            // eslint-disable-next-line sonarjs/no-collapsible-if\n            if (k2 === k) {\n                if (isEmptyValue(v)) {\n                    data[k] = v2;\n                }\n            }\n        });\n    });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "formatEmptyToDefault",
                    "value": "(data = {}, formater = {}) => {",
                    "string": "formatEmptyToDefault"
                }
            }
        ]
    },
    {
        "value": "react",
        "label": "React",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{*} context  this",
                        "name": "context",
                        "description": "<p>this</p>",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} newState 新的状态",
                        "name": "newState",
                        "description": "<p>新的状态</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{*}          无",
                        "types": "[object Object]",
                        "typesDescription": "*",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>无</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nthis.setState({ a: 1 }, () => {\n  console.log('do something here');\n});\n// 等价于\nawait setAsyncState(this, { a: 1 });\nconsole.log('do something here');",
                        "html": "<p>this.setState({ a: 1 }, () =&gt; {<br />\nconsole.log('do something here');<br />\n});<br />\n// 等价于<br />\nawait setAsyncState(this, { a: 1 });<br />\nconsole.log('do something here');</p>"
                    }
                ],
                "description": {
                    "full": "<p>setState =&gt; promise</p>",
                    "summary": "<p>setState =&gt; promise</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 1,
                "codeStart": 15,
                "code": "const setAsyncState = (context, newState) => {\n    return new Promise(resolve => {\n        context.setState(newState, resolve);\n    });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "setAsyncState",
                    "value": "(context, newState) => {",
                    "string": "setAsyncState"
                }
            }
        ]
    },
    {
        "value": "vue",
        "label": "Vue",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Function} [.validate] 校验方法",
                        "name": "[.validate]",
                        "description": "<p>校验方法</p>",
                        "types": [
                            "Function"
                        ],
                        "typesDescription": "<code>Function</code>",
                        "optional": true,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Promise<Boolean>} 校验结果",
                        "types": [
                            "Promise<Boolean>"
                        ],
                        "typesDescription": "<code>Promise</code><<code>Boolean</code>>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>校验结果</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nconst isValid = await pifyValidate(this.$refs.form.validate)\n// => false",
                        "html": "<p>const isValid = await pifyValidate(this.$refs.form.validate)<br />\n// =&gt; false</p>"
                    }
                ],
                "description": {
                    "full": "<p>将 element-ui Form组件 的 validate 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式</p>",
                    "summary": "<p>将 element-ui Form组件 的 validate 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 1,
                "codeStart": 10,
                "code": "const pifyValidate = validateFn => {\n    return new Promise(resolve => {\n        validateFn(valid => {\n            resolve(valid);\n        });\n    });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "pifyValidate",
                    "value": "validateFn => {",
                    "string": "pifyValidate"
                }
            }
        ]
    },
    {
        "value": "formatters",
        "label": "格式化",
        "comments": [
            {
                "tags": [
                    {
                        "type": "type",
                        "string": "{Formatters}",
                        "types": [
                            "Formatters"
                        ],
                        "typesDescription": "<code>Formatters</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "html": "<p>{Formatters}</p>"
                    }
                ],
                "description": {
                    "full": "<p>文本格式化</p>",
                    "summary": "<p>文本格式化</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 26,
                "codeStart": 30,
                "code": "const formatters = new Formatters();",
                "ctx": {
                    "type": "declaration",
                    "name": "formatters",
                    "value": "new Formatters()",
                    "string": "formatters"
                }
            }
        ]
    },
    {
        "value": "numeral",
        "label": "数值",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Number} num 数值",
                        "name": "num",
                        "description": "<p>数值</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}     千分位字符串",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>千分位字符串</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nthousands(123);\n// => '123'",
                        "html": "<p>thousands(123);<br />\n// =&gt; '123'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nthousands(1234);\n// => '1,234'",
                        "html": "<p>thousands(1234);<br />\n// =&gt; '1,234'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\nthousands(1234567);\n// => '1,234,567'",
                        "html": "<p>thousands(1234567);<br />\n// =&gt; '1,234,567'</p>"
                    }
                ],
                "description": {
                    "full": "<p>千分位展示</p>",
                    "summary": "<p>千分位展示</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 1,
                "codeStart": 20,
                "code": "const thousands = num => {\n    const data = +num || 0;\n    if (!data) {\n        return num;\n    }\n    const [int, dec] = String(num).split('.');\n    const formatInt = int.replace(/(?=(?!^)(\\d{3})+$)/g, ',');\n    if (+dec) {\n        return [formatInt, dec].join('.');\n    }\n    return formatInt;\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "thousands",
                    "value": "num => {",
                    "string": "thousands"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Number} value 数值",
                        "name": "value",
                        "description": "<p>数值</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Number} min   最小值",
                        "name": "min",
                        "description": "<p>最小值</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Number} max   最大值",
                        "name": "max",
                        "description": "<p>最大值</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Number}       区间值",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>区间值</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetValueInRange(1, 2, 7);\n// => 2",
                        "html": "<p>getValueInRange(1, 2, 7);<br />\n// =&gt; 2</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetValueInRange(3, 2, 7);\n// => 3",
                        "html": "<p>getValueInRange(3, 2, 7);<br />\n// =&gt; 3</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetValueInRange(12, 2, 7);\n// => 7",
                        "html": "<p>getValueInRange(12, 2, 7);<br />\n// =&gt; 7</p>"
                    }
                ],
                "description": {
                    "full": "<p>取区间值</p>",
                    "summary": "<p>取区间值</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 33,
                "codeStart": 53,
                "code": "const getValueInRange = (value, min, max) => {\n    if (value < min) {\n        return min;\n    }\n    if (value > max) {\n        return max;\n    }\n    return value;\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "getValueInRange",
                    "value": "(value, min, max) => {",
                    "string": "getValueInRange"
                }
            }
        ]
    },
    {
        "value": "string",
        "label": "字符串处理",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} str 字符串",
                        "name": "str",
                        "description": "<p>字符串</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}     去掉所有空白的字符串",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>去掉所有空白的字符串</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ntrimAll(' a b c ');\n// => 'abc'",
                        "html": "<p>trimAll(' a b c ');<br />\n// =&gt; 'abc'</p>"
                    }
                ],
                "description": {
                    "full": "<p>trim 所有空白</p>",
                    "summary": "<p>trim 所有空白</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 5,
                "codeStart": 14,
                "code": "const trimAll = (str = '') => {\n    return str.replace(/\\s+/g, '');\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "trimAll",
                    "value": "(str = '') => {",
                    "string": "trimAll"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} str 字符串",
                        "name": "str",
                        "description": "<p>字符串</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}     帕斯卡形式的字符串",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>帕斯卡形式的字符串</p>"
                    },
                    {
                        "type": "example",
                        "string": "\npascalCase('a b c');\n// => 'ABC'",
                        "html": "<p>pascalCase('a b c');<br />\n// =&gt; 'ABC'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\npascalCase('a-b-c');\n// => 'ABC'",
                        "html": "<p>pascalCase('a-b-c');<br />\n// =&gt; 'ABC'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\npascalCase('a_b_c');\n// => 'ABC'",
                        "html": "<p>pascalCase('a_b_c');<br />\n// =&gt; 'ABC'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\npascalCase('a,b,c');\n// => 'ABC'",
                        "html": "<p>pascalCase('a,b,c');<br />\n// =&gt; 'ABC'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\npascalCase('aBc');\n// => 'ABc'",
                        "html": "<p>pascalCase('aBc');<br />\n// =&gt; 'ABc'</p>"
                    }
                ],
                "description": {
                    "full": "<p>帕斯卡</p>",
                    "summary": "<p>帕斯卡</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 18,
                "codeStart": 47,
                "code": "const pascalCase = (string = '') => {\n    const matchs = string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);\n    if (!matchs) {\n        return '';\n    }\n    return matchs\n        .map(x => {\n            return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();\n        })\n        .join('');\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "pascalCase",
                    "value": "(string = '') => {",
                    "string": "pascalCase"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{Number} value  值",
                        "name": "value",
                        "description": "<p>值</p>",
                        "types": [
                            "Number"
                        ],
                        "typesDescription": "<code>Number</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} config { emptyText = '--', // 空文本 reverse = false, // 颜色切换 disabled = false // 不使用颜色 }",
                        "name": "config",
                        "description": "<p>{ emptyText = '--', // 空文本 reverse = false, // 颜色切换 disabled = false // 不使用颜色 }</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}        html 字符串",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>html 字符串</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetPercentageHtml(0.23)\n// => '<span style=\"color: #00b365;\">23%</span>'",
                        "html": "<p>getPercentageHtml(0.23)<br />\n// =&gt; '<span style=\"color: #00b365;\">23%</span>'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetPercentageHtml(-0.23)\n// => '<span style=\"color: #00b365;\">-23%</span>'",
                        "html": "<p>getPercentageHtml(-0.23)<br />\n// =&gt; '<span style=\"color: #00b365;\">-23%</span>'</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetPercentageHtml(0.23, { disabled: true })\n// => '23%'",
                        "html": "<p>getPercentageHtml(0.23, { disabled: true })<br />\n// =&gt; '23%'</p>"
                    }
                ],
                "description": {
                    "full": "<p>百分比html<br />\n正: 绿; 负: 红</p>",
                    "summary": "<p>百分比html<br />\n正: 绿; 负: 红</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 59,
                "codeStart": 80,
                "code": "const getPercentageHtml = (value, config = {}) => {\n    const {\n        emptyText = '--', // 空文本\n        reverse = false, // 颜色切换\n        disabled = false // 不使用颜色\n    } = config;\n    const tempValue = formatters.percentage(value);\n    const greenColor = '#00b365';\n    const redColor = '#f5483b';\n    if (value > 0) {\n        if (disabled) {\n            return tempValue;\n        }\n        return `<span style=\"color: ${reverse ? redColor : greenColor};\">${tempValue}</span>`;\n    }\n    if (value < 0) {\n        if (disabled) {\n            return tempValue;\n        }\n        return `<span style=\"color: ${reverse ? greenColor : redColor};\">${tempValue}</span>`;\n    }\n    if (value === 0) {\n        return tempValue;\n    }\n    return String(emptyText);\n};\n\n// 自闭合标签\nconst voidHtmlTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];\n\nconst attrKeyAlias = {\n    className: 'class'\n};\n\nconst gernerateElementText = (tagName = '', attrs = {}, text = '') => {\n    const attrsText = Object.entries(attrs || {})\n        .map(([k, v]) => {\n            const key = attrKeyAlias[k] || k;\n            if (key === 'style') {\n                return [key, `\"${getCssText(v)}\"`].join('=');\n            }\n            return [key, `\"${v}\"`].join('=');\n        })\n        .join(' ');\n    const tagNameStart = [tagName, attrsText].filter(Boolean).join(' ');\n    if (voidHtmlTags.includes(tagName)) {\n        return `<${tagNameStart} />`;\n    }\n    return `<${tagNameStart}>${text}</${tagName}>`;\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "getPercentageHtml",
                    "value": "(value, config = {}) => {",
                    "string": "getPercentageHtml"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} type  标签名",
                        "name": "type",
                        "description": "<p>标签名</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} attrs    属性",
                        "name": "attrs",
                        "description": "<p>属性</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Array}  children 子元素",
                        "name": "children",
                        "description": "<p>子元素</p>",
                        "types": [
                            "Array"
                        ],
                        "typesDescription": "<code>Array</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{String}          html字符串",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>html字符串</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ncreateElement('div', { id: 'demo', className: 'demo' }, 'hello') // <div id=\"demo\" className=\"demo\">hello</div>",
                        "html": "<p>createElement('div', { id: 'demo', className: 'demo' }, 'hello') // <div id=\"demo\" className=\"demo\">hello</div></p>"
                    }
                ],
                "description": {
                    "full": "<p>createElement</p>",
                    "summary": "<p>createElement</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 131,
                "codeStart": 141,
                "code": "const createElement = (type = '', props = {}, children = []) => {\n    if (isString(children) || isNumber(children)) {\n        return gernerateElementText(type, props, children);\n    }\n    return gernerateElementText(\n        type,\n        props,\n        children\n            .map(v => {\n                return createElement(...v);\n            })\n            .join('')\n    );\n};\n\n// 解析url: [文案|链接]\nconst linkReg = /\\[(.+?)\\|(.+?)\\]/g;",
                "ctx": {
                    "type": "declaration",
                    "name": "createElement",
                    "value": "(type = '', props = {}, children = []) => {",
                    "string": "createElement"
                }
            },
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{...String} args  字符串",
                        "name": "args",
                        "description": "<p>字符串</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "...<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": true
                    },
                    {
                        "type": "return",
                        "string": "{String[]}    html 字符串",
                        "types": [
                            "Array[String]"
                        ],
                        "typesDescription": "<code>String</code>[]",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>html 字符串</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetTooltipHtml('abc')\n// => ['abc']",
                        "html": "<p>getTooltipHtml('abc')<br />\n// =&gt; ['abc']</p>"
                    },
                    {
                        "type": "example",
                        "string": "\ngetTooltipHtml('aa[链接|cc.co]bb')\n// => ['aa<a heref=\"cc.co\" style=\"color: #fff; fontWeight: bold; textDecoration: underline\">链接</a>bb']",
                        "html": "<p>getTooltipHtml('aa[链接|cc.co]bb')<br />\n// =&gt; ['aa<a heref=\"cc.co\" style=\"color: #fff; fontWeight: bold; textDecoration: underline\">链接</a>bb']</p>"
                    }
                ],
                "description": {
                    "full": "<p>字符串转链接</p>",
                    "summary": "<p>字符串转链接</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 159,
                "codeStart": 173,
                "code": "const getTooltipHtml = (...args) => {\n    return []\n        .concat(...args)\n        .filter(Boolean)\n        .map(String)\n        .map(v => {\n            return v.replace(/\\\\n/g, '<br>');\n        })\n        .map(v => {\n            return v.replace(linkReg, (...args) => {\n                const [, text, href] = args;\n                return gernerateElementText(\n                    'a',\n                    {\n                        href,\n                        target: '_blank',\n                        style: {\n                            color: '#fff',\n                            fontWeight: 'bold',\n                            textDecoration: 'underline'\n                        }\n                    },\n                    text\n                );\n            });\n        });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "getTooltipHtml",
                    "value": "(...args) => {",
                    "string": "getTooltipHtml"
                }
            }
        ]
    },
    {
        "value": "image",
        "label": "图片",
        "comments": [
            {
                "tags": [
                    {
                        "type": "param",
                        "string": "{String} url 图片的url",
                        "name": "url",
                        "description": "<p>图片的url</p>",
                        "types": [
                            "String"
                        ],
                        "typesDescription": "<code>String</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "param",
                        "string": "{Object} attrs 图片的额外属性",
                        "name": "attrs",
                        "description": "<p>图片的额外属性</p>",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false
                    },
                    {
                        "type": "return",
                        "string": "{Object}     图片的尺寸 { width, height }",
                        "types": [
                            "Object"
                        ],
                        "typesDescription": "<code>Object</code>",
                        "optional": false,
                        "nullable": false,
                        "nonNullable": false,
                        "variable": false,
                        "description": "<p>图片的尺寸 { width, height }</p>"
                    },
                    {
                        "type": "example",
                        "string": "\n(async() => {\n  const size = await getImageSize('https://github.githubassets.com/favicons/favicon.png');\n  console.log(size);\n})();\n\n// => { width: 24, height: 24 }",
                        "html": "<p>(async() =&gt; {<br />\nconst size = await getImageSize('https://github.githubassets.com/favicons/favicon.png');<br />\nconsole.log(size);<br />\n})();</p>\n<p>// =&gt; { width: 24, height: 24 }</p>"
                    }
                ],
                "description": {
                    "full": "<p>获取图片的尺寸</p>",
                    "summary": "<p>获取图片的尺寸</p>",
                    "body": ""
                },
                "isPrivate": false,
                "isConstructor": false,
                "isClass": false,
                "isEvent": false,
                "ignore": false,
                "line": 4,
                "codeStart": 18,
                "code": "const getImageSize = (url = '', attrs = {}) => {\n    return new Promise(reslove => {\n        const img = new Image();\n        setAttrs(img, {\n            src: url,\n            ...attrs\n        });\n        img.onload = async () => {\n            reslove(pick(img, ['width', 'height']));\n        };\n        img.onerror = async () => {\n            reslove({ width: 0, height: 0 });\n        };\n    });\n};",
                "ctx": {
                    "type": "declaration",
                    "name": "getImageSize",
                    "value": "(url = '', attrs = {}) => {",
                    "string": "getImageSize"
                }
            }
        ]
    }
]