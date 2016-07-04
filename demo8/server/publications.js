import { Meteor } from 'meteor/meteor'
import { Todos } from '../lib/collection'

export default function () {
  Meteor.publish('addTodos', function() {
    return Todos.find({})
  })
}
