import { StyleSheet } from 'aphrodite'

const orangeyYellow = '#F6A247'
const black60 = 'rgba( 0, 0, 0, .6 )'
const warning = '#FF5722'

const borderColours = {
  bBlack10: {
    borderColor: 'rgba( 0, 0, 0, .1 )'
  }
}

const borderRadius = {
  br3: {
    borderRadius: '.5rem'
  },
  br100: {
    borderRadius: '100%'
  }
}

const borders = {
  ba: {
    borderStyle: 'solid',
    borderWidth: '1px'
  },
  ba1: {
    borderStyle: 'solid',
    borderWidth: '0.25rem'
  }
}

const cursors = {
  cPointer: {
    cursor: 'pointer'
  }
}

const flexbox = {
  flexc: {
    display: 'flex'
  },
  flexCol: {
    flexDirection: 'column'
  },
  flexAC: {
    alignItems: 'center'
  },
  flexSA: {
    justifyContent: 'space-around'
  }
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

const hovers = {
  cblack60OrangeyYellow: {
    color: black60,
    transition: 'color .15s ease-in',
    ':hover': {
      color: orangeyYellow,
      transition: 'color .15s ease-in'
    }
  },
  cblack60Warning: {
    color: black60,
    transition: 'color .15s ease-in',
    ':hover': {
      color: warning,
      transition: 'color .15s ease-in'
    }
  }
}

const lists = {
  list: {
    listStyleType: 'none'
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

const positioning = {
  relative: {
    position: 'relative'
  },
  absolute: {
    position: 'absolute'
  }
}

const shadows = {
  shadow1Black5: {
    boxShadow: '0 .25rem .25rem .25rem rgba( 0, 0, 0, .05 )'
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
  },
  orangeyYellow: {
    color: orangeyYellow
  }
}

const spacing = {
  mv3: {
    marginTop: '1rem',
    marginBottom: '1rem'
  },
  mt0: {
    marginTop: 0
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
  mb4: {
    marginBottom: '2rem'
  },
  mb1: {
    marginBottom: '.25rem'
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
  ph2: {
    paddingLeft: '.5rem',
    paddingRight: '.5rem'
  },
  pl0: {
    paddingLeft: '0'
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
  f1: {
    fontSize: '3rem'
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

const widths = {
  w100: {
    width: '100%'
  }
}

const styles = StyleSheet.create(Object.assign(
  {},
  borderColours,
  borderRadius,
  borders,
  cursors,
  flexbox,
  fontFamilies,
  heights,
  hovers,
  lists,
  maxWidths,
  positioning,
  shadows,
  skins,
  spacing,
  textAlign,
  typeScale,
  utilities,
  widths
))

export default styles
