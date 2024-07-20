import test from 'ava';
import { inRange, omit as omit2, pick as pick2 } from 'lodash';
import {
    get,
    isBoolean,
    isEqual,
    isFunction,
    isInteger,
    isNil,
    isNull,
    isNumber,
    isString,
    isUndefined,
    kebabCase,
    last,
    omit,
    pick,
    random,
    uniq,
    uniqWith,
    upperFirst
} from '../../lib/lodash';

test('isNumber', async t => {
    const { truthy } = t;

    truthy(isNumber(123));
});

test('isString', async t => {
    const { truthy } = t;

    truthy(isString('a'));
});

test('isBoolean', async t => {
    const { truthy } = t;

    truthy(isBoolean(true));
});

test('isUndefined', async t => {
    const { truthy } = t;

    truthy(isUndefined());
});

test('isFunction', async t => {
    const { truthy } = t;

    truthy(isFunction(() => {}));
});

test('isNull', async t => {
    const { truthy } = t;

    truthy(isNull(null));
});

test('isNil', async t => {
    const { truthy } = t;

    truthy(isNil(null));
    truthy(isNil());
});

test('pick', async t => {
    const { deepEqual } = t;

    const data = { a: 1, b: 2, c: 3, d: 4 };
    const keys = ['a', 'b'];
    deepEqual(pick(data, keys), pick2(data, keys));
});

test('omit', async t => {
    const { deepEqual } = t;

    const data = { a: 1, b: 2, c: 3, d: 4 };
    const keys = ['a', 'b'];
    deepEqual(omit(data, keys), omit2(data, keys));
});

test('uniq', async t => {
    const { deepEqual } = t;

    deepEqual(uniq([1, 2, 2, 1, 3]), [1, 2, 3]);
});

test('last', async t => {
    const { is } = t;

    is(last([1, 2, 2, 1, 3]), 3);
});

test('upperFirst', async t => {
    const { is } = t;

    is(upperFirst('abc'), 'Abc');
});

test('kebabCase', async t => {
    const { is } = t;

    is(kebabCase('aaaBbb'), 'aaa-bbb');
});

test('get', async t => {
    const { is } = t;

    const object = { a: [{ b: { c: 3 } }] };

    is(get(object, 'a[0].b.c'), 3);
});

test('uniqWith', async t => {
    const { deepEqual } = t;

    const objects = [
        { x: 1, y: 2 },
        { x: 2, y: 1 },
        { x: 1, y: 2 }
    ];

    deepEqual(uniqWith(objects, isEqual), [
        { x: 1, y: 2 },
        { x: 2, y: 1 }
    ]);
});

test('isInteger', async t => {
    const { truthy } = t;

    truthy(isInteger(123));
});

test('random', async t => {
    const { truthy } = t;

    truthy(inRange(random(), 0, 1.1));
    truthy(inRange(random(2, 5), 2, 5.1));
    truthy(inRange(random(0.1, 3), 0, 3.1));
    truthy(inRange(random(1, 3, true), 1, 3.1));
});

test('isEqual', async t => {
    const { truthy, falsy } = t;

    truthy(isEqual([], []));
    truthy(isEqual({}, {}));
    truthy(isEqual(1, 1));
    truthy(isEqual('hi', 'hi'));
    truthy(isEqual(null, null));
    falsy(isEqual(['a'], 'a'));
    falsy(
        isEqual(
            () => {},
            () => {}
        )
    );
    falsy(isEqual(/a/, /a/));
    falsy(isEqual([undefined], []));
    truthy(isEqual(new Date('2011-03-31'), new Date('2011-03-31')));
    falsy(isEqual(new Date('2011-03-31'), new Date('2011-03-30')));
});
