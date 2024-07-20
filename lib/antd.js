/* eslint-disable no-template-curly-in-string */

/**
 * antd 的 中文语言包
 * @see https://ant.design/docs/react/i18n-cn
 * @return {Object} antd 的 中文语言包
 *
 * @example
 *
 * // <ConfigProvider locale={getAntdLocaleZhCN()}>
 */
export const getAntdLocaleZhCN = () => {
    const Pagination = {
        // Options.jsx
        items_per_page: '条/页',
        jump_to: '跳至',
        jump_to_confirm: '确定',
        page: '页',
        // Pagination.jsx
        prev_page: '上一页',
        next_page: '下一页',
        prev_5: '向前 5 页',
        next_5: '向后 5 页',
        prev_3: '向前 3 页',
        next_3: '向后 3 页'
    };

    const CalendarLocale = {
        locale: 'zh_CN',
        today: '今天',
        now: '此刻',
        backToToday: '返回今天',
        ok: '确定',
        timeSelect: '选择时间',
        dateSelect: '选择日期',
        weekSelect: '选择周',
        clear: '清除',
        month: '月',
        year: '年',
        previousMonth: '上个月 (翻页上键)',
        nextMonth: '下个月 (翻页下键)',
        monthSelect: '选择月份',
        yearSelect: '选择年份',
        decadeSelect: '选择年代',
        yearFormat: 'YYYY年',
        dayFormat: 'D日',
        dateFormat: 'YYYY年M月D日',
        dateTimeFormat: 'YYYY年M月D日 HH时mm分ss秒',
        previousYear: '上一年 (Control键加左方向键)',
        nextYear: '下一年 (Control键加右方向键)',
        previousDecade: '上一年代',
        nextDecade: '下一年代',
        previousCentury: '上一世纪',
        nextCentury: '下一世纪'
    };

    const timePickerLocale = {
        placeholder: '请选择时间',
        rangePlaceholder: ['开始时间', '结束时间']
    };

    const DatePicker = {
        lang: {
            placeholder: '请选择日期',
            yearPlaceholder: '请选择年份',
            quarterPlaceholder: '请选择季度',
            monthPlaceholder: '请选择月份',
            weekPlaceholder: '请选择周',
            rangePlaceholder: ['开始日期', '结束日期'],
            rangeYearPlaceholder: ['开始年份', '结束年份'],
            rangeMonthPlaceholder: ['开始月份', '结束月份'],
            rangeWeekPlaceholder: ['开始周', '结束周'],
            ...CalendarLocale
        },
        timePickerLocale: { ...timePickerLocale }
    };

    DatePicker.lang.ok = '确 定';

    const Calendar = {
        lang: {
            placeholder: '请选择日期',
            yearPlaceholder: '请选择年份',
            quarterPlaceholder: '请选择季度',
            monthPlaceholder: '请选择月份',
            weekPlaceholder: '请选择周',
            rangePlaceholder: ['开始日期', '结束日期'],
            rangeYearPlaceholder: ['开始年份', '结束年份'],
            rangeMonthPlaceholder: ['开始月份', '结束月份'],
            rangeWeekPlaceholder: ['开始周', '结束周'],
            ...CalendarLocale
        },
        timePickerLocale: { ...timePickerLocale }
    };

    Calendar.lang.ok = '确 定';

    const typeTemplate = '${label}不是一个有效的${type}';

    return {
        locale: 'zh-cn',
        // locales for all components
        global: {
            placeholder: '请选择'
        },
        Pagination,
        DatePicker,
        TimePicker: { ...timePickerLocale },
        Calendar,
        Table: {
            filterTitle: '筛选',
            filterConfirm: '确定',
            filterReset: '重置',
            filterEmptyText: '无筛选项',
            selectAll: '全选当页',
            selectInvert: '反选当页',
            selectNone: '清空所有',
            selectionAll: '全选所有',
            sortTitle: '排序',
            expand: '展开行',
            collapse: '关闭行',
            triggerDesc: '点击降序',
            triggerAsc: '点击升序',
            cancelSort: '取消排序'
        },
        Modal: {
            okText: '确定',
            cancelText: '取消',
            justOkText: '知道了'
        },
        Popconfirm: {
            cancelText: '取消',
            okText: '确定'
        },
        Transfer: {
            searchPlaceholder: '请输入搜索内容',
            itemUnit: '项',
            itemsUnit: '项',
            remove: '删除',
            selectCurrent: '全选当页',
            removeCurrent: '删除当页',
            selectAll: '全选所有',
            removeAll: '删除全部',
            selectInvert: '反选当页'
        },
        Upload: {
            uploading: '文件上传中',
            removeFile: '删除文件',
            uploadError: '上传错误',
            previewFile: '预览文件',
            downloadFile: '下载文件'
        },
        Empty: {
            description: '暂无数据'
        },
        Icon: {
            icon: '图标'
        },
        Text: {
            edit: '编辑',
            copy: '复制',
            copied: '复制成功',
            expand: '展开'
        },
        PageHeader: {
            back: '返回'
        },
        Form: {
            optional: '（可选）',
            defaultValidateMessages: {
                default: '字段验证错误${label}',
                required: '请输入${label}',
                enum: '${label}必须是其中一个[${enum}]',
                whitespace: '${label}不能为空字符',
                date: {
                    format: '${label}日期格式无效',
                    parse: '${label}不能转换为日期',
                    invalid: '${label}是一个无效日期'
                },
                types: {
                    string: typeTemplate,
                    method: typeTemplate,
                    array: typeTemplate,
                    object: typeTemplate,
                    number: typeTemplate,
                    date: typeTemplate,
                    boolean: typeTemplate,
                    integer: typeTemplate,
                    float: typeTemplate,
                    regexp: typeTemplate,
                    email: typeTemplate,
                    url: typeTemplate,
                    hex: typeTemplate
                },
                string: {
                    len: '${label}须为${len}个字符',
                    min: '${label}最少${min}个字符',
                    max: '${label}最多${max}个字符',
                    range: '${label}须在${min}-${max}字符之间'
                },
                number: {
                    len: '${label}必须等于${len}',
                    min: '${label}最小值为${min}',
                    max: '${label}最大值为${max}',
                    range: '${label}须在${min}-${max}之间'
                },
                array: {
                    len: '须为${len}个${label}',
                    min: '最少${min}个${label}',
                    max: '最多${max}个${label}',
                    range: '${label}数量须在${min}-${max}之间'
                },
                pattern: {
                    mismatch: '${label}与模式不匹配${pattern}'
                }
            }
        },
        Image: {
            preview: '预览'
        }
    };
};

