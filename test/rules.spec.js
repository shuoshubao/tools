import { rules } from '@/rules';
import Schema from 'async-validator';
import { describe, expect, it } from 'vitest';

const commonSchemaOptions = {
    suppressWarning: true
};

const validateData = (descriptor = {}, data) => {
    const validator = new Schema(descriptor);
    return new Promise(resolve => {
        validator.validate(data, commonSchemaOptions, errors => {
            resolve(!errors);
        });
    });
};

describe('required', () => {
    const descriptor = { fieldName: rules.required('字段名') };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: '' });
        expect(result1).toBeFalsy;
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: 'aaa' });
        expect(result2).toBeTruthy;
    });

    it('', async () => {
        const result3 = await validateData({ fieldName: rules.required() }, { fieldName: 'aaa' });
        expect(result3).toBeTruthy;
    });
});

describe('selectRequired', () => {
    const descriptor = { fieldName: rules.selectRequired('字段名') };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: '' });
        expect(result1).toBeFalsy();
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: 'bbb' });
        expect(result2).toBeTruthy();
    });

    it('', async () => {
        const result3 = await validateData(descriptor, { fieldName: 123 });
        expect(result3).toBeTruthy();
    });

    it('', async () => {
        const result4 = await validateData({ fieldName: rules.selectRequired() }, { fieldName: '' });
        expect(result4).toBeFalsy();
    });
});

describe('multipleRequired', () => {
    const descriptor = { fieldName: rules.multipleRequired('字段名') };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: ['aa', 'bb'] });
        expect(result1).toBeTruthy();
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: undefined });
        expect(result2).toBeFalsy();
    });

    it('', async () => {
        const result3 = await validateData(descriptor, { fieldName: 123 });
        expect(result3).toBeFalsy();
    });

    it('', async () => {
        const result4 = await validateData(descriptor, { fieldName: [] });
        expect(result4).toBeFalsy();
    });

    it('', async () => {
        const result5 = await validateData({ fieldName: rules.multipleRequired() }, { fieldName: [] });
        expect(result5).toBeFalsy();
    });
});

describe('min', () => {
    const descriptor = { fieldName: rules.min('字段名', 5) };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: 'abcde' });
        expect(result1).toBeTruthy();
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: 'abc' });
        expect(result2).toBeFalsy();
    });

    it('', async () => {
        const result3 = await validateData({ fieldName: rules.min() }, { fieldName: 'abc' });
        expect(result3).toBeTruthy();
    });
});

describe('max', () => {
    const descriptor = { fieldName: rules.max('字段名', 5) };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: 'abc' });
        expect(result1).toBeTruthy();
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: 'abcdef' });
        expect(result2).toBeFalsy();
    });

    it('', async () => {
        const result3 = await validateData({ fieldName: rules.max() }, { fieldName: 'abcdef' });
        expect(result3).toBeFalsy();
    });
});

describe('uniq', () => {
    const descriptor = { fieldName: rules.uniq('字段名') };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: [11, 22, 33] });
        expect(result1).toBeTruthy();
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: [11, 22, 11] });
        expect(result2).toBeFalsy();
    });

    it('', async () => {
        const result3 = await validateData({ fieldName: rules.uniq() }, { fieldName: [11, 22, 11] });
        expect(result3).toBeFalsy();
    });
});

// 等于
describe('numberRange: eq', () => {
    const descriptor = { fieldName: rules.numberRange('字段名', { eq: 100 }) };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: 100 });
        expect(result1).toBeTruthy();
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: 99 });
        expect(result2).toBeFalsy();
    });
});

// 不等于
describe('numberRange: ne', () => {
    const descriptor = { fieldName: rules.numberRange('字段名', { ne: 100 }) };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: 100 });
        expect(result1).toBeFalsy();
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: 99 });
        expect(result2).toBeTruthy();
    });
});

// 大于
describe('numberRange: gt', () => {
    const descriptor = { fieldName: rules.numberRange('字段名', { gt: 100 }) };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: 101 });
        expect(result1).toBeTruthy();
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: 99 });
        expect(result2).toBeFalsy();
    });
});

// 小于
describe('numberRange: lt', () => {
    const descriptor = { fieldName: rules.numberRange('字段名', { lt: 100 }) };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: 99 });
        expect(result1).toBeTruthy();
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: 101 });
        expect(result2).toBeFalsy();
    });
});

describe('numberRange: decimalLength', () => {
    const descriptor = { fieldName: rules.numberRange('字段名', { decimalLength: 3 }) };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: 12.345 });
        expect(result1).toBeTruthy();
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: 12 });
        expect(result2).toBeTruthy();
    });

    it('', async () => {
        const result3 = await validateData(descriptor, { fieldName: 12.3456 });
        expect(result3).toBeFalsy();
    });
});

// 大于等于
describe('numberRange: ge', () => {
    const descriptor = { fieldName: rules.numberRange('字段名', { ge: 100 }) };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: 101 });
        expect(result1).toBeTruthy();
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: 100 });
        expect(result2).toBeTruthy();
    });

    it('', async () => {
        const result3 = await validateData(descriptor, { fieldName: 99 });
        expect(result3).toBeFalsy();
    });
});

// 小于等于
describe('numberRange: le', () => {
    const descriptor = { fieldName: rules.numberRange('字段名', { le: 100 }) };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: 99 });
        expect(result1).toBeTruthy();
    });

    it('', async () => {
        const result2 = await validateData(descriptor, { fieldName: 100 });
        expect(result2).toBeTruthy();
    });

    it('', async () => {
        const result3 = await validateData(descriptor, { fieldName: 101 });
        expect(result3).toBeFalsy();
    });
});

// 等于
describe('numberRange', () => {
    const descriptor = { fieldName: rules.numberRange() };

    it('', async () => {
        const result1 = await validateData(descriptor, { fieldName: 100 });
        expect(result1).toBeTruthy();
    });
});
