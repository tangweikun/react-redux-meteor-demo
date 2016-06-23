const counter = (state, action) => {
  if (typeof state === 'undefined') {
    return 100
  }
  switch (action.type) {
    case 'increase':
      return {
        state + 101,
      }
    case 'decrease':
      return {
        state - 11,
      }
    default:
      return state
  }
}

export default counter
