module.exports = {
  description() {
    return 'Generates a stateless (dumb / pure) component'
  },
  fileMapTokens() {
    return {
      __dumb__: (options) => {
        return options.settings.getSetting('dumbPath')
      }
    }
  }
}
