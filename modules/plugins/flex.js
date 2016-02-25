const values = new Set([ 'flex', 'inline-flex' ])

export default function flex(property, value) {
  if (property === 'display' && values.has(value)) {
    return {
      display: [ '-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value ].join(';' + property + ':')
    }
  }
}
