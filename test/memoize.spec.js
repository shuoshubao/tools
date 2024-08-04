import { memoize } from '@/memoize';
import { describe, expect, it } from 'vitest';

describe('memoize', () => {
    let count = 0;

    const add = (a, b) => {
        count++;
        return a + b;
    };

    const memoizedAdd = memoize(add);

    it('', () => {
        expect(memoizedAdd(1, 2)).toBe(3);
    });

    it('', () => {
        expect(memoizedAdd(1, 2)).toBe(3);
    });

    it('', () => {
        expect(count).toBe(1);
    });
});
