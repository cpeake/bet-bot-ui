import { Meteor } from 'meteor/meteor';

import { Runners } from '../runners.js';

Meteor.publish('runners', function runnersPublication() {
    return Runners.find({});
});