import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import TaskComponent from '../components/task'
import { removeTask } from '../actions'

const mapStateToProps = () => ({})
const mapDispatchToProps = (dispatch, getState) => {
  return {
    removeTask: (taskId) => dispatch(removeTask(taskId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskComponent)
