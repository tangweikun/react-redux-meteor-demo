import { ERROR_MESSAGE, ERROR_MESSAGE_SEND, ERROR_MESSAGE_CLEAR } from '../contants'

const initialState = {
  ERROR_MESSAGE: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR_MESSAGE_SEND:
      let { ERROR_MESSAGE } = action
      return {
        ...state,
        ERROR_MESSAGE
      }
    case ERROR_MESSAGE_CLEAR:
      return {
        ...state,
        ERROR_MESSAGE: null
      }
    default:
      return {
        ...state
      }
  }
}
