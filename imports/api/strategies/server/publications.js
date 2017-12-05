import { Meteor } from 'meteor/meteor';

import { Strategies } from '../strategies.js';

Meteor.publish('strategies', function strategiesPublication() {
    return Strategies.find({});
});