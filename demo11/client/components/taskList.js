import React, { Component, PropTypes } from 'react'
import { findDOMNode } from 'react-dom'
import {
  Button,
  ButtonToolbar,
  FormGroup,
  InputGroup,
  FormControl
} from 'react-bootstrap'
import Task from '../containers/task'

export default class TaskListComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      title: ''
    }
  }
  componentDidMount() {
    this.computation = this.props.subscribe()
  }
  componentWillUnmount() {
    this.computation.stop()
  }
  handleAddTask(e) {
    e.preventDefault()
    const node = findDOMNode(this.refs.taskInput)
    const text = findDOMNode(this.refs.textarea)
    if (node.value === '' || text.value === '') return
    const task = {text: this.state.title, blog: this.state.text}
    this.props.addTask(task)
    this.setState({title: '', text: ''})
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
        <FormGroup>
          <InputGroup>
            <FormControl type='text' ref='taskInput' value={this.state.text} onChange={(e) => this.setState({text: e.target.value})}/>
            <textarea ref='textarea' value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
            <InputGroup.Button>
              <Button bsStyle='info' onClick={this.handleAddTask.bind(this)}>
                Add Task
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
        <ul>
          {this.renderTasks()}
        </ul>
      </div>
    )
  }
}

TaskListComponent.propTypes = {
  tasks: PropTypes.array,
}
