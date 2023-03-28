import test from 'ava'
import { memoize } from '../../lib/memoize'

test('memoize', t => {
  const { is } = t
  let count = 0
  const add = (a, b) => {
    count++
    return a + b
  }
  const memoizedAdd = memoize(add)
  is(memoizedAdd(1, 2), 3)
  is(memoizedAdd(1, 2), 3)
  is(count, 1)
})
