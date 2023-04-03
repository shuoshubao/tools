import test from 'ava'
import {
  arrayMove,
  reserveProperties,
  removeProperties,
  removeEmptyProperties,
  produceEmptyObject,
  formatEmptyToDefault
} from '../../lib/data'

test('arrayMove', async t => {
  const { deepEqual } = t

  const arr1 = [11, 22, 33, 44, 55, 66]
  const arr11 = arrayMove(arr1, 0, 1)
  deepEqual(arr1, [22, 11, 33, 44, 55, 66])
  deepEqual(arr11, [22, 11, 33, 44, 55, 66])

  const arr2 = [11, 22, 33, 44, 55, 66]
  arrayMove(arr2, 0, -1)
  deepEqual(arr2, [66, 22, 33, 44, 55, 11])
})

test('reserveProperties', async t => {
  const { is, deepEqual } = t

  const data = { a: 1, b: 2, c: 3 }
  reserveProperties(data, ['a'])

  deepEqual(data, { a: 1 })

  is(reserveProperties(), undefined)
})

test('removeProperties', async t => {
  const { is, deepEqual } = t

  const data = { a: 1, b: 2, c: 3 }
  removeProperties(data, ['a'])

  deepEqual(data, { b: 2, c: 3 })

  is(removeProperties(), undefined)
})

test('removeEmptyProperties', async t => {
  const { is, deepEqual } = t

  const data = { a: '', b: 0, c: false, d: null, e: { a: 0 } }
  removeEmptyProperties(data, ['a'])

  deepEqual(data, { b: 0, c: false, e: { a: 0 } })

  is(removeEmptyProperties(), undefined)
})

test('produceEmptyObject', async t => {
  const { deepEqual } = t

  deepEqual(produceEmptyObject(['a', 'b']), { a: '', b: '' })
  deepEqual(produceEmptyObject(['a', 'b'], null), { a: null, b: null })
  deepEqual(produceEmptyObject(), {})
})

test('formatEmptyToDefault', async t => {
  const { is, deepEqual } = t

  const data = {
    a: 1,
    b: null,
    c: '',
    d: ' '
  }

  const formater = {
    a: '',
    b: -1,
    c: -1
  }

  formatEmptyToDefault(data, formater)

  deepEqual(data, { a: 1, b: -1, c: -1, d: ' ' })

  is(formatEmptyToDefault(), undefined)
})
