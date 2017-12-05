import { Meteor } from 'meteor/meteor';

import { Instructions } from '../instructions.js';

// This code only runs on the server
Meteor.publish('instructions', function instructionsPublication() {
    let now = new Date();
    let pastTime = moment(now).subtract(5, 'minutes').toDate();
    return Instructions.find (
        {
            'placedDate': {'$gt': pastTime}
        },
        { sort: {placedDate: -1 }}
    );
});