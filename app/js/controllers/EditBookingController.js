/**
 * Created by vedant on 12/25/16.
 */

'use script';

bookingApp.controller('EditBookingController', ['$scope', function ($scope) {

    $scope.passengers = [
        {
            "id": 0,
            "firstName": "Vedant",
            "lastName": "Parikh",
            "email": "example@example.com",
            "confirmEmail": "example@example.com",
            "gender": "male",
            "birthDate": "09/10/1991",
            "country": "United States",
            "citizenship": "India",
            "travelid": "Passport",
            "expirydate": "07/09/2018"
        },
        {
            "id": 1,
            "firstName": "Andrew",
            "lastName": "Droffner",
            "email": "ad7401@gmail.com",
            "confirmEmail": "ad7401@gmail.com",
            "gender": "male",
            "birthDate": "11/08/1985",
            "country": "United States",
            "citizenship": "United States",
            "travelid": "License",
            "expirydate": "07/09/2020"
        }
    ];

    $scope.customer = {
        firstName: "Vedant",
        lastName: "Parikh",
        email: "example@example.com",
        phone: "201-123-1234",
        country: "United States"
    };

    $scope.payment = {
        card_number: "xxxx-xxxx-xxxx-1234",
        card_holder_name: "Vedant Parikh",
        expiry_date: "05/16/2019",
        identification_number: "xxx"
    };

    $scope.flight = {
        origin: 'New York',
        imageUrl: '/img/flight.jpg',
        destination: 'Florida',
        oneWayOrTwoWay: 'One Way Flight',
        departure: '01/02/2017 12:00 PM',
        arrival: '01/02/2017 5 PM',
        airline: 'American Airlines',
        FlightType: 'Economy',
        price: '$240',
        TaxesAndFees: '$45',
        TotalPrice: '$285'
    };

    $scope.isCreating = false;
    $scope.isEditing = false;

    function resetCreateForm() {
        $scope.passenger = {
            firstName: '',
            lastName: '',
            email: '',
            confirmEmail: '',
            gender: '',
            birthDate: '',
            country: '',
            citizenship: '',
            travelid: '',
            expirydate: ''
        }
    }

    $scope.editedPassenger = null;

    function setEditedPassenger(passenger) {
        $scope.editedPassenger = angular.copy(passenger);
    }

    function updatePassenger(passenger) {
        var index = _.findIndex($scope.passengers, function (p) {
            return p.id == passenger.id;
        });
        $scope.passengers[index] = passenger;

        $scope.editedPassenger = null;
        $scope.isEditing = false;
    }

    function deletePassenger(passenger) {
        _.remove($scope.passengers, function (p) {
            return p.id == passenger.id;
        })
    }

    function createPassenger(passenger) {
        passenger.id = $scope.passengers.length;
        $scope.passengers.push(passenger);

        resetCreateForm();
    }

    function startCreating() {
        $scope.isCreating = true;
        $scope.isEditing = false;

        resetCreateForm();
    }

    function cancelCreating() {
        $scope.isCreating = false;
    }

    function startEditing() {
        $scope.isCreating = false;
        $scope.isEditing = true;
    }

    function cancelEditing() {
        $scope.isEditing = false;
    }

    function shouldShowCreating() {
        return !$scope.isEditing;
    }

    function shouldShowEditing() {
        return $scope.isEditing && !$scope.isCreating;
    }

    function confirmBooking() {
        window.location = '/flightBooked';
    }

    function cancelBooking() {
        window.location = '/bookingCancelled';
    }

    $scope.startCreating = startCreating;
    $scope.cancelCreating = cancelCreating;
    $scope.startEditing = startEditing;
    $scope.cancelEditing = cancelEditing;
    $scope.shouldShowCreating = shouldShowCreating;
    $scope.shouldShowEditing = shouldShowEditing;
    $scope.createPassenger = createPassenger;
    $scope.setEditedPassenger = setEditedPassenger;
    $scope.updatePassenger = updatePassenger;
    $scope.deletePassenger = deletePassenger;
    $scope.confirmBooking = confirmBooking;
    $scope.cancelBooking = cancelBooking;
}]);