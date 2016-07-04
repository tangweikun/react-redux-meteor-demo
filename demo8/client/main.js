import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reducers from './reducers'
import App from './containers'

let store = createStore(reducers)  //from reducers

$(document).ready(function() {
  render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root')
  )
})
