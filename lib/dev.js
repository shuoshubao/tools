import { random } from './lodash'

/**
 * 睡眠函数
 * 可用于模拟接口请求, 或者 setTimeout 的替代形式
 * @param  {Number} [time] 等待时长(秒)
 * @example
 *
 * await sleep()
 * console.log('hi')
 * // => random(0, 1) 秒后输出: 'hi'
 *
 * @example
 * await sleep(3)
 * console.log('hi')
 * // => 3 秒后输出: 'hi'
 *
 * @example
 * await sleep(2, 5)
 * console.log('hi')
 * // => random(2, 5) 秒后输出: 'hi'
 */
export const sleep = (...args) => {
  let sleepTime
  if (args.length === 1) {
    sleepTime = args[0]
  } else {
    sleepTime = random(...args)
  }
  sleepTime *= 1000
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(sleepTime)
    }, sleepTime)
  })
}
