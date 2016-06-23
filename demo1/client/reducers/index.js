const change = (state, action) => {
  if (action.type === 'change') {
    return { value: action.value }
  }
  return { value: 'default' }
}

export default change
