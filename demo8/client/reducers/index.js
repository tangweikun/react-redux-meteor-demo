import { combineReducers } from 'redux'
import change from './change'
import counter from './counter'
import login from './login'

const reducers = combineReducers({
  change,
  counter,
  login,
})

export default reducers
