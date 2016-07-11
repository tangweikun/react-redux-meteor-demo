import { Meteor } from 'meteor/meteor'
import { Todos } from '../lib/collection'

export default function () {
  Meteor.publish('allTodos', function() {
    return Todos.find({})
  })
}
