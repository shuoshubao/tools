import test from 'ava'
import { plus, minus, mul, div } from '../../lib/decimal'

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

test('mul', async t => {
  const { is } = t
  is(mul(0.1, 0.2), 0.02)
})

test('div', async t => {
  const { is } = t
  is(div(0.3, 0.1), 3)
})
