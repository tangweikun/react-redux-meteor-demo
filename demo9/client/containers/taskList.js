import React, { Component } from 'react'
import { connect } from 'react-redux'
import TaskListComponent from '../components/taskList'
import { subscribe, addTask } from '../actions'

const mapStateToProps = ({tasks, count}) => {
  return {
    tasks,
    count,
  }
}

const mapDispatchToProps = (dispatch, getState) => {
  return {
    subscribe: () => dispatch(subscribe()),
    addTask: (task) => dispatch(addTask(task)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskListComponent)
