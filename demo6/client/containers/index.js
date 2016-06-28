import { connect } from 'react-redux'
import { increaseAction, decreaseAction } from '../actions'
import Counter from '../components/'
const mapStateToProps = (state) => {
  return {
    value: state.count,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
