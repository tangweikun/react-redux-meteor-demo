import React, { Component } from 'react'

export default class TaskComponent extends Component {
  render() {
    const {text, _id} = this.props.task
    return (
      <li>
        {text}
      </li>
    )
  }
}
