import { getValueInRange, thousands } from '@/numeral';
import { describe, expect, it } from 'vitest';

describe('thousands', () => {
    it('', () => {
        expect(thousands()).toBe(undefined);
    });

    it('', () => {
        expect(thousands(null)).toBe(null);
    });

    it('', () => {
        expect(thousands(1)).toBe('1');
    });

    it('', () => {
        expect(thousands(12)).toBe('12');
    });

    it('', () => {
        expect(thousands(123)).toBe('123');
    });

    it('', () => {
        expect(thousands(1234)).toBe('1,234');
    });

    it('', () => {
        expect(thousands(12345)).toBe('12,345');
    });

    it('', () => {
        expect(thousands(123456)).toBe('123,456');
    });

    it('', () => {
        expect(thousands(1234567)).toBe('1,234,567');
    });

    it('', () => {
        expect(thousands(1.1)).toBe('1.1');
    });

    it('', () => {
        expect(thousands(1.12)).toBe('1.12');
    });

    it('', () => {
        expect(thousands(1.123)).toBe('1.123');
    });

    it('', () => {
        expect(thousands(1.1234)).toBe('1.1234');
    });

    it('', () => {
        expect(thousands(-1.1234)).toBe('-1.1234');
    });

    it('', () => {
        expect(thousands(-1234.1234)).toBe('-1,234.1234');
    });
});

describe('getValueInRange', () => {
    it('', () => {
        expect(getValueInRange(1, 2, 7)).toBe(2);
    });

    it('', () => {
        expect(getValueInRange(3, 2, 7)).toBe(3);
    });

    it('', () => {
        expect(getValueInRange(12, 2, 7)).toBe(7);
    });
});
