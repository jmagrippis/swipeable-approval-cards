import React, { Component } from 'react'
import { css } from 'aphrodite'

import ConnectedApproveUI from '../containers/ConnectedApproveUI'
import styles from '../resources/styles'

class SwipeableApprovalCards extends Component {
  render () {
    return (
      <div className={css(styles.bgLighterGrey, styles.vh100, styles.pa1, styles.tc, styles.sansSerif, styles.black70, styles.flexc, styles.flexCol, styles.flexAC)}>
        <h1 className={css(styles.fSubheadline, styles.mt3, styles.mb5)}>ROTA</h1>
        <div className={css(styles.mw6, styles.w100)}>
          <ConnectedApproveUI />
        </div>
      </div>
    )
  }
}

export default SwipeableApprovalCards
