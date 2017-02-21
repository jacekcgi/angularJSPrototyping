var planes = angular.module('planes', []);
planes.controller('listPlanes', ['$scope', 'getAllPlanesDataService', function ($scope, getAllPlanesDataService) {



    getAllPlanesDataService.allPlanes(function (data) {
        $scope.planeList = data;
    });

    $scope.$on('planesDataPassed', function () {

        var isNotEmpty = getAllPlanesDataService.values;
        if (isNotEmpty) {
            $scope.planeList = getAllPlanesDataService.values;
        };
    });

}]);

planes.controller('showSomething', ['$scope', 'getAllPlanesDataService', function ($scope, getAllPlanesDataService) {

    $scope.go = function () {

        getAllPlanesDataService.allPlanes(function (data) {
            getAllPlanesDataService.values = data;

        });

    }



}]);
