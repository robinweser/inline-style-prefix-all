// leight polyfill for Object.assign
export default (base, extend = { }) => Object.keys(extend).reduce((out, key) => {
  base[key] = extend[key]
  return out
}, { })
