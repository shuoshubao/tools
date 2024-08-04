import { formatTime } from '@/date';
import dayjs from 'dayjs';
import { describe, expect, it } from 'vitest';

describe('formatTime', () => {
    it('', () => {
        expect(formatTime(Date.now())).toBe(dayjs().format('YYYY-MM-DD'));
    });

    it('', () => {
        expect(formatTime(0)).toBe('--');
    });

    it('', () => {
        expect(formatTime('2023-01-01 22:22:22')).toBe('2023-01-01');
    });

    it('', () => {
        expect(formatTime(Date.now(), 'yyyy')).toBe(dayjs().format('YYYY'));

        expect(formatTime(Date.now(), 'YYYY')).toBe(dayjs().format('YYYY'));

        expect(formatTime(Date.now(), 'a')).toBe(dayjs().format('a'));

        expect(formatTime(Date.now(), 'A')).toBe(dayjs().format('A'));

        expect(formatTime(Date.now(), 'Aa')).toBe(dayjs().format('Aa'));
    });
});
