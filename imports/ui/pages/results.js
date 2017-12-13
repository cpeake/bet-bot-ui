import { Meteor } from 'meteor/meteor';

import './results.html';

Template.ResultsPage.onCreated(function resultsPageOnCreated() {
    this.autorun(() => {
        Meteor.call("getRaceResults", function(err, result) {
            console.log(result);
            Session.set("raceResults", result);
        });
    });
});

Template.ResultsPage.helpers({
    raceResults() {
        if (Session) {
            console.log(Session);
            console.log(Session.get("raceResults"));
            Session.get("raceResults");
        }
    },
});