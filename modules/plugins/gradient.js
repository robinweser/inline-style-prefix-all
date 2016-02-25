const values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/

export default function gradient(property, value) {
  if (typeof value === 'string' && value.match(values) !== null) {
    return {
      [property]: [ '-webkit-', '-moz-', '' ].map(prefix => prefix + value).join(';' + property + ':')
    }
  }
}
