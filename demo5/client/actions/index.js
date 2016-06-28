export const addTask = (task) => {
  return (dispatch, getState, { Meteor }) => {
    Meteor.call('addTask', task, (err, res) => {
      if (err) {
        return console.error(err)
      }
    })
  }
}

export const subscribe = () => {
  return (dispatch, getState, { Meteor, Tracker, Collection }) => {
    let subs = Meteor.subscribe('allTodos')
    let computation = Tracker.autorun(() => {
      if (subs.ready()) {
        dispatch({
          type: 'UPDATE_TASK',
          tasks: Collections.Todos.find().fetch(),
        })
      }
    })
    return computation
  }
}
