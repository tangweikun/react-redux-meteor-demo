import React, { findDOMNode, Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import * as action from '../actions/'

class App extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }
  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.propsValue} onChange={this.handleChange}
          ref='input'
        />
      <p>propsValue-->>>{this.props.value}</p>
      </div>
    )
  }
  handleChange() {
    const node = ReactDOM.findDOMNode(this.refs.input)
    const value = node.value.trim()
    this.props.change(value)
  }
}

export default App
