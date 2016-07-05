import { Meteor } from 'meteor/meteor'
import { Todos } from '../lib/collections'

export default function () {
  Meteor.methods({
    'addTask': (task) => {
      Todos.insert(task)
    }
  })
}
