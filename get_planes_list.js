var planes = angular.module('planes', []);
planes.controller('listPlanes', ['$scope', 'PlanesDataService', 'DetailsPlaneFlightService', '$window', function ($scope, PlanesDataService, DetailsPlaneFlightService, $window) {



    PlanesDataService.allPlanes(function (data) {
        $scope.planeList = data;
        console.log(data);
    });

    $scope.$on('planesDataPassed', function () {

        var isNotEmpty = PlanesDataService.values;
        if (isNotEmpty) {
            $scope.planeList = PlanesDataService.values;
        };
    });

    $scope.showFlightDetails = function (item) {
        var id_plane = item.currentTarget.getAttribute("id_plane");
        console.log(id_plane);
        DetailsPlaneFlightService.flightDetails(function (data, id_plane) {
            $scope.flightDetails = data;

            popupWindow = $window.open('flightDeatilsWindow.html', '', 'width=250,height=200');
            popupWindow.flightDetails = data;
            console.log(data);
        });

    };

}]);

planes.controller('showSomething', ['$scope', 'PlanesDataService', function ($scope, PlanesDataService) {

    $scope.go = function () {

        PlanesDataService.allPlanes(function (data) {
            PlanesDataService.values = data;

        });

    };



}]);