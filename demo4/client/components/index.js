import React, { findDOMNode, Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import * as action from '../actions/'

class App extends Component {
  render() {
    return (
      <div>
        <input
          type='text'
          value={this.props.propsValue} onChange={this.changeHandle.bind(this)}
          ref='input'
        />
      <p>propsValue-->>>{this.props.propsValue}</p>
      <p>reducersValue-->>>{this.props.reducersValue}</p>
      <p>actiontry1Value-->>>{this.props.actiontry1Value}</p>
      <p>actiontry2Value-->>>{this.props.actiontry2Value}</p>
      <p>twk-->>>{this.props.twk}</p>
      <p>v2-->>>{this.props.v2}</p>
      </div>
    )
  }
  changeHandle() {
    const node = ReactDOM.findDOMNode(this.refs.input)
    const value = node.value.trim()
    this.props.change(value)
  }
}

mapStateToProps = (state) => {
  return {
    propsValue: state.value,
    reducersValue: state.reducers,
    actiontry1Value: state.actiontry1,
    actiontry2Value: state.actiontry2,
    twk: 't11t',
    v2: state.v2,
  }
}

export default connect(mapStateToProps, action)(App)
