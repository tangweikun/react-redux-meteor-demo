import React, { Component, findDOMNode } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    const { count, value, onIncreaseClick, onDecreaseClick } = this.props
    console.log(this.props.onIncreaseClick);

    return (
      <div>
        <p>{count}</p>
        <p>{value}</p>
        <div>
          <input
            type='text'
            value={this.props.value}
            onChange={this.handleChange}
            ref='input'
          />
        </div>
        <button onClick={onIncreaseClick}>Increase</button>
        <button onClick={onDecreaseClick}>decrease</button>
      </div>
    )
  }
  handleChange() {
    const node = ReactDOM.findDOMNode(this.refs.input)
    const value = node.value.trim()
    this.props.change(value)
  }
}

export default Counter
