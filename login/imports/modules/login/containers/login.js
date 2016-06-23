import Component from '../components/login'
import { connect } from 'react-redux'
import { login } from '../actions/user'
import { ERROR_MESSAGE } from '../constants'

const mapStateToProps = (state) => {
  return ({
    message: state.user.ERROR_MESSAGE
  })
}
const mapDispatch = (dispatch, getState) => {
  return {
    login: (username,password) => dispatch(login(username, password))
  }
}

export default connect(mapStateToProps, mapDispatch)(Component)
