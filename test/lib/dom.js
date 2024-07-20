import test from 'ava';
import { classNames, convertCssom, getCssText, getWordWidth, setAttrs, setStyle, suffixClassNames } from '../../lib/dom';

test('setAttrs', t => {
    const { is } = t;

    setAttrs(document.body, { id: 'demo' });

    is(document.body.id, 'demo');
});

test('setStyle', t => {
    const { is } = t;

    setStyle(document.body, { fontSize: 20 });

    is(document.body.style.fontSize, '20px');
});

test('convertCssom', t => {
    const { deepEqual } = t;
    deepEqual(
        convertCssom({
            color: 'red'
        }),
        { color: 'red' }
    );
    deepEqual(
        convertCssom({
            width: 100,
            height: 200
        }),
        {
            width: '100px',
            height: '200px'
        }
    );
    deepEqual(
        convertCssom({
            width: 100,
            minHeight: 100,
            marginTop: 10,
            paddingBottom: 10
        }),
        {
            width: '100px',
            'min-height': '100px',
            'margin-top': '10px',
            'padding-bottom': '10px'
        }
    );
});

test('getCssText', t => {
    const { is } = t;
    is(getCssText({}), '');
    is(getCssText({ color: 'red' }), 'color: red;');
    is(getCssText({ fontSize: 12 }), 'font-size: 12px;');
    is(getCssText({ marginTop: 12 }), 'margin-top: 12px;');
    is(getCssText({ fontSize: 12, marginTop: 12 }), 'font-size: 12px; margin-top: 12px;');
});

test('getWordWidth', t => {
    const { is } = t;
    is(getWordWidth('四个汉字'), 0);
});

test('classNames', t => {
    const { is } = t;

    is(classNames('foo', 'bar'), 'foo bar');
    is(classNames('foo', { bar: true }), 'foo bar');
    is(classNames({ 'foo-bar': true }), 'foo-bar');
    is(classNames({ 'foo-bar': false }), '');
    is(classNames({ foo: true }, { bar: true }), 'foo bar');
});

test('suffixClassNames', t => {
    const { is } = t;
    is(suffixClassNames('abc', { actived: false }), 'abc');
    is(suffixClassNames('abc', { actived: true }), 'abc abc-actived');
    is(suffixClassNames('abc', { actived: true, hover: false }), 'abc abc-actived');
    is(suffixClassNames('abc', { actived: true, hover: true }), 'abc abc-actived abc-hover');
    is(
        suffixClassNames(
            'abc-de',
            {
                actived: true,
                hover: true
            },
            { separator: '__' }
        ),
        'abc-de abc-de__actived abc-de__hover'
    );
});
