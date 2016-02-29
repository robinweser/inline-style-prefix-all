import camelToDashCase from '../utils/camelToDashCase'
const values = new Set([ 'zoom-in', 'zoom-out', 'grab', 'grabbing' ])

export default function cursor(property, value) {
  if (property === 'cursor' && values.has(value)) {
    return {
      cursor: [ '-webkit-', '-moz-', '' ].map(prefix => prefix + value).join(';' + camelToDashCase(property) + ':')
    }
  }
}
