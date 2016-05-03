import isArray from 'isarray'

export default value => {
  if (isArray(value)) value = value.join(',')

  return value.match(/-webkit-|-moz-|-ms-/) !== null
}
