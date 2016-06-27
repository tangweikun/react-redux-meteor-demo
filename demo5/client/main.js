import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import todoApp from './reducers'
import App from './components/App'

let store = createStore(todoApp)  //from reducers

$(document).ready(function() {
  render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root')
  )
})
