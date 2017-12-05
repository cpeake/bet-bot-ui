import {Funds} from "../../api/funds/funds";

import './app-body.html';

Template.App_body.onCreated(function appBodyOnCreated() {
    this.autorun(() => {
        this.subscribe('funds');
    });
});

Template.App_body.helpers({
    funds() {
        return Funds.findOne({wallet: 'UK'});
    },
});