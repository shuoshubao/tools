import { isEqual } from './lodash'

/**
 * memoize/cache
 * @param  {Function} fn     缓存的函数
 * @return {Function}        包装的函数
 * @example
 *
 * const add = (a, b) => {
 *   return a + b;
 * }
 *
 * const memoizedAdd = memoize(add);
 *
 * memoizedAdd(1, 2) // 3
 * memoizedAdd(1, 2) // 3
 */
export const memoize = fn => {
  const caches = []
  const memoized = (...args) => {
    const item = caches.find(v => {
      return isEqual(v.args, args)
    })
    if (item) {
      return item.data
    }
    const data = fn(...args)
    caches.unshift({
      args,
      data
    })
    return data
  }
  memoized.clear = () => {
    caches.splice(0, Infinity)
  }
  return memoized
}
