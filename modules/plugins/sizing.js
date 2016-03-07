import joinPrefixedRules from '../utils/joinPrefixedRules'
const properties = new Set([ 'maxHeight', 'maxWidth', 'width', 'height', 'columnWidth', 'minWidth', 'minHeight' ])
const values = new Set([ 'min-content', 'max-content', 'fill-available', 'fit-content', 'contain-floats' ])

export default function sizing(property, value) {
  if (properties.has(property) && values.has(value)) {
    return joinPrefixedRules(property, value)
  }
}
