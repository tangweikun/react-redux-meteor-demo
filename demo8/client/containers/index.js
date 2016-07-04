import { connect } from 'react-redux'
import { increaseAction, decreaseAction, change } from '../actions'
import Counter from '../components'

const mapStateToProps = (state) => {
  return {
    count: state.counter.count,
    value: state.change.value,
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
