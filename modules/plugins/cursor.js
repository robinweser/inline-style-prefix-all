import joinPrefixedRules from '../utils/joinPrefixedRules'
const values = new Set([ 'zoom-in', 'zoom-out', 'grab', 'grabbing' ])

export default function cursor(property, value) {
  if (property === 'cursor' && values.has(value)) {
    return joinPrefixedRules(property, value)
  }
}
