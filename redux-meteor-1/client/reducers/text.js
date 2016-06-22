const text = (state, action) => {
  switch (action.type) {
    case 'TEXT':
      return {
        text: action.text
      }
    default:
      return state
  }
}

export default text
