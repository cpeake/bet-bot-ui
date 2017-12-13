import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import to load these templates
import '../../ui/layouts/app-body.js';
import '../../ui/pages/dashboard.js';
import '../../ui/pages/charts.js';
import '../../ui/pages/results.js';

// Import to override accounts templates
// import '../../ui/accounts/accounts-templates.js';

FlowRouter.route('/', {
    name: 'App.home',
    action() {
        BlazeLayout.render('App_body', { main: 'DashboardPage' });
    },
});

FlowRouter.route('/charts', {
    name: 'Chart.home',
    action() {
        BlazeLayout.render('App_body', { main: 'ChartsPage' });
    },
});

FlowRouter.route('/results', {
    name: 'Chart.home',
    action() {
        BlazeLayout.render('App_body', { main: 'ResultsPage' });
    },
});