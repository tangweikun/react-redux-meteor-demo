import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Task from './task'

export default class TaskListComponent extends Component {
  componentDidMount() {
    this.computation = this.props.subscribe()
  }
  componentWillUnmount() {
    this.computation.stop()
  }
  handleAddTask(e) {
    e.preventDefault()
    const node = findDOMNode(this.refs.taskInput)
    if (node.value === '') return
    const task = {text: node.value}
    this.props.addTask(task)
    node.value = null
  }
  renderTasks() {
    return (this.props.tasks || []).map((task) => (
      <Task key={task._id} task={task} />
    ))
  }
  render() {
    return (
      <div className='container'>
        <header>
          <h1>Todo List ({(this.props.tasks || []).length})</h1>
        </header>
        <div>
          <input type='text' ref='taskInput' />
          <button onClick={this.handleAddTask.bind(this)}>Add Task</button>
        </div>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    )
  }
}
