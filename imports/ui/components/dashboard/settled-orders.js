import {Orders} from "../../../api/orders/orders";

import "./settled-orders.html";

Template.SettledOrderPanel.onCreated(function settledOrderPanelOnCreated() {
    this.autorun(() => {
        this.subscribe('orders.settled');
        this.subscribe('markets.played'); // Render market names on settled orders.
        this.subscribe('runners'); // Render runner names on settled orders.
    });
});

Template.SettledOrderPanel.helpers({
    settledOrders() {
        let sod = new Date();
        sod.setHours(0, 0, 0, 0);
        return Orders.find (
            {
                'profit': {'$exists': true},
                'settledDate': {'$gt': sod}
            },
            { sort: {settledDate: -1 }}
        );
    },
});