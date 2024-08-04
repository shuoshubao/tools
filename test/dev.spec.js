import { sleep } from '@/dev';
import { inRange } from 'lodash';
import { describe, expect, it } from 'vitest';

describe('sleep', () => {
    it('', async () => {
        const time1 = await sleep(1);
        expect(time1).toBe(1e3);
    });

    it('', async () => {
        const time2 = await sleep();
        expect(inRange(time2, 0, 1001)).toBeTruthy();
    });

    it('', async () => {
        const time3 = await sleep(1, 2);
        expect(inRange(time3, 1e3, 2e3 + 1)).toBeTruthy();
    });
});
