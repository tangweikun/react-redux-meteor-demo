export const reducer = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: action.tasks
      }
  }
  return state
}
