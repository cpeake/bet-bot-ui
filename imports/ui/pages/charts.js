import { Meteor } from 'meteor/meteor';

import './charts.html';

Template.ChartsPage.onCreated(function chartsPageOnCreated() {
    this.autorun(() => {
        Meteor.call("getPortfolioPnlSeries", function(err, result) {
            //console.log(result);
            //Session.set("portfolioPnlSeries", result);
        });
    });
});

Template.ChartsPage.helpers({
    portfolioPnlSeries() {
        //Session.get("portfolioPnlSeries")
    },
});

Template.ChartsPage.onRendered(function() {
    let ctx1 = document.getElementById("myChart1").getContext('2d');
    let ctx2 = document.getElementById("myChart2").getContext('2d');
    let config1 = {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            title: {
                display:true,
                text:'Chart.js Bar Chart'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    };
    let myChart1 = new Chart(ctx1, config1);
    let config2 = {
        type: 'line',
        data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [{
                label: "Unfilled",
                fill: false,
                backgroundColor: 'rgba(255,99,132,1)',
                borderColor: 'rgba(255,99,132,1)',
                data: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    4,
                    3
                ],
            },]
        },
        options: {
            responsive: true,
            title:{
                display:true,
                text:'Chart.js Line Chart'
            },
            tooltips: {
                mode: 'index',
                intersect: false,
            },
            hover: {
                mode: 'nearest',
                intersect: true
            },
            scales: {
                xAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month'
                    }
                }],
                yAxes: [{
                    display: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Value'
                    }
                }]
            }
        }
    };
    let myChart2 = new Chart(ctx2, config2);
});