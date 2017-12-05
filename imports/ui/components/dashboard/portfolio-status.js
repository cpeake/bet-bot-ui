import {Statistics} from "../../../api/statistics/statistics";

import "./portfolio-status.html";

Template.PortfolioStatusPanel.onCreated(function portfolioStatusPanelOnCreated() {
    this.autorun(() => {
        this.subscribe('statistics');
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
