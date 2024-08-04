/*
 * @Author: shuoshubao
 * @Date: 2024-07-21 19:29:25
 * @LastEditors: shuoshubao
 * @LastEditTime: 2024-08-04 11:28:39
 * @Description:
 */
import { pascalCase, trimAll } from '@/string';
import { describe, expect, it } from 'vitest';

describe('trimAll', () => {
    it('', () => {
        expect(trimAll('abc')).toBe('abc');
    });

    it('', () => {
        expect(trimAll('abc')).toBe('abc');
    });

    it('', () => {
        expect(trimAll(' abc')).toBe('abc');
    });

    it('', () => {
        expect(trimAll(' a bc')).toBe('abc');
    });

    it('', () => {
        expect(trimAll(' a b c')).toBe('abc');
    });

    it('', () => {
        expect(trimAll(' a b c ')).toBe('abc');
    });

    it('', () => {
        expect(trimAll('  ')).toBe('');
    });

    it('', () => {
        expect(trimAll()).toBe('');
    });
});

describe('pascalCase', () => {
    it('', () => {
        expect(pascalCase('foo bar')).toBe('FooBar');
    });

    it('', () => {
        expect(pascalCase('Foo Bar')).toBe('FooBar');
    });

    it('', () => {
        expect(pascalCase('fooBar')).toBe('FooBar');
    });

    it('', () => {
        expect(pascalCase('FooBar')).toBe('FooBar');
    });

    it('', () => {
        expect(pascalCase('--foo-bar--')).toBe('FooBar');
    });

    it('', () => {
        expect(pascalCase('__FOO_BAR__')).toBe('FOOBAR');
    });

    it('', () => {
        expect(pascalCase('!--foo-¿?-bar--121-**%')).toBe('FooBar121');
    });

    it('', () => {
        expect(pascalCase()).toBe('');
    });
});
