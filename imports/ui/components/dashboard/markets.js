import {Markets} from "../../../api/markets/markets";

import "./markets.html";

Template.MarketsPanel.onCreated(function marketsPanelOnCreated() {
    this.autorun(() => {
        this.subscribe('markets.future');
    });
});

Template.MarketsPanel.helpers({
    markets() {
        return Markets.find();
    },
});

Template.Market.helpers({
    formatMarketStartTime(date) {
        return moment(date).format('DD-MMM @ HH:mm');
    },
});