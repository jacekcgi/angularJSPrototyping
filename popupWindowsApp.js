var myApp = angular.module('popup', []);

myApp.controller('passDataControler', ['$scope', '$window', function($scope, $window) {
    $scope.flightDetails = $window.flightDetails;  
}]);