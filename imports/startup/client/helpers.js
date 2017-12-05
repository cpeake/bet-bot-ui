import { Markets } from '../../../imports/api/markets/markets.js';
import { Runners } from '../../../imports/api/runners/runners.js';

import { accounting } from 'meteor/iain:accounting'

Template.registerHelper('formatMoneyPounds', function(money) {
    return accounting.formatMoney(money, "£ ", 0);
});

Template.registerHelper('formatMoney', function(money) {
    return accounting.formatMoney(money, "£ ", 2);
});

Template.registerHelper('formatOrderType', function(orderType) {
    switch(orderType) {
        case 'MARKET_ON_CLOSE':
            return 'SP';
        case 'LIMIT_ON_CLOSE':
            return 'Limit SP';
        case 'LIMIT':
            return 'Limit';
        default:
            return orderType;
    }
});

Template.registerHelper('formatSide', function(side) {
    switch(side) {
        case 'BACK':
            return 'Back';
        case 'LAY':
            return 'Lay';
        default:
            return side;
    }
});

Template.registerHelper('formatOutcome', function(outcome) {
    switch(outcome) {
        case 'WON':
            return 'Won';
        case 'LOST':
            return 'Lost';
        default:
            return outcome;
    }
});

Template.registerHelper('formatMarket', function(marketId) {
    let market = Markets.findOne({marketId: marketId});
    if (market) return market.event.venue + " " + market.marketName;
    return marketId;
});

Template.registerHelper('formatRunner', function(selectionId) {
    let runner = Runners.findOne({selectionId: selectionId});
    if (runner) return runner.runnerName;
    return selectionId;
});

Template.registerHelper('formatPrice', function(price) {
   return parseFloat(price).toFixed(2);
});

Template.registerHelper('formatTime', function(date) {
    return moment(date).format('HH:mm');
});

Template.registerHelper('formatOrderStatus', function(orderStatus) {
    switch(orderStatus) {
        case 'PENDING':
            return 'Pending';
        case 'EXECUTION_COMPLETE':
            return 'Executed';
        case 'EXECUTABLE':
            return 'Executable';
        case 'EXPIRED':
            return 'Expired';
        default:
            return orderType;
    }
});