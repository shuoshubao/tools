/**
 * 将 element-ui Form组件 的 validate 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式
 * @param  {Function} [validate] 校验方法
 * @return {Promise<Boolean>} 校验结果
 * @example
 *
 * const isValid = await pifyValidate(this.$refs.form.validate)
 * // => false
 */
export const pifyValidate = validate => {
    return new Promise(resolve => {
        validate(resolve);
    });
};

/**
 * 将 element-ui Form组件 的 validateField 变成一个始终是resolved状态的promise, 不用写try-catch或者回调函数的形式
 * @param  {Function} [validateField] 校验方法
 * @return {Promise<String>} 校验结果
 * @example
 *
 * const errorMessage = await pifyValidateField(this.$refs.form.validateField)
 * // => '不能为空'
 */
export const pifyValidateField = (validateField, props) => {
    return new Promise(resolve => {
        validateField(props, resolve);
    });
};
