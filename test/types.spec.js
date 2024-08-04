import {
    getType,
    isBlob,
    isEmptyArray,
    isEmptyObject,
    isEmptyString,
    isEmptyValue,
    isEveryFalsy,
    isEveryTruthy,
    isPromise,
    isSomeFalsy,
    isSomeTruthy,
    isUniq
} from '@/types';
import { describe, expect, it } from 'vitest';

describe('isUniq', () => {
    it('', () => {
        expect(isUniq()).toBeTruthy();
    });

    it('', () => {
        expect(isUniq([1, '1'])).toBeTruthy();
    });

    it('', () => {
        expect(isUniq([1, 1])).toBeFalsy();
    });
});

describe('getType', () => {
    it('', () => {
        expect(getType([])).toBe('Array');
    });
});

describe('isEmptyString', () => {
    it('', () => {
        expect(isEmptyString('')).toBeTruthy();
    });

    it('', () => {
        expect(isEmptyString(null)).toBeFalsy();
    });

    it('', () => {
        expect(isEmptyString(undefined)).toBeFalsy();
    });

    it('', () => {
        expect(isEmptyString(' ')).toBeFalsy();
    });

    it('', () => {
        expect(isEmptyString('1')).toBeFalsy();
    });
});

describe('isEmptyValue', () => {
    it('', () => {
        expect(isEmptyValue('')).toBeTruthy();
    });

    it('', () => {
        expect(isEmptyValue(null)).toBeTruthy();
    });

    it('', () => {
        expect(isEmptyValue(undefined)).toBeTruthy();
    });

    it('', () => {
        expect(isEmptyValue(' ')).toBeFalsy();
    });

    it('', () => {
        expect(isEmptyValue('1')).toBeFalsy();
    });
});

describe('isEmptyArray', () => {
    it('', () => {
        expect(isEmptyArray([])).toBeTruthy();
    });

    it('', () => {
        expect(isEmptyArray(null)).toBeFalsy();
    });

    it('', () => {
        expect(isEmptyArray('')).toBeFalsy();
    });

    it('', () => {
        expect(isEmptyArray([''])).toBeFalsy();
    });
});

describe('isEmptyObject', () => {
    it('', () => {
        expect(isEmptyObject({})).toBeTruthy();
    });

    it('', () => {
        expect(isEmptyObject([])).toBeFalsy();
    });

    it('', () => {
        expect(isEmptyObject(null)).toBeFalsy();
    });

    it('', () => {
        expect(isEmptyObject('')).toBeFalsy();
    });
});

describe('isPromise', () => {
    it('', () => {
        expect(isPromise('')).toBeFalsy();
    });

    it('', () => {
        expect(isPromise(null)).toBeFalsy();
    });

    it('', () => {
        expect(isPromise(100)).toBeFalsy();
    });

    it('', () => {
        expect(isPromise(Promise.resolve(200))).toBeTruthy();
    });

    it('', () => {
        expect(isPromise(new Promise(() => {}))).toBeTruthy();
    });
});

describe('isBlob', () => {
    it('', () => {
        expect(isBlob(new Blob())).toBeTruthy();
    });

    it('', () => {
        expect(isBlob(123)).toBeFalsy();
    });
});

describe('isEveryTruthy', () => {
    it('', () => {
        expect(isEveryTruthy([])).toBeTruthy();
    });

    it('', () => {
        expect(isEveryTruthy()).toBeTruthy();
    });

    it('', () => {
        expect(isEveryTruthy(true, [], {})).toBeTruthy();
    });

    it('', () => {
        expect(isEveryTruthy([true, [], {}])).toBeTruthy();
    });

    it('', () => {
        expect(isEveryTruthy([true, 22, 33])).toBeTruthy();
    });

    it('', () => {
        expect(isEveryTruthy([1, 2, 3, false])).toBeFalsy();
    });

    it('', () => {
        expect(isEveryTruthy([1, 2, null])).toBeFalsy();
    });

    it('', () => {
        expect(isEveryTruthy([1, ''])).toBeFalsy();
    });
});

describe('isSomeTruthy', () => {
    it('', () => {
        expect(isSomeTruthy(100, 0, false)).toBeTruthy();
    });

    it('', () => {
        expect(isSomeTruthy([100, 0, false])).toBeTruthy();
    });

    it('', () => {
        expect(isSomeTruthy([])).toBeFalsy();
    });
});

describe('isEveryFalsy', () => {
    it('', () => {
        expect(isEveryFalsy([])).toBeTruthy();
    });

    it('', () => {
        expect(isEveryFalsy([false, undefined])).toBeTruthy();
    });

    it('', () => {
        expect(isEveryFalsy([false, undefined, 100])).toBeFalsy();
    });
});

describe('isSomeFalsy', () => {
    it('', () => {
        expect(isSomeFalsy([false, true, 100])).toBeTruthy();
    });

    it('', () => {
        expect(isSomeFalsy([])).toBeFalsy();
    });
});
