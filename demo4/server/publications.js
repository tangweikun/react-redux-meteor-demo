import { Meteor } from 'meteor/meteor'
import Messages from '../lib/messages'

Meteor.publish('message', function() {
  return Messages.find({})
})
