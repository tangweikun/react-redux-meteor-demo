import React, { findDOMNode, Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import * as action from '../actions/'

export default class App extends Component {
  getInitialState() {
    return {
      items: store.getState()
    }
  }
  componentDidMount() {
    let unsubscribe = store.subscribe(this.onChange)
  }
  onChange() {
    this.setState({
      items: store.getState()
    })
  }
  handleAdd() {
    let input = ReactDOM.findDOMNode(this.refs.todo)
    let value = input.value.trim()
    if (value) {
      store.dispatch(addTodoActions(value))
    }
    input.value = ''
  }
  render() {
    return (
      <div>
        <input
          type='text'
          placeholder='输入todo项'
          style={{marginRight: '10px'}}
          ref='todo'
        />
      <ul>
        {this.state.items.map(function(item) {
          return <li>{item.text}</li>
        })}
      </ul>
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
