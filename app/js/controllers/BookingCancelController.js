/**
 * Created by Vedant on 12/26/16.
 */

'use script';

bookingApp.controller('bookingCancelController', ['$scope', function ($scope) {
    function bookNewflight() {
        window.location = '/newBooking';
    }

    $scope.bookNewflight = bookNewflight;
}]);
