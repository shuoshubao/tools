export const isNumber = value => {
  return typeof value === 'number'
}

export const isString = value => {
  return typeof value === 'string'
}

export const isBoolean = value => {
  return typeof value === 'boolean'
}

export const isUndefined = value => {
  return typeof value === 'undefined'
}

export const isFunction = value => {
  return typeof value === 'function'
}

export const isNull = value => {
  return value === null
}

export const isNil = value => {
  return value == null
}

export const pick = (object, ...keys) => {
  return [].concat(...keys).reduce((prev, cur) => {
    if (cur in object) {
      prev[cur] = object[cur]
    }
    return prev
  }, {})
}

export const omit = (object, ...keys) => {
  return Object.keys(object)
    .filter(v => {
      return ![].concat(...keys).includes(v)
    })
    .reduce((prev, cur) => {
      prev[cur] = object[cur]
      return prev
    }, {})
}

export const uniq = (array = []) => {
  return [...new Set(array)]
}

export const last = (array = []) => {
  return array[array.length - 1]
}

export const upperFirst = (string = '') => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export const kebabCase = (string = '') => {
  return string
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-')
}

export const get = (object, path = '', defaultValue = undefined) => {
  const travel = regexp => {
    return path
      .split(regexp)
      .filter(Boolean)
      .reduce((res, key) => {
        return res !== null && res !== undefined ? res[key] : res
      }, object)
  }
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/)
  return result === undefined || result === object ? defaultValue : result
}

export const uniqWith = (array, fn) => {
  return array.filter((element, index) => {
    return (
      array.findIndex(step => {
        return fn(element, step)
      }) === index
    )
  })
}

export const isInteger = value => {
  return isNumber(value) && value % 1 === 0
}

export const random = (lower = 0, upper = 1, floating) => {
  const min = Math.min(lower, upper)
  const max = Math.max(lower, upper)
  let isInt
  if (isBoolean(floating)) {
    isInt = floating
  } else {
    isInt = [lower, upper].every(isInteger)
  }
  if (isInt) {
    return Math.floor(min + Math.random() * (max - min + 1))
  }
  return min + Math.random() * (max - min)
}

// https://stackoverflow.com/questions/201183/how-to-determine-equality-for-two-javascript-objects
export const isEqual = (x, y) => {
  if (!x || !y) {
    return x === y
  }
  // after this just checking type of one would be enough
  if (x.constructor !== y.constructor) {
    return false
  }
  // if they are functions, they should exactly refer to same one (because of closures)
  if (x instanceof Function) {
    return x === y
  }
  // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
  if (x instanceof RegExp) {
    return x === y
  }

  if (x === y || x.valueOf() === y.valueOf()) {
    return true
  }

  if (Array.isArray(x) && x.length !== y.length) {
    return false
  }

  // if they are dates, they must had equal valueOf
  if (x instanceof Date) {
    return false
  }

  // if they are strictly equal, they both need to be object at least
  if (!(x instanceof Object)) {
    return false
  }

  if (!(y instanceof Object)) {
    return false
  }

  // recursive object equality check
  const xKeys = Object.keys(x)
  const yKeys = Object.keys(y)

  return (
    yKeys.every(key => {
      return xKeys.includes(key)
    }) &&
    xKeys.every(key => {
      return isEqual(x[key], y[key])
    })
  )
}