/**
 * moment/locale/zh-cn.js 中文语言包
 * @param  {Moment} moment  moment
 * @return {*}        注册中文语言包
 * @example
 *
 * const moment = require('moment');
 * defineMomentLocaleZhCn(moment);
 */
export const defineMomentLocaleZhCn = moment => {
    moment.defineLocale('zh-cn', {
        months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        monthsShort: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
        weekdays: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        weekdaysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        weekdaysMin: '日_一_二_三_四_五_六'.split('_'),
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'YYYY/MM/DD',
            LL: 'YYYY年M月D日',
            LLL: 'YYYY年M月D日Ah点mm分',
            LLLL: 'YYYY年M月D日ddddAh点mm分',
            l: 'YYYY/M/D',
            ll: 'YYYY年M月D日',
            lll: 'YYYY年M月D日 HH:mm',
            llll: 'YYYY年M月D日dddd HH:mm'
        },
        meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
        meridiemHour(hour, meridiem) {
            if (hour === 12) {
                // eslint-disable-next-line no-param-reassign
                hour = 0;
            }
            if (meridiem === '凌晨' || meridiem === '早上' || meridiem === '上午') {
                return hour;
            }
            if (meridiem === '下午' || meridiem === '晚上') {
                return hour + 12;
            }
            // '中午'
            return hour >= 11 ? hour : hour + 12;
        },
        meridiem(hour, minute) {
            const hm = hour * 100 + minute;
            if (hm < 600) {
                return '凌晨';
            }
            if (hm < 900) {
                return '早上';
            }
            if (hm < 1130) {
                return '上午';
            }
            if (hm < 1230) {
                return '中午';
            }
            if (hm < 1800) {
                return '下午';
            }
            return '晚上';
        },
        calendar: {
            sameDay: '[今天]LT',
            nextDay: '[明天]LT',
            nextWeek(now) {
                if (now.week() !== this.week()) {
                    return '[下]dddLT';
                }
                return '[本]dddLT';
            },
            lastDay: '[昨天]LT',
            lastWeek(now) {
                if (this.week() !== now.week()) {
                    return '[上]dddLT';
                }
                return '[本]dddLT';
            },
            sameElse: 'L'
        },
        dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
        ordinal(number, period) {
            switch (period) {
                case 'd':
                case 'D':
                case 'DDD':
                    return `${number}日`;
                case 'M':
                    return `${number}月`;
                case 'w':
                case 'W':
                    return `${number}周`;
                default:
                    return number;
            }
        },
        relativeTime: {
            future: '%s后',
            past: '%s前',
            s: '几秒',
            ss: '%d 秒',
            m: '1 分钟',
            mm: '%d 分钟',
            h: '1 小时',
            hh: '%d 小时',
            d: '1 天',
            dd: '%d 天',
            w: '1 周',
            ww: '%d 周',
            M: '1 个月',
            MM: '%d 个月',
            y: '1 年',
            yy: '%d 年'
        },
        week: {
            // GB/T 7408-1994《数据元和交换格式·信息交换·日期和时间表示法》与ISO 8601:1988等效
            dow: 1, // Monday is the first day of the week.
            doy: 4 // The week that contains Jan 4th is the first week of the year.
        }
    });
};
