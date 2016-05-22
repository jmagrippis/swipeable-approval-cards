import React, { Component } from 'react'
import { css } from 'aphrodite'
import { Map } from 'immutable'

import StackableCardList from '../components/StackableCardList'
import styles from '../resources/styles'

let cards = Map({
  15: {
    id: 15,
    name: 'Timmy Tester',
    avatar: 'assets/images/1/avatar.jpg',
    rating: 3.3
  },
  27: {
    id: 27,
    name: 'Elena Example',
    avatar: 'assets/images/2/avatar.jpg',
    rating: 4.2
  },
  40: {
    id: 40,
    name: 'Alex Average',
    avatar: 'assets/images/3/avatar.jpg',
    rating: 2.5
  }
})

class SwipeableApprovalCards extends Component {
  render () {
    return (
      <div className={css(styles.bgLighterGrey, styles.vh100, styles.pa1, styles.tc, styles.sansSerif, styles.black70)}>
        <h1 className={css(styles.fSubheadline, styles.mt3, styles.mb5)}>ROTA</h1>
        <StackableCardList cards={cards} />
      </div>
    )
  }
}

export default SwipeableApprovalCards
