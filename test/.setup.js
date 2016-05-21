import jsdom from 'jsdom'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'

require('babel-register')()

chai.use(chaiImmutable)

var exposedProperties = ['window', 'navigator', 'document']

global.document = jsdom.jsdom('')
global.window = document.defaultView
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = document.defaultView[property]
  }
})

global.navigator = {
  userAgent: 'node.js'
}
