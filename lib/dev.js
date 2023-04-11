import { random } from './lodash'

/**
 * 睡眠函数
 * 可用于模拟接口请求, 或者 setTimeout 的替代形式
 * @param  {Number} [time] 等待时长(秒)
 * @example
 *
 * await sleep()
 * console.log(1)
 * // => 随机时间(2s-5s)后输出: 1
 *
 * @example
 * await sleep(3)
 * console.log(1)
 * // => 3秒后输出: 1
 */
export const sleep = (time = -1) => {
  const sleepTime = time < 0 ? random(2, 5) : time
  // eslint-disable-next-line no-promise-executor-return
  return new Promise(resolve => setTimeout(resolve, sleepTime * 1e3))
}
