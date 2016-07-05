import React from 'react'
import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Tracker } from 'meteor/tracker'
import thunk from 'redux-thunk'
import Collections from '../lib/collections'
import { reducer } from '../client/reducers'
import TaskList from './containers/taskList'

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ Meteor, Tracker, Collections })),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

$(document).ready(function() {
  render(
    <Provider store={store}>
      <TaskList />
    </Provider>, document.getElementById('root')
  )
})
