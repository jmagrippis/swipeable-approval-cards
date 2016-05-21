import React, { PropTypes } from 'react'
import { css } from 'aphrodite'

import styles from '../resources/styles'

const articleClasses = css(styles.mw6, styles.center, styles.bgWhite, styles.br3, styles.mv3, styles.pa1, styles.pa2Ns, styles.ba, styles.bBlack10)

const StackableCard = ({ avatar, name, rating }) => (
  <article className={articleClasses}>
    <img
      className={css(styles.mw100)}
      src={avatar}
      title={'Profile pic of ' + name}
      alt={'Profile pic of ' + name}
    />
    <h3 className={css(styles.f2)}>{name}</h3>
    {rating ? <div>{rating}/5</div> : ''}
  </article>
)

StackableCard.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rating: PropTypes.number
}

export default StackableCard
