import React from 'react'
import { createStore } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import counter from './reducers'
import ComponentT from './containers'

let store = createStore(counter)  //from reducers
console.log(store.getState())
$(document).ready(function() {
  render(
    <Provider store={store}>
      <ComponentT />
    </Provider>, document.getElementById('root')
  )
})
