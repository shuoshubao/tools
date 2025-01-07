/**
 * 将 element-ui Form组件 的 validate 和 validateField 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式
 * @param  {Function} [validate] 校验方法
 * @return {Promise<Boolean, String>} 校验结果
 * @example
 *
 * const isValid = await pifyValidate(this.$refs.form.validate)
 * // => false
 *
 * @example
 *
 * const errorMessage = await pifyValidate(this.$refs.form.validateField)
 * // => '不能为空'
 */
export const pifyValidate = (validate, ...props) => {
    return new Promise(resolve => {
        validate(...props, resolve);
    });
};
