import { StyleSheet } from 'aphrodite'

const borderColours = {
  bBlack10: {
    borderColor: 'rgba( 0, 0, 0, .1 )'
  }
}

const borderRadius = {
  br3: {
    borderRadius: '.5rem'
  }
}

const borders = {
  borderStyle: 'solid',
  borderWidth: '1px'
}

const fontFamilies = {
  sansSerif: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "avenir next", avenir, helvetica, "helvetica neue", ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
  }
}

const heights = {
  h100: {
    minHeight: '100%'
  },
  vh100: {
    minHeight: '100vh'
  }
}

const maxWidths = {
  mw6: {
    maxWidth: '32rem'
  },
  mw100: {
    maxWidth: '100%'
  }
}

const skins = {
  bgWhite: {
    backgroundColor: '#fff'
  },
  bgLighterGrey: {
    backgroundColor: '#f3f3f3'
  },
  black70: {
    color: 'rgba(0, 0, 0, .7)'
  }
}

const spacing = {
  mv3: {
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  mt1: {
    marginTop: '.25rem'
  },
  mt2: {
    marginTop: '.5rem'
  },
  mt3: {
    marginTop: '1rem'
  },
  mb3: {
    marginBottom: '1rem'
  },
  mb5: {
    marginBottom: '4rem'
  },
  pa1: {
    padding: '.25rem'
  },
  pa3: {
    padding: '1rem'
  },
  pt1: {
    paddingTop: '.25rem'
  },
  pb3: {
    paddingBottom: '1rem'
  },
  pa2Ns: {
    '@media screen and (min-width: 48em)': {
      padding: '.5rem'
    }
  },
  pa4Ns: {
    '@media screen and (min-width: 48em)': {
      padding: '2rem'
    }
  }
}

const textAlign = {
  tc: {
    textAlign: 'center'
  }
}

const typeScale = {
  fHeadline: {
    fontSize: '6rem'
  },
  fSubheadline: {
    fontSize: '5rem'
  },
  f2: {
    fontSize: '2.25rem'
  }
}

const utilities = {
  center: {
    marginRight: 'auto',
    marginLeft: 'auto'
  }
}

const styles = StyleSheet.create(Object.assign(
  {},
  borderColours,
  borderRadius,
  borders,
  fontFamilies,
  heights,
  maxWidths,
  skins,
  spacing,
  textAlign,
  typeScale,
  utilities
))

export default styles
