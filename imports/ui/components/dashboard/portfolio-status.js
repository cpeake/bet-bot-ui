import {Statistics} from "../../../api/statistics/statistics";

import "./portfolio-status.html";

Template.PortfolioStatusPanel.onCreated(function portfolioStatusPanelOnCreated() {
    this.autorun(() => {
        this.subscribe('statistics');
        this.subscribe('strategies'); // For rendering of strategy name.
    });
});

Template.PortfolioStatusPanel.helpers({
    statistics() {
        return Statistics.find({strategyRef: {$ne: "TOTALS"}});
    },
    totals() {
        return Statistics.find({strategyRef: "TOTALS"});
    },
});
