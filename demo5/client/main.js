import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import ReducerT from './reducers'
import ComponentT from './containers'

let store = createStore(ReducerT)  //from reducers

$(document).ready(function() {
  render(
    <Provider store={store}>
      <ComponentT />
    </Provider>, document.getElementById('root')
  )
})
