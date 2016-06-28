import { connect } from 'react-redux'
import { increaseAction, decreaseAction } from '../actions'
import Counter from '../components/Counter'

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

Counter2 = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)

export default Counter2

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
