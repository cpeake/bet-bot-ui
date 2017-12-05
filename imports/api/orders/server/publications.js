import { Meteor } from 'meteor/meteor';

import { Orders } from '../orders.js';

// This code only runs on the server
Meteor.publish('orders.live', function ordersLivePublication() {
    return Orders.find(
        {
            'profit': {'$exists': false}
        },
        { sort: { placedDate: 1 } }
    );
});

Meteor.publish('orders.settled', function ordersSettledPublication() {
    let yesterdaySod = new Date();
    yesterdaySod.setHours(0, 0, 0, 0);
    yesterdaySod.setDate(yesterdaySod.getDate() - 1);
    return Orders.find (
        {
            'profit': {'$exists': true},
            'settledDate': {'$gt': yesterdaySod}
        },
        { sort: {settledDate: -1 }}
    );
});