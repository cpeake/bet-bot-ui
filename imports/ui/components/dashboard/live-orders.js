import {Orders} from "../../../api/orders/orders";

import "./live-orders.html";

Template.LiveOrderPanel.onCreated(function liveOrderPanelOnCreated() {
    this.autorun(() => {
        this.subscribe('orders.live');
    });
});

Template.LiveOrderPanel.helpers({
    liveOrders() {
        return Orders.find(
            {
                'profit': {'$exists': false}
            },
            { sort: { placedDate: 1 } }
        );
    },
});
