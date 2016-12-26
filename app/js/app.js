'use strict';

var bookingApp = angular.module('bookingApp', ['ngResource', 'ngRoute'])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider.when('/newBooking',
            {
                templateUrl: '/templates/NewBooking.html',
                controller: 'EditBookingController'
            });
        $routeProvider.when('/flightBooked',
            {
                templateUrl: '/templates/flightBooked.html',
                controller: 'bookingConfirmedController'
            });
        $routeProvider.when('/bookingCancelled',
            {
                templateUrl: '/templates/bookingCancel.html',
                controller: 'bookingCancelController'
            });
        $routeProvider.otherwise({redirectTo: '/newBooking'});
        $locationProvider.html5Mode(true);
    });
