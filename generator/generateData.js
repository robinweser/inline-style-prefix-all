import fs from 'fs'
import searchMap from './searchMap'
import config from '../config'

const caniuse = require('caniuse-api')

const prefixBrowsers = {
  chrome: 'Webkit',
  safari: 'Webkit',
  firefox: 'Moz',
  opera: 'Webkit',
  ie: 'ms',
  edge: 'ms',
  ios_saf: 'Webkit',
  android: 'Webkit',
  and_chr: 'Webkit',
  and_uc: 'Webkit',
  op_mini: 'Webkit',
  ie_mob: 'ms'
}

const prefixProperties = Object.keys(prefixBrowsers).reduce((out, browser) => {
  const prefix = prefixBrowsers[browser]
  Object.keys(searchMap).forEach(searchKey => {
    const versions = caniuse.getSupport(searchKey, true)
    const properties = [ ].concat(searchMap[searchKey])

    properties.forEach(prop => {
      if (versions[browser].x >= config[browser]) {
        out[prefix].add(prop)
      }
    })
  })

  return out
}, { Webkit: new Set(), Moz: new Set(), ms: new Set() })

// remove flexprops from IE
const flexPropsIE = [ 'alignContent', 'alignSelf', 'alignItems', 'justifyContent', 'order', 'flexGrow', 'flexShrink', 'flexBasis' ]

flexPropsIE.forEach(prop => {
  prefixProperties.ms.delete(prop)
})

const file = 'export default ' + JSON.stringify(prefixProperties).replace(new RegExp(/\[/, 'g'), 'new Set([').replace(new RegExp(/\]/, 'g'), '])');

fs.writeFile('./modules/prefixProps.js', file, err => {
  if (err) {
    throw err
  }
  console.log('Successfully generated static property vendor-prefix data based on before generated caniuse data mapping.')
})
