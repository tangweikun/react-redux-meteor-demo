// import { combineReducers } from 'redux'
const counter = (state = { count: 5 }, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return {
        count: count + 2,
      }
    case 'decrease':
      return {
        count: count -5,
      }
    default:
      return state
  }
}
// const todoApp = combineReducers({
//   counter,
// })

// export default todoApp
export default counter
