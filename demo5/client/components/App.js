import React, { Component } from 'react'
import Footer from './Footer.js'
import AddTodo from '../containers/AddTodo.js'
import Counter2 from '../containers/Counter.js'
import VisibleTodoList from '../containers/VisibleTodoList'

// const App = () => (
//   <div>
//     <AddTodo />
//     <VisibleTodoList />
//     <Footer />
//   </div>
// )

class App extends Component {
  render() {
    return (
      <div>
        <Counter2 />
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    )
  }
}

export default App
