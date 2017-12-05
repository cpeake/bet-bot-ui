import {Markets} from "../../../api/markets/markets";

import "./markets.html";

Template.MarketsPanel.onCreated(function marketsPanelOnCreated() {
    this.autorun(() => {
        this.subscribe('markets.future');
    });
});

Template.MarketsPanel.helpers({
    markets() {
        return Markets.find(
            {
                played: {$exists: false},
                marketStartTime: {$gt: new Date()}
            },
            {
                sort: { marketStartTime: 1 },
            }
        );
    },
});

Template.Market.helpers({
    formatMarketStartTime(date) {
        return moment(date).format('DD/MM @ HH:mm');
    },
});