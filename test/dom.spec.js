// @vitest-environment jsdom
import { classNames, convertCssom, getCssText, getWordWidth, setAttrs, setStyle, suffixClassNames } from '@/dom';
import { describe, expect, it } from 'vitest';

describe('setAttrs', () => {
    it('', () => {
        setAttrs(window.document.body, { id: 'demo' });
        expect(window.document.body.id).toBe('demo');
    });
});

describe('setStyle', () => {
    it('', () => {
        setStyle(document.body, { fontSize: 20 });

        expect(document.body.style.fontSize).toBe('20px');
    });
});

describe('convertCssom', () => {
    it('', () => {
        expect(
            convertCssom({
                color: 'red'
            })
        ).toEqual({
            color: 'red'
        });
    });

    it('', () => {
        expect(
            convertCssom({
                width: 100,
                height: 200
            })
        ).toEqual({
            width: '100px',
            height: '200px'
        });
    });

    it('', () => {
        expect(
            convertCssom({
                width: 100,
                minHeight: 100,
                marginTop: 10,
                paddingBottom: 10
            })
        ).toEqual({
            width: '100px',
            'min-height': '100px',
            'margin-top': '10px',
            'padding-bottom': '10px'
        });
    });
});

describe('getCssText', () => {
    it('', () => {
        expect(getCssText({})).toBe('');
    });

    it('', () => {
        expect(getCssText({ color: 'red' })).toBe('color: red;');
    });

    it('', () => {
        expect(getCssText({ fontSize: 12 })).toBe('font-size: 12px;');
    });

    it('', () => {
        expect(getCssText({ marginTop: 12 })).toBe('margin-top: 12px;');
    });

    it('', () => {
        expect(getCssText({ fontSize: 12, marginTop: 12 })).toBe('font-size: 12px; margin-top: 12px;');
    });
});

describe('getWordWidth', () => {
    it('', () => {
        expect(getWordWidth('四个汉字')).toBe(0);
    });
});

describe('classNames', () => {
    it('', () => {
        expect(classNames('foo', 'bar')).toBe('foo bar');
    });

    it('', () => {
        expect(classNames('foo', { bar: true })).toBe('foo bar');
    });

    it('', () => {
        expect(classNames({ 'foo-bar': true })).toBe('foo-bar');
    });

    it('', () => {
        expect(classNames({ 'foo-bar': false })).toBe('');
    });

    it('', () => {
        expect(classNames({ foo: true }, { bar: true })).toBe('foo bar');
    });
});

describe('suffixClassNames', () => {
    it('', () => {
        expect(suffixClassNames('abc', { actived: false })).toBe('abc');
    });

    it('', () => {
        expect(suffixClassNames('abc', { actived: true })).toBe('abc abc-actived');
    });

    it('', () => {
        expect(suffixClassNames('abc', { actived: true, hover: false })).toBe('abc abc-actived');
    });

    it('', () => {
        expect(suffixClassNames('abc', { actived: true, hover: true })).toBe('abc abc-actived abc-hover');
    });

    expect(suffixClassNames('abc-de', { actived: true, hover: true }, { separator: '__' })).toBe('abc-de abc-de__actived abc-de__hover');
});
