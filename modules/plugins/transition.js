import camelToDashCase from '../utils/camelToDashCase'
import dashToCamelCase from '../utils/dashToCamelCase'
import capitalizeString from '../utils/capitalizeString'
import unprefixProperty from '../utils/unprefixProperty'
import prefixProps from '../prefixProps'

const properties = new Set([ 'transition', 'transitionProperty' ])

export default function transition(property, value) {
  // also check for already prefixed transitions
  const unprefixedProperty = unprefixProperty(property)
  if (typeof value === 'string' && properties.has(unprefixedProperty)) {
    let newValue = value

    // only split multi values, not cubic beziers
    const multipleValues = newValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g)

    // iterate each single value and check for transitioned properties
    // that need to be prefixed as well
    multipleValues.forEach((val, index) => {
      const requiredPrefixes = Object.keys(prefixProps).reduce((out, prefix) => {
        if (prefixProps[prefix].has(dashToCamelCase(property))) {
          out.push(prefix)
        }
        return out
      }, [ ])
      // join all prefixes and create a new value
      multipleValues[index] = requiredPrefixes.map(prefix => val.replace(property, prefix + property)).join(',')
    })

    const outputValue = multipleValues.join(',')
    return {
      ['Webkit' + capitalizeString(property)]: outputValue,
      [property]: outputValue
    }
  }
}
