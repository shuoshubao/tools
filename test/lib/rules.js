import test from 'ava'
import Schema from 'async-validator'
import { rules } from '../../lib/rules'

const commonSchemaOptions = {
  suppressWarning: true
}

const validateData = (descriptor = {}, data) => {
  const validator = new Schema(descriptor)
  return new Promise(resolve => {
    validator.validate(data, commonSchemaOptions, errors => {
      resolve(!errors)
    })
  })
}

test('required', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.required('字段名') }

  const result1 = await validateData(descriptor, { fieldName: '' })
  falsy(result1)

  const result2 = await validateData(descriptor, { fieldName: 'aaa' })
  truthy(result2)

  const result3 = await validateData({ fieldName: rules.required() }, { fieldName: 'aaa' })
  truthy(result3)
})

test('selectRequired', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.selectRequired('字段名') }

  const result1 = await validateData(descriptor, { fieldName: '' })
  falsy(result1)

  const result2 = await validateData(descriptor, { fieldName: 'bbb' })
  truthy(result2)

  const result3 = await validateData(descriptor, { fieldName: 123 })
  truthy(result3)

  const result4 = await validateData({ fieldName: rules.selectRequired() }, { fieldName: '' })
  falsy(result4)
})

test('multipleRequired', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.multipleRequired('字段名') }

  const result1 = await validateData(descriptor, { fieldName: ['aa', 'bb'] })
  truthy(result1)

  const result2 = await validateData(descriptor, { fieldName: undefined })
  falsy(result2)

  const result3 = await validateData(descriptor, { fieldName: 123 })
  falsy(result3)

  const result4 = await validateData(descriptor, { fieldName: [] })
  falsy(result4)

  const result5 = await validateData({ fieldName: rules.multipleRequired() }, { fieldName: [] })
  falsy(result5)
})

test('min', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.min('字段名', 5) }

  const result1 = await validateData(descriptor, { fieldName: 'abcde' })
  truthy(result1)

  const result2 = await validateData(descriptor, { fieldName: 'abc' })
  falsy(result2)

  const result3 = await validateData({ fieldName: rules.min() }, { fieldName: 'abc' })
  truthy(result3)
})

test('max', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.max('字段名', 5) }

  const result1 = await validateData(descriptor, { fieldName: 'abc' })
  truthy(result1)

  const result2 = await validateData(descriptor, { fieldName: 'abcdef' })
  falsy(result2)

  const result3 = await validateData({ fieldName: rules.max() }, { fieldName: 'abcdef' })
  falsy(result3)
})

test('uniq', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.uniq('字段名') }

  const result1 = await validateData(descriptor, { fieldName: [11, 22, 33] })
  truthy(result1)

  const result2 = await validateData(descriptor, { fieldName: [11, 22, 11] })
  falsy(result2)

  const result3 = await validateData({ fieldName: rules.uniq() }, { fieldName: [11, 22, 11] })
  falsy(result3)
})

// 等于
test('numberRange: eq', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.numberRange('字段名', { eq: 100 }) }

  const result1 = await validateData(descriptor, { fieldName: 100 })
  truthy(result1)

  const result2 = await validateData(descriptor, { fieldName: 99 })
  falsy(result2)
})

// 不等于
test('numberRange: ne', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.numberRange('字段名', { ne: 100 }) }

  const result1 = await validateData(descriptor, { fieldName: 100 })
  falsy(result1)

  const result2 = await validateData(descriptor, { fieldName: 99 })
  truthy(result2)
})

// 大于
test('numberRange: gt', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.numberRange('字段名', { gt: 100 }) }

  const result1 = await validateData(descriptor, { fieldName: 101 })
  truthy(result1)

  const result2 = await validateData(descriptor, { fieldName: 99 })
  falsy(result2)
})

// 小于
test('numberRange: lt', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.numberRange('字段名', { lt: 100 }) }

  const result1 = await validateData(descriptor, { fieldName: 99 })
  truthy(result1)

  const result2 = await validateData(descriptor, { fieldName: 101 })
  falsy(result2)
})

test('numberRange: decimalLength', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.numberRange('字段名', { decimalLength: 3 }) }

  const result1 = await validateData(descriptor, { fieldName: 12.345 })
  truthy(result1)

  const result2 = await validateData(descriptor, { fieldName: 12 })
  truthy(result2)

  const result3 = await validateData(descriptor, { fieldName: 12.3456 })
  falsy(result3)
})

// 大于等于
test('numberRange: ge', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.numberRange('字段名', { ge: 100 }) }

  const result1 = await validateData(descriptor, { fieldName: 101 })
  truthy(result1)

  const result2 = await validateData(descriptor, { fieldName: 100 })
  truthy(result2)

  const result3 = await validateData(descriptor, { fieldName: 99 })
  falsy(result3)
})

// 小于等于
test('numberRange: le', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.numberRange('字段名', { le: 100 }) }

  const result1 = await validateData(descriptor, { fieldName: 99 })
  truthy(result1)

  const result2 = await validateData(descriptor, { fieldName: 100 })
  truthy(result2)

  const result3 = await validateData(descriptor, { fieldName: 101 })
  falsy(result3)
})

// 等于
test('numberRange', async t => {
  const { truthy, falsy } = t

  const descriptor = { fieldName: rules.numberRange() }

  const result1 = await validateData(descriptor, { fieldName: 100 })
  truthy(result1)
})
