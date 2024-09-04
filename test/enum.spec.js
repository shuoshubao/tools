import { convertDataToCascader } from '@/enum';
import { describe, expect, it } from 'vitest';

describe('convertDataToCascader', () => {
    it('', () => {
        const res = {
            code: 1,
            data: {
                list: [
                    { code: 5, desc: '优秀' },
                    { code: 4, desc: '良好' },
                    { code: 3, desc: '及格', list: [{ code: 3.5, desc: '一般' }] }
                ]
            },
            message: 'success'
        };

        const data1 = convertDataToCascader(res, { path: 'data.list', valueKey: 'code', labelKey: 'desc', childrenKey: 'list' });

        const data2 = [
            { value: 5, label: '优秀' },
            { value: 4, label: '良好' },
            {
                value: 3,
                label: '及格',
                children: [
                    {
                        value: 3.5,
                        label: '一般'
                    }
                ]
            }
        ];

        expect(data1).toEqual(data2);
    });
});
