import { Meteor } from 'meteor/meteor';

import { RunnerBooks } from '../../runner-books/runner-books.js';

Meteor.methods({
    "getRaceResults" : function() {
        return RunnerBooks.aggregate(
            [
                {$match: {status: "OPEN"}},
                {$project: {marketId: 1, selectionId: "$runners.selectionId", lastPriceTraded: "$runners.lastPriceTraded"}},
                {$group: {_id: "$marketId", selectionId: {$first: "$selectionId"}, lastPriceTraded: {$first: "$lastPriceTraded"}}},
                {$lookup: {from: "markets", localField: "_id", foreignField: "marketId", as: "market"}},
                {$lookup: {from: "runners", localField: "selectionId", foreignField: "selectionId", as: "runner"}},
                {$lookup: {from: "winners", localField: "_id", foreignField: "marketId", as: "winner"}},
                {$addFields: {"won": {$eq: ["$selectionId", "$winner.selectionId"]}}},
                {$unwind: "$market"},
                {$unwind: "$selectionId"},
                {$unwind: "$lastPriceTraded"},
                {$unwind: "$runner"},
                {$unwind: "$winner"},
                {$project: {_id: false, marketId: "$_id", marketStartTime: "$market.marketStartTime", venue: "$market.event.venue", marketName: "$market.marketName", selectionId: "$selectionId", runnerName: "$runner.runnerName", price: "$lastPriceTraded", won: "$won"}},
                {$sort: {marketStartTime : -1}}
            ]
        );
    }
});