const change = (state, action) => {
  if (action.type === 'change') {
    return {
      value: action.value,
      reducers: 'reducers>>',
      actiontry1: action.actiontry1,
     }
  }
  if (action.type === 'twk') {
    return {
      value: action.value + 'twk',
      actiontry2: action.actiontry2,
    }
  }
  return {
    value: 'default',
    actiontry1: 'default>>>',
    defaultProps: action.actiontry2,
   }
}

export default change
