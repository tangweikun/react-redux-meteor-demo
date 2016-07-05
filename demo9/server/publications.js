import { Meteor } from 'meteor/meteor'
import { Todos } from '../lib/collections'

export default function () {
  Meteor.publish('allTodos', function() {
    return Todos.find({})
  })
}
