import { combineReducers } from 'redux'
import change from './change'
import counter from './counter'

const reducers = combineReducers({
  change,
  counter,
})

export default reducers
