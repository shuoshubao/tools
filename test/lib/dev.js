import test from 'ava';
import { inRange } from 'lodash';
import { sleep } from '../../lib/dev';

test('sleep', async t => {
    const { truthy, is } = t;

    const time1 = await sleep(1);
    is(time1, 1e3);

    const time2 = await sleep();
    truthy(inRange(time2, 0, 1001));

    const time3 = await sleep(1, 2);
    truthy(inRange(time3, 1e3, 2e3 + 1));
});
