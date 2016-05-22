import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import '../node_modules/normalize.css/normalize.css'

import configureStore from './store/configureStore'
import Root from './layouts/Root'
import { fetchEmployees } from './reducers/employees'

const store = configureStore()

// Query our API to get our initial data!
store.dispatch(fetchEmployees())

render(
  <AppContainer>
    <Root store={store} />
  </AppContainer>,
  document.getElementById('approval-app')
)

if (module.hot) {
  module.hot.accept('./layouts/Root', () => {
    render(
      <AppContainer>
        <Root store={store} />
      </AppContainer>,
    document.getElementById('approval-app')
    )
  })
}
