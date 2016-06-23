import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import LoginLayout from '../imports/modules/login/containers/login'
import Reducer from '../imports/modules/login/reducers/index'

let store = createStore(Reducer)

$(document).ready(function() {
  render(
    <Provider store={store}>
      <LoginLayout />
    </Provider>, document.getElementbyId('root')
  )
})
