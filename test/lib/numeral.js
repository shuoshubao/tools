import test from 'ava'
import { thousands, getValueInRange } from '../../lib/numeral'

test('thousands', t => {
  const { is } = t

  is(thousands(), undefined)
  is(thousands(null), null)
  is(thousands(1), '1')
  is(thousands(12), '12')
  is(thousands(123), '123')
  is(thousands(1234), '1,234')
  is(thousands(12345), '12,345')
  is(thousands(123456), '123,456')
  is(thousands(1234567), '1,234,567')
  is(thousands(1.1), '1.1')
  is(thousands(1.12), '1.12')
  is(thousands(1.123), '1.123')
  is(thousands(1.1234), '1.1234')
  is(thousands(-1.1234), '-1.1234')
  is(thousands(-1234.1234), '-1,234.1234')
})

test('getValueInRange', t => {
  const { is } = t
  is(getValueInRange(1, 2, 7), 2)
  is(getValueInRange(3, 2, 7), 3)
  is(getValueInRange(12, 2, 7), 7)
})
