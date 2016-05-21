import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import '../node_modules/normalize.css/normalize.css'

import configureStore from './store/configureStore'
import Root from './layouts/Root'

const store = configureStore()

render(
  <AppContainer
    component={Root}
    props={{ store }}
  />,
  document.getElementById('approval-app')
)

if (module.hot) {
  module.hot.accept('./layouts/Root', () => {
    render(
      <AppContainer
        component={require('./layouts/Root').default}
        props={{ store }}
      />,
    document.getElementById('approval-app')
    )
  })
}
