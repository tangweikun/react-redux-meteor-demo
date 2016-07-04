const change = (state = { value: 1 }, action) => {
  switch (action.type) {
    case 'change':
      return {
        value: action.value,
      }
    default:
      return state
  }
}

export default change
