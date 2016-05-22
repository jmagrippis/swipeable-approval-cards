var path = require('path')

module.exports = {
  description() {
    return 'Generates a Redux reducer, that also exports its actions and constants'
  },
  fileMapTokens() {
    return {
      __reducer__: (options) => {
        return path.join(options.settings.getSetting('sourceBase'), '/', options.settings.getSetting('reducerPath'))
      }
    }
  }
}
