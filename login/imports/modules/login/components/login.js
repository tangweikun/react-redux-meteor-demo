import React, { PropTypes, Component } from 'react'
import { findDOMNode } from 'react-dom'
import { FormGroup, FormControl, Pager, Button } from 'react-bootstrap'

const styles = {
  root: {
    paddingLeft: '15px',
    paddingRight: '15px',
    paddingTop: '40px',
    paddingBottom: '40px',
    marginLeft: 'auto',
    marginRight: 'auto',
    minHeight: '100vh',
    backgroundColor: '#eee',
  },
  buttonLable: {
    color: 'white',
  },
  head: {
    textAlign: 'center',
  },
  message: {
    textAlign: 'center',
    height: '20px',
    color: red500,
    opacity: 1,
    transition: 'all 100ms ease-in',
  },
  button: {
    paddintLeft: '30px',
    paddintRight: '30px',
  },
}

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this)
  }

  render() {
    let { message } = this.props
    let error = !message
    return (
      <form style={styles.root}>
        <FormGroup>
          <h2 style={styles.head}>请登录</h2>
        </FormGroup>
        <FormGroup>
          <p style={styles.message}>{ message }</p>
          <FormControl
            type='text'
            placeholder='用户名'
            ref='username'
          />
        </FormGroup>
        <FormGroup>
          <FormControl
            type='password'
            placeholder='密码'
            ref='password'
          />
        </FormGroup>
        <Pager>
          <Button
            bsSize='large'
            bsStyle='primary'
            onClick={this.login}
            block
          >
            登录
          </Button>
        </Pager>
      </form>
    )
  }

  login(e) {
    e.preventDefault()
    const { login } = this.props
    const { username, password } = this.refs
    const u = findDOMNode(username).value
    const p = findDOMNode(password).value
    login( u, p )
  }
}
