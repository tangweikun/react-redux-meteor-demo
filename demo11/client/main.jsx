import React from 'react'
import { Meteor } from 'meteor/meteor'
import { Tracker } from 'meteor/tracker'
import { render } from 'react-dom'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { reducer } from '../client/reducers'
import App from './containers'
import Collections from '../lib/collection'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ Meteor, Tracker, Collections })),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

Meteor.startup(() => {
  render((
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('root'))
})
