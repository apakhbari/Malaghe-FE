function RemoveUndefinedsToPleaseNext(obj) {
  // cleaning an array
  if (Array.isArray(obj)) {
    const arr = obj
    const newArr = []
    arr.forEach((val, key) => {
      if (typeof val === 'undefined') {
        return
      }
      if (val === Object(val)) {
        // this is an object, not a regula value
        newArr[key] = RemoveUndefinedsToPleaseNext(val)
      } else {
        newArr[key] = val
      }
    })
    return newArr
  }

  // cleaning an object
  const newObj = {}
  Object.keys(obj).forEach((key) => {
    const val = obj[key]
    if (typeof val === 'undefined') {
      return
    }
    if (val === Object(val)) {
      // this is an object, not a regula value
      newObj[key] = RemoveUndefinedsToPleaseNext(val)
    } else {
      newObj[key] = val
    }
  })
  return newObj
}

export default RemoveUndefinedsToPleaseNext
