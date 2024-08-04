import { divide, minus, multiply, plus } from '@/decimal';
import { describe, expect, it } from 'vitest';

describe('plus', () => {
    it('', () => {
        expect(plus(1, 1)).toBe(2);
    });

    it('', () => {
        expect(plus(0.1, 0.2)).toBe(0.3);
    });

    it('', () => {
        expect(plus([0.1, 0.2])).toBe(0.3);
    });
});

describe('minus', () => {
    it('', () => {
        expect(minus(0.3, 0.1)).toBe(0.2);
    });
});

describe('multiply', () => {
    it('', () => {
        expect(multiply(0.1, 0.2)).toBe(0.02);
    });
});

describe('divide', () => {
    it('', () => {
        expect(divide(0.3, 0.1)).toBe(3);
    });
});
