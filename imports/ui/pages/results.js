import { Meteor } from 'meteor/meteor';

import './results.html';

Template.ResultsPage.onCreated(function resultsPageOnCreated() {
    this.autorun(() => {
        Meteor.call("getRaceResults", function(err, result) {
            Session.set("raceResults", result);
        });
    });
});

Template.ResultsPage.helpers({
    raceResults() {
        return Session.get("raceResults");
    },
    formatResult(won) {
        return won ? "Won" : "Lost"
    },
});