export default function calc(property, value) {
  if (typeof value === 'string' && value.indexOf('calc(') > -1) {
    return {
      [property]: [ '-webkit-', '-moz-', '' ].map(prefix => value.replace(/calc\(/g, prefix + 'calc(')).join(';' + property + ':')
    }
  }
}
