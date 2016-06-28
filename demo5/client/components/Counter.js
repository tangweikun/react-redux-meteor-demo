import React, { Component, PropTypes } from 'react'
import { increaseAction, decreaseAction } from '../actions'

export default class Counter extends Component {
  render() {
    const { value, onIncreaseClick, onDecreaseClick } = this.props
    return (
      <div>
        <p>{value}44</p>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>Descrease</button>
      </div>
    )
  }
}
