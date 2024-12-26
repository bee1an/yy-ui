/**
 * @function isObject
 * @description 判断这个值是否是对象
 * @param { any } value 序言判断的值
 * @returns { boolean }
 */
export const isObject = (value: any): boolean => {
  const type = typeof value
  return value != null && (type === 'object' || type === 'function')
}

/**
 * @function omitObject
 * @description 删除对象中的某些key
 * @param {Record<string, any>} obj 对象
 * @param {string[]} keys 需要删除的key
 * @returns {Record<string, any>}
 */
export const omitObject = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj }
  keys.forEach(key => {
    delete result[key]
  })
  return result
}

/**
 * @function pickObject
 * @description 保留对象中的某些key
 * @param {Record<string, any>} obj 对象
 * @param {string[]} keys 需要保留的key
 * @returns {Record<string, any>}
 */
export const pickObject = <T extends Record<string, any>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  const result: Partial<Pick<T, K>> = {}
  keys.forEach(key => {
    result[key] = obj[key]
  })
  return result as Pick<T, K>
}
