module.exports = {
  description() {
    return 'Generates a stateless (dumb / pure) component'
  },
  fileMapTokens() {
    return {
      __smart__: (options) => {
        return options.settings.getSetting('smartPath')
      }
    }
  }
}
