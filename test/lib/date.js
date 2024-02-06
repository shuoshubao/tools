import test from 'ava'
import moment from 'moment'
import { formatTime } from '../../lib/date'

test('formatTime', async t => {
  const { is } = t
  is(formatTime(Date.now()), moment().format('YYYY-MM-DD'))
  is(formatTime(0), '--')
  is(formatTime('2023-01-01 22:22:22'), '2023-01-01')
  is(formatTime(Date.now(), 'yyyy'), moment().format('YYYY'))
  is(formatTime(Date.now(), 'YYYY'), moment().format('YYYY'))
  is(formatTime(Date.now(), 'a'), moment().format('a'))
  is(formatTime(Date.now(), 'A'), moment().format('A'))
  is(formatTime(Date.now(), 'Aa'), moment().format('Aa'))
})
