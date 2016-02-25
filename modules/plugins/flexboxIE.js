const alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  flex: '-ms-flexbox',
  'inline-flex': '-ms-inline-flexbox'
}
const alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
}

const properties = new Set(Object.keys(alternativeProps))

export default function flexboxIE(property, value) {
  if (properties.has(property) || property === 'display' && value.indexOf('flex') > -1) {
    if (alternativeProps[property]) {
      return {
        [alternativeProps[property]]: alternativeValues[value] || value
      }
    }
    if (alternativeValues[value]) {
      return {
        [property]: [ alternativeValues[value], value ].join(';' + property + ':')
      }
    }
  }
}
