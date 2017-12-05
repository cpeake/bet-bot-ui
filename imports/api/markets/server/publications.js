import { Meteor } from 'meteor/meteor';

import { Markets } from '../markets.js';

Meteor.publish('markets.future', function marketsFuturePublication() {
    let sod = new Date();
    sod.setHours(0, 0, 0, 0);
    return Markets.find(
        {
            played: {$exists: false},
            marketStartTime: {$gt: new Date()}
        },
        {
            sort: { marketStartTime: 1 },
        }
    );
});

Meteor.publish('markets.played', function marketsPlayedPublication() {
    let sod = new Date();
    sod.setHours(0, 0, 0, 0);
    return Markets.find(
        {
            marketStartTime: {$gt: sod}
        },
        {
            sort: { marketStartTime: 1 },
        }
    )
});