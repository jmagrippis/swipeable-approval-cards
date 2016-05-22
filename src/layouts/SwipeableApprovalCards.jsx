import React, { Component } from 'react'
import { css } from 'aphrodite'

import StackableCard from '../components/StackableCard'
import styles from '../resources/styles'

let employee = {
  name: 'Timmy Tester',
  avatar: 'assets/images/1/avatar.jpg',
  rating: 3.3
}
class SwipeableApprovalCards extends Component {
  render () {
    return (
      <div className={css(styles.bgLighterGrey, styles.vh100, styles.pa1, styles.tc, styles.sansSerif, styles.black70)}>
        <h1 className={css(styles.fSubheadline, styles.mt3, styles.mb5)}>ROTA</h1>
        <StackableCard {...employee} />
      </div>
    )
  }
}

export default SwipeableApprovalCards
