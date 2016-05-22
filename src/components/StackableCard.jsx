import React, { PropTypes } from 'react'
import { css } from 'aphrodite'
import Hammer from 'react-hammerjs'

import StarRating from './StarRating'
import styles from '../resources/styles'

const articleClasses = css(styles.mw6, styles.center, styles.bgWhite, styles.br3, styles.mv3,
  styles.pa1, styles.pa2Ns, styles.ba, styles.bBlack10, styles.shadow1Black5, styles.cPointer)

const renderStackableCard = ({ avatar, name, rating }) => (
  <article className={articleClasses}>
    <img
      className={css(styles.mw100)}
      src={avatar}
      title={'Profile pic of ' + name}
      alt={'Profile pic of ' + name}
    />
    <h3 className={css(styles.f2)}>{name}</h3>
    <StarRating
      rating={rating}
      max={5}
      look={css(styles.orangeyYellow, styles.f2, styles.ph2)}
      className={css(styles.mb3)}
    />
  </article>
)

const renderSwipeableStackableCard = ({ avatar, name, rating, onSwipeRight, onSwipeLeft }) => (
  <Hammer onSwipe={(event) => { event.overallVelocityX > 0 ? onSwipeRight() : onSwipeLeft() }}>
    {renderStackableCard({ avatar, name, rating })}
  </Hammer>
)

const StackableCard = ({ avatar, name, rating, swipeable, onSwipeRight, onSwipeLeft }) => (
  swipeable ? renderSwipeableStackableCard({ avatar, name, rating, onSwipeRight, onSwipeLeft }) : renderStackableCard({ avatar, name, rating })
)

StackableCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number,
  swipeable: PropTypes.bool,
  onSwipeRight: PropTypes.func
}

export default StackableCard
