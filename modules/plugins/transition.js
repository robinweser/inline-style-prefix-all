import camelToDashCase from '../utils/camelToDashCase'
import capitalizeString from '../utils/capitalizeString'
import unprefixProperty from '../utils/unprefixProperty'
import isPrefixedValue from '../utils/isPrefixedValue'
import prefixProps from '../prefixProps'

const properties = { transition: true, transitionProperty: true }

export default function transition(property, value) {
  // also check for already prefixed transitions
  const unprefixedProperty = unprefixProperty(property)
  if (typeof value === 'string' && properties[unprefixedProperty]) {
    const outputValue = prefixValue(value)

    if (unprefixedProperty !== property) {
      return { [property]: outputValue }
    }

    return {
      ['Webkit' + capitalizeString(property)]: outputValue.split(',').filter(value => value.match(/-moz-|-ms-/) === null).join(','),
      [property]: outputValue
    }
  }
}

function prefixValue(value) {
  if (isPrefixedValue(value)) {
    return value
  }

  // only split multi values, not cubic beziers
  const multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g)

  // iterate each single value and check for transitioned properties
  // that need to be prefixed as well
  multipleValues.forEach((val, index) => {
    multipleValues[index] = Object.keys(prefixProps).reduce((out, prefix) => {
      const dashCasePrefix = '-' + prefix.toLowerCase() + '-'

      Object.keys(prefixProps[prefix]).forEach(prop => {
        const dashCaseProperty = camelToDashCase(prop)

        if (val.indexOf(dashCaseProperty) > -1) {
          // join all prefixes and create a new value
          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out
        }
      })
      return out
    }, val)
  })

  return multipleValues.join(',')
}
