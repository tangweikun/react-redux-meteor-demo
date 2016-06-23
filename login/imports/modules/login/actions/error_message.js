import { ERROR_MESSAGE, ERROR_MESSAGE_SEND, ERROR_MESSAGE_CLEAR } from '../constants'

export const log = (message) => {
  return {
    type: ERROR_MESSAGE_SEND,
    ERROR_MESSAGE: message,
  }
}

export const clear = (message) => {
  return {
    type: ERROR_MESSAGE_CLEAR,
  }
}
