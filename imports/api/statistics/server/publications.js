import { Meteor } from 'meteor/meteor';

import { Statistics } from '../statistics.js';

Meteor.publish('statistics', function statisticsPublication() {
    return Statistics.find({});
});