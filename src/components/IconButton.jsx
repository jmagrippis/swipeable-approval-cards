import React, { PropTypes } from 'react'
import { css } from 'aphrodite'

import styles from '../resources/styles'

const IconButton = ({ iconName, onClick, className }) => (
  <i className={'material-icons ' + className + ' ' + css(styles.cPointer)} onClick={onClick}>{iconName}</i>
)

IconButton.propTypes = {
  iconName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string
}

export default IconButton
