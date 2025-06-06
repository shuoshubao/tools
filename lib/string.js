import { isNumber, isString } from 'lodash';
import { getCssText } from './dom';
import { formatters } from './formatters';

/**
 * trim 所有空白
 * @param  {String} str 字符串
 * @return {String}     去掉所有空白的字符串
 * @example
 *
 * trimAll(' a b c ');
 * // => 'abc'
 */
export const trimAll = (str = '') => {
    return str.replace(/\s+/g, '');
};

/**
 * 帕斯卡
 * @param  {String} str 字符串
 * @return {String}     帕斯卡形式的字符串
 * @example
 *
 * pascalCase('a b c');
 * // => 'ABC'
 *
 * @example
 *
 * pascalCase('a-b-c');
 * // => 'ABC'
 *
 * @example
 *
 * pascalCase('a_b_c');
 * // => 'ABC'
 *
 * @example
 *
 * pascalCase('a,b,c');
 * // => 'ABC'
 *
 * @example
 *
 * pascalCase('aBc');
 * // => 'ABc'
 */
export const pascalCase = (string = '') => {
    const matchs = string.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
    if (!matchs) {
        return '';
    }
    return matchs
        .map(x => {
            return x.charAt(0).toUpperCase() + x.slice(1).toLowerCase();
        })
        .join('');
};

/**
 * 百分比html
 * 正: 绿; 负: 红
 * @param  {Number} value  值
 * @param  {Object} config { emptyText = '--', // 空文本 reverse = false, // 颜色切换 disabled = false // 不使用颜色 }
 * @return {String}        html 字符串
 * @example
 *
 * getPercentageHtml(0.23)
 * // => '<span style="color: #00b365;">23%</span>'
 *
 * @example
 *
 * getPercentageHtml(-0.23)
 * // => '<span style="color: #f5483b;">-23%</span>'
 *
 * @example
 *
 * getPercentageHtml(0.23, { disabled: true })
 * // => '23%'
 */
export const getPercentageHtml = (value, config = {}) => {
    const {
        emptyText = '--', // 空文本
        reverse = false, // 颜色切换
        disabled = false // 不使用颜色
    } = config;
    const tempValue = formatters.percentage(value);
    const greenColor = '#00b365';
    const redColor = '#f5483b';
    if (value > 0) {
        if (disabled) {
            return tempValue;
        }
        return `<span style="color: ${reverse ? redColor : greenColor};">${tempValue}</span>`;
    }
    if (value < 0) {
        if (disabled) {
            return tempValue;
        }
        return `<span style="color: ${reverse ? greenColor : redColor};">${tempValue}</span>`;
    }
    if (value === 0) {
        return tempValue;
    }
    return String(emptyText);
};

// 自闭合标签
const voidHtmlTags = ['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr'];

const attrKeyAlias = {
    className: 'class'
};

const gernerateElementText = (tagName = '', attrs = {}, text = '') => {
    const attrsText = Object.entries(attrs || {})
        .map(([k, v]) => {
            const key = attrKeyAlias[k] || k;
            if (key === 'style') {
                return [key, `"${getCssText(v)}"`].join('=');
            }
            return [key, `"${v}"`].join('=');
        })
        .join(' ');
    const tagNameStart = [tagName, attrsText].filter(Boolean).join(' ');
    if (voidHtmlTags.includes(tagName)) {
        return `<${tagNameStart} />`;
    }
    return `<${tagNameStart}>${text}</${tagName}>`;
};

/**
 * createElement
 * @param  {String} type  标签名
 * @param  {Object} attrs    属性
 * @param  {Array}  children 子元素
 * @return {String}          html字符串
 * @example
 *
 * createElement('div', { id: 'demo', className: 'demo' }, 'hello') // <div id="demo" className="demo">hello</div>
 */
export const createElement = (type = '', props = {}, children = []) => {
    if (isString(children) || isNumber(children)) {
        return gernerateElementText(type, props, children);
    }
    return gernerateElementText(
        type,
        props,
        children
            .map(v => {
                return createElement(...v);
            })
            .join('')
    );
};

// 解析url: [文案|链接]
const linkReg = /\[(.+?)\|(.+?)\]/g;

/**
 * 字符串转链接
 * @param {...String} args  字符串
 * @return {String[]}    html 字符串
 * @example
 *
 * getTooltipHtml('abc')
 * // => ['abc']
 *
 * @example
 *
 * getTooltipHtml('aa[链接|cc.co]bb')
 * // => ['aa<a heref="cc.co" style="color: #fff; fontWeight: bold; textDecoration: underline">链接</a>bb']
 */
export const getTooltipHtml = (...args) => {
    return []
        .concat(...args)
        .filter(Boolean)
        .map(String)
        .map(v => {
            return v.replace(/\\n/g, '<br>');
        })
        .map(v => {
            return v.replace(linkReg, (...args) => {
                const [, text, href] = args;
                return gernerateElementText(
                    'a',
                    {
                        href,
                        target: '_blank',
                        style: {
                            color: '#fff',
                            fontWeight: 'bold',
                            textDecoration: 'underline'
                        }
                    },
                    text
                );
            });
        });
};
