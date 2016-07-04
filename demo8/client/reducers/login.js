const login = (state = { username: '111', password: '111' }, action) => {
  switch (action.type) {
    case 'login':
      return {
        username: state.username,
        password: state.password,
      }
    default:
      return state
  }
}

export default login
