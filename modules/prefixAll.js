import prefixProperties from './prefixProps'

/*
import calc from './plugins/calc'
import cursor from './plugins/cursor'
import flex from './plugins/flex'
import sizing from './plugins/sizing'
import gradient from './plugins/gradient'
import transition from './plugins/transition'
// special flexbox specifications
import flexboxIE from './plugins/flexboxIE'
import flexboxOld from './plugins/flexboxOld'

export default [
  calc,
  cursor,
  sizing,
  gradient,
  transition,
  flexboxIE,
  flexboxOld,
  // this must be run AFTER the flexbox specs
  flex
]*/


// helper to capitalize strings
const capitalizeString = str => str.charAt(0).toUpperCase() + str.slice(1)

/**
 * Returns a prefixed version of the style object using all vendor prefixes
 * @param {Object} styles - Style object that gets prefixed properties added
 * @returns {Object} - Style object with prefixed properties and values
 */
export default function prefixAll(styles) {
  return Object.keys(styles).reduce((prefixedStyles, property) => {
    const value = styles[property]
    if (value instanceof Object) {
      // recurse through nested style objects
      prefixedStyles[property] = prefixAll(value)
    } else {
      Object.keys(prefixProperties).forEach(prefix => {
        const properties = prefixProperties[prefix]
        // add prefixes if needed
        if (properties.has(property)) {
          prefixedStyles[prefix + capitalizeString(property)] = value
        }
      })
    }

    return prefixedStyles
  }, styles)
}
