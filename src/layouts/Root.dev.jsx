import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'

import SwipeableApprovalCards from './SwipeableApprovalCards'
import DevTools from './DevTools'

export default class Root extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <div>
          <SwipeableApprovalCards />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

Root.propTypes = { store: PropTypes.object.isRequired }
