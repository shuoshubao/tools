import { isNumber } from 'lodash';
import { multiply } from './decimal';
import { thousands } from './numeral';

class Formatters {
    // 不作处理
    text(value) {
        return value;
    }

    // 百分比
    percentage(value) {
        if (isNumber(value)) {
            const temp = Number(multiply(value, 1e2).toFixed(2));
            return `${temp}%`;
        }
        return value;
    }

    // 数字千分位
    number(value) {
        return thousands(value);
    }
}

/**
 * 文本格式化
 * @type {Formatters}
 */
export const formatters = new Formatters();
