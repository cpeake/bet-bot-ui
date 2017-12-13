import { Meteor } from 'meteor/meteor';

import { Orders } from '../../orders/orders.js';

Meteor.methods({
    "getPortfolioPnlSeries" : function() {
        return Orders.aggregate(
            [
                {$match: {profit: {$exists: true}}},
                {$project: {date: {$dateToString: {format: "%d-%m-%Y", date: "$settledDate"}}}},
                {$group: {_id: '$date', 'pnl': {$sum: '$profit'}}}
            ]
        );
    }
});