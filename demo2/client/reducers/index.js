const counter = (state = { count: 5 }, action) => {
  const count = state.count
  switch (action.type) {
    case 'increase':
      return {
        count: count + 2,
      }
    default:
      return state
  }
}

export default counter
