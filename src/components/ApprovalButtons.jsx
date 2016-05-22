import React, { PropTypes } from 'react'
import { css } from 'aphrodite'

import IconButton from '../components/IconButton'
import styles from '../resources/styles'

const ApprovalButtons = ({ accept, reject }) => (
  <div className={css(styles.flexc, styles.flexSA, styles.mb4)}>
    <IconButton
      iconName={'close'}
      className={css(styles.f1, styles.cblack60Warning, styles.pa1, styles.ba1, styles.br100)}
      onClick={reject}
    />
    <IconButton
      iconName={'check'}
      className={css(styles.f1, styles.cblack60OrangeyYellow, styles.pa1, styles.ba1, styles.br100)}
      onClick={accept}
    />
  </div>
)

ApprovalButtons.propTypes = {
  accept: PropTypes.func.isRequired,
  reject: PropTypes.func.isRequired
}

export default ApprovalButtons
