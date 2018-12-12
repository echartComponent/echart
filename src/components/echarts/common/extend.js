export const extend = function (out) {
  if (!out) {
    console.error('where is your container ?')
    return
  }
  var objs = [].slice.call(arguments, 1)

  if (objs.length > 0) {
    objs.forEach(function (item, index) {
      if (typeof item !== 'object') {
        console.error('item' + index + ' is no valid arguments, expected to be object')
      } else {
        for (var key in item) {
          if (item.hasOwnProperty(key)) {
            if (typeof item[key] === 'object') {
              out[key] = out[key] || {}
              extend(out[key], item[key])
            } else {
              out[key] = item[key]
            }
          }
        }
      }
    })
  } else {
    console.error('no objs to be copy')
  }

  return out
}
