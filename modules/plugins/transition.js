import camelToDashCase from '../utils/camelToDashCase'
import capitalizeString from '../utils/capitalizeString'
import unprefixProperty from '../utils/unprefixProperty'
import prefixProps from '../prefixProps'

const properties = {
  'transition': true,
  'transitionProperty': true
}

export default function transition(property, value) {
  // also check for already prefixed transitions
  const unprefixedProperty = unprefixProperty(property)
  if (typeof value === 'string' && properties[unprefixedProperty]) {
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

    const outputValue = multipleValues.join(',')
    return {
      ['Webkit' + capitalizeString(property)]: outputValue.split(',').filter(value => value.match(/-moz-|-ms-/) === null).join(','),
      [property]: outputValue
    }
  }
}
