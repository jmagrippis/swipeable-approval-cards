import React, { PropTypes } from 'react'
import { css } from 'aphrodite'

import StackableCard from './StackableCard'
import styles from '../resources/styles'

const depthStyles = (position, depth) => {
  let styles = {
    zIndex: (1 + depth - position)
  }
  if (position > 0) {
    styles.transform = 'scale(' + (1 - 0.025 * position) + ')'
    styles.top = (1.5 * position) + 'rem'
  }
  return styles
}

const StackableCardList = ({ cards }) => {
  let i = -1
  return (
    <ul className={css(styles.relative, styles.list, styles.pl0, styles.mw6, styles.center)}>
      {cards.map((card, id) => {
        i++
        return (
          <li key={id} className={css(styles.absolute)} style={depthStyles(i, cards.size)}>
            <StackableCard {...card} />
          </li>
        )
      }).toArray()}
    </ul>
  )
}

StackableCardList.propTypes = {
  cards: PropTypes.object.isRequired
}

export default StackableCardList
