import * as message from './error_message'
import { bindActionCreators } from 'redux'

export const login = (username, password) => {
  return (dispatch, getState, { Meteor, push }) => {
    const msg = bindActionCreators(message, dispatch)
    if (!username) {
      return msg.log('用户名必须填写')
    }
    if (!password) {
      return msg.log('密码必须填写')
    }
    msg.clear()

    // if (username === '111' && password = '111') {
    //   console.log("hello")
    // } else {
    //   msg.log('用户名或者密码错误')
    // }
  }
}
