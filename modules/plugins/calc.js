import joinPrefixedRules from '../utils/joinPrefixedRules'

export default function calc(property, value) {
  if (typeof value === 'string' && value.indexOf('calc(') > -1) {
    return joinPrefixedRules(property, value, (prefix, value) => value.replace(/calc\(/g, prefix + 'calc('))
  }
}
