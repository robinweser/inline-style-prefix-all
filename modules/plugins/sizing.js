import camelToDashCase from '../utils/camelToDashCase'
const properties = new Set([ 'maxHeight', 'maxWidth', 'width', 'height', 'columnWidth', 'minWidth', 'minHeight' ])
const values = new Set([ 'min-content', 'max-content', 'fill-available', 'fit-content', 'contain-floats' ])

export default function sizing(property, value) {
  // This might change in the future
  // Keep an eye on it
  if (properties.has(property) && values.has(value)) {
    return {
      [property]: [ '-webkit-', '-moz-', '' ].map(prefix => prefix + value).join(';' + camelToDashCase(property) + ':')
    }
  }
}
