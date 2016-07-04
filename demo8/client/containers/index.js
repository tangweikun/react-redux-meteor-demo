import { connect } from 'react-redux'
import { increaseAction, decreaseAction, change, login } from '../actions'
import Counter from '../components'

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    value: state.change.value,
    username: state.login.username,
    password: state.login.password,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction),
    change: (value) => dispatch(change(value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
