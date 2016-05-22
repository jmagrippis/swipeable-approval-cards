import React, { Component } from 'react'
import { css } from 'aphrodite'
import { Map } from 'immutable'

import StackableCardList from '../components/StackableCardList'
import IconButton from '../components/IconButton'
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
      <div className={css(styles.bgLighterGrey, styles.vh100, styles.pa1, styles.tc, styles.sansSerif, styles.black70, styles.flexc, styles.flexCol, styles.flexAC)}>
        <h1 className={css(styles.fSubheadline, styles.mt3, styles.mb5)}>ROTA</h1>
        <div className={css(styles.mw6, styles.w100)}>
          <StackableCardList cards={cards} />
          <div className={css(styles.flexc, styles.flexSA, styles.mb4)}>
            <IconButton iconName={'close'} className={css(styles.f1, styles.cblack60Warning, styles.pa1, styles.ba1, styles.br100)} onClick={() => { console.log('nope!') }} />
            <IconButton iconName={'check'} className={css(styles.f1, styles.cblack60OrangeyYellow, styles.pa1, styles.ba1, styles.br100)} onClick={() => { console.log('yep!') }} />
          </div>
        </div>
      </div>
    )
  }
}

export default SwipeableApprovalCards
