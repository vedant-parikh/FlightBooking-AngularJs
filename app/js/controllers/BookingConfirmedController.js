/**
 * Created by Vedant on 12/26/16.
 */

'use script';

bookingApp.controller('bookingConfirmedController', ['$scope', function ($scope) {
    function bookAnotherflight() {
        window.location = '/newBooking';
    }

    $scope.bookAnotherflight = bookAnotherflight;
}]);
