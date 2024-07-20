import test from 'ava';
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
} from '../../lib/types';

test('isUniq', async t => {
    const { truthy, falsy } = t;

    truthy(isUniq());
    truthy(isUniq([1, '1']));
    falsy(isUniq([1, 1]));
});

test('getType', async t => {
    const { is } = t;

    is(getType([]), 'Array');
});

test('isEmptyString', async t => {
    const { truthy, falsy } = t;

    truthy(isEmptyString(''));
    falsy(isEmptyString(null));
    falsy(isEmptyString(undefined));
    falsy(isEmptyString(' '));
    falsy(isEmptyString('1'));
});

test('isEmptyValue', async t => {
    const { truthy, falsy } = t;

    truthy(isEmptyValue(''));
    truthy(isEmptyValue(null));
    truthy(isEmptyValue(undefined));
    falsy(isEmptyValue(' '));
    falsy(isEmptyValue('1'));
});

test('isEmptyArray', async t => {
    const { truthy, falsy } = t;

    truthy(isEmptyArray([]));
    falsy(isEmptyArray(null));
    falsy(isEmptyArray(''));
    falsy(isEmptyArray(['']));
});

test('isEmptyObject', async t => {
    const { truthy, falsy } = t;

    truthy(isEmptyObject({}));
    falsy(isEmptyObject([]));
    falsy(isEmptyObject(null));
    falsy(isEmptyObject(''));
});

test('isPromise', async t => {
    const { truthy, falsy } = t;

    falsy(isPromise(''));
    falsy(isPromise(null));
    falsy(isPromise(100));
    truthy(isPromise(Promise.resolve(200)));
    truthy(isPromise(new Promise(() => {})));
});

test('isBlob', async t => {
    const { truthy, falsy } = t;

    truthy(isBlob(new Blob()));
    falsy(isBlob(123));
});

test('isEveryTruthy', async t => {
    const { truthy, falsy } = t;

    truthy(isEveryTruthy([]));
    truthy(isEveryTruthy());
    truthy(isEveryTruthy(true, [], {}));
    truthy(isEveryTruthy([true, [], {}]));
    truthy(isEveryTruthy([true, 22, 33]));
    falsy(isEveryTruthy([1, 2, 3, false]));
    falsy(isEveryTruthy([1, 2, null]));
    falsy(isEveryTruthy([1, '']));
});

test('isSomeTruthy', async t => {
    const { truthy, falsy } = t;

    truthy(isSomeTruthy(100, 0, false));
    truthy(isSomeTruthy([100, 0, false]));
    falsy(isSomeTruthy([]));
});

test('isEveryFalsy', async t => {
    const { truthy, falsy } = t;

    truthy(isEveryFalsy([]));
    truthy(isEveryFalsy([false, undefined]));
    falsy(isEveryFalsy([false, undefined, 100]));
});

test('isSomeFalsy', async t => {
    const { truthy, falsy } = t;

    truthy(isSomeFalsy([false, true, 100]));
    falsy(isSomeFalsy([]));
});
