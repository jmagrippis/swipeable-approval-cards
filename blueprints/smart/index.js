var path = require('path')

module.exports = {
  description() {
    return 'Generates a stateless (dumb / pure) component'
  },
  fileMapTokens() {
    return {
      __smart__: (options) => {
        return path.join(options.settings.getSetting('sourceBase'), '/', options.settings.getSetting('smartPath'))
      }
    }
  }
}
