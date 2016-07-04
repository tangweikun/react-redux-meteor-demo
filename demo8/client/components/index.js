import React, { Component, findDOMNode } from 'react'
import ReactDOM from 'react-dom'

class Counter extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this)
  }
  render() {
    const { password, count, value, onIncreaseClick, onDecreaseClick } = this.props
    return (
      <div>
        <p>{count}</p>
        <p>{value}</p>
        <div>
          <label>用户名</label>
          <input
            type='text'
            value={this.props.value}
            onChange={this.handleChange}
            ref='input'
          />
        </div>
        <div>
          <label>密码</label>
          <input
            type='password'
            ref='password'
          />
        </div>
        <button onClick={this.login}>LOGIN</button>
        <br />
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
  login() {
    const username = ReactDOM.findDOMNode(this.refs.input).value
    const password = ReactDOM.findDOMNode(this.refs.password).value
    if (username === this.props.username && password === this.props.password) {
      console.log("success")
      ReactDOM.findDOMNode(this.refs.input).value = ''
    } else {
      console.log("failed")
    }
  }
}

export default Counter
