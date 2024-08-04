import { queryParse, queryStringify } from '@/route';
import { describe, expect, it } from 'vitest';

describe('queryParse', () => {
    it('', () => {
        expect(queryParse()).toEqual({});
    });

    it('', () => {
        expect(queryParse('')).toEqual({});
    });

    it('', () => {
        expect(queryParse('?')).toEqual({});
    });

    it('', () => {
        expect(queryParse('?a')).toEqual({ a: null });
    });

    it('', () => {
        expect(queryParse('?a=1')).toEqual({ a: '1' });
    });

    it('', () => {
        expect(queryParse('a=1')).toEqual({ a: '1' });
    });

    it('', () => {
        expect(queryParse('a=true')).toEqual({ a: 'true' });
    });

    it('', () => {
        expect(queryParse('a=1&b')).toEqual({ a: '1', b: null });
    });

    it('', () => {
        expect(queryParse('a=1&b=2')).toEqual({ a: '1', b: '2' });
    });

    it('', () => {
        expect(queryParse('a=1&b&c')).toEqual({ a: '1', b: null, c: null });
    });

    it('', () => {
        expect(queryParse('a=1&b=2&c&d=2&d=3')).toEqual({ a: '1', b: '2', c: null, d: ['2', '3'] });
    });

    it('', () => {
        expect(queryParse('a=1&b=2&c&d=2&d=3&d')).toEqual({ a: '1', b: '2', c: null, d: ['2', '3', null] });
    });
});

describe('queryStringify', () => {
    it('', () => {
        expect(queryStringify()).toBe('');
    });

    it('', () => {
        expect(queryStringify(null)).toBe('');
    });

    it('', () => {
        expect(queryStringify({})).toBe('');
    });

    it('', () => {
        expect(queryStringify({ a: 1 })).toBe('a=1');
    });

    it('', () => {
        expect(queryStringify({ a: '1' })).toBe('a=1');
    });

    it('', () => {
        expect(queryStringify({ a: 1, b: 2 })).toBe('a=1&b=2');
    });

    it('', () => {
        expect(queryStringify({ a: 1, b: null })).toBe('a=1&b');
    });

    it('', () => {
        expect(queryStringify({ a: 1, b: null, c: null })).toBe('a=1&b&c');
    });

    it('', () => {
        expect(queryStringify({ a: 1, b: undefined, c: null })).toBe('a=1&c');
    });

    it('', () => {
        expect(queryStringify({ a: true })).toBe('a=true');
    });

    it('', () => {
        expect(queryStringify({ a: true, b: false })).toBe('a=true&b=false');
    });

    it('', () => {
        expect(queryStringify({ a: 1, b: 2, c: null, d: [2, 3] })).toBe('a=1&b=2&c&d=2&d=3');
    });

    it('', () => {
        expect(queryStringify({ a: 1, b: 2, c: null, d: [2, undefined, 3, null] })).toBe('a=1&b=2&c&d=2&d=3&d');
    });
});
