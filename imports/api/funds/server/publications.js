import { Meteor } from 'meteor/meteor';

import { Funds } from '../funds.js';

Meteor.publish('funds', function fundsPublication() {
    return Funds.find();
});