import { arrayMove, formatEmptyToDefault, produceEmptyObject, removeEmptyProperties, removeProperties, reserveProperties } from '@/data';
import { describe, expect, it } from 'vitest';

describe('arrayMove', () => {
    it('', () => {
        const arr1 = [11, 22, 33, 44, 55, 66];
        const arr11 = arrayMove(arr1, 0, 1);
        expect(arr1).toEqual([22, 11, 33, 44, 55, 66]);
        expect(arr11).toEqual([22, 11, 33, 44, 55, 66]);
    });

    it('', () => {
        const arr2 = [11, 22, 33, 44, 55, 66];
        arrayMove(arr2, 0, -1);
        expect(arr2).toEqual([66, 22, 33, 44, 55, 11]);
    });
});

describe('reserveProperties', () => {
    it('', () => {
        const data = { a: 1, b: 2, c: 3 };
        reserveProperties(data, ['a']);
        expect(data).toEqual({ a: 1 });
    });

    it('', () => {
        expect(reserveProperties()).toBe(undefined);
    });
});

describe('removeProperties', () => {
    it('', () => {
        const data = { a: 1, b: 2, c: 3 };
        removeProperties(data, ['a']);
        expect(data).toEqual({ b: 2, c: 3 });
    });

    it('', () => {
        expect(removeProperties()).toBe(undefined);
    });
});

describe('removeEmptyProperties', () => {
    it('', () => {
        const data = { a: '', b: 0, c: false, d: null, e: { a: 0 } };
        removeEmptyProperties(data);
        expect(data).toEqual({ b: 0, c: false, e: { a: 0 } });
    });

    it('', () => {
        expect(removeEmptyProperties()).toBe(undefined);
    });
});

describe('produceEmptyObject', () => {
    it('', () => {
        expect(produceEmptyObject(['a', 'b'])).toEqual({ a: '', b: '' });
    });

    it('', () => {
        expect(produceEmptyObject(['a', 'b'], null)).toEqual({ a: null, b: null });
    });

    it('', () => {
        expect(produceEmptyObject()).toEqual({});
    });
});

describe('formatEmptyToDefault', () => {
    it('', () => {
        const data = {
            a: 1,
            b: null,
            c: '',
            d: ' '
        };

        const formater = {
            a: '',
            b: -1,
            c: -1
        };

        formatEmptyToDefault(data, formater);
        expect(data).toEqual({ a: 1, b: -1, c: -1, d: ' ' });
    });

    it('', () => {
        expect(formatEmptyToDefault()).toBe(undefined);
    });
});
