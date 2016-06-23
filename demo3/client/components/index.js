import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { connect } from 'react-redux'
import { increaseAction, decreaseAction } from '../actions'

class Counter extends Component {
  render() {
    return (
      <div>
        Clicked: <span id="value">0</span> times
        <button id='increment'>+</button>
        <button id='decrement'}>-</button>
        <button id='incrementIfOdd'>Increment if odd</button>
        <button id='incrementAsync'>Increment async</button>
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
