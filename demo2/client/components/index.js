import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { increaseAction, decreaseAction } from '../actions'

class Counter extends Component {
  render() {
    const { value, onIncreaseClick, onDecreaseClick } = this.props
    return (
      <div>
        <p>{value}</p>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Decrease</button>
      </div>
    )
  }
}

mapStateToProps = (state) => {
  return {
    value: state.count,
  }
}

mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction),
    onDecreaseClick: () => dispatch(decreaseAction),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
