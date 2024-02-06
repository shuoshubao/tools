import test from 'ava'
import { divide, minus, multiply, plus } from '../../lib/decimal'

test('plus', async t => {
  const { is } = t
  is(plus(1, 1), 2)
  is(plus(0.1, 0.2), 0.3)
  is(plus([0.1, 0.2]), 0.3)
})

test('minus', async t => {
  const { is } = t
  is(minus(0.3, 0.1), 0.2)
})

test('multiply', async t => {
  const { is } = t
  is(multiply(0.1, 0.2), 0.02)
})

test('divide', async t => {
  const { is } = t
  is(divide(0.3, 0.1), 3)
})
