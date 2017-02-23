planes.service("PlanesDataService", ["$http", "$log", "$rootScope", function ($http, $log, $rootScope) {

    var allPlanesData = {};

    allPlanesData.values = {};

    this.allPlanes = function getAllPlanes(callback) {
        $http.get('data.json').
        then(function successResponse(response) {
            callback(response.data);
            $rootScope.$broadcast('planesDataPassed');

        }, function errorResponse(response) {
            $log.error('database not connected');
        });
    };
}]);

planes.service("DetailsPlaneFlightService", ["$http", "$log", function ($http, $log){
 
    this.flightDetails = function getFlightDeatilsAboutPlane(callback,flightId) {
        $http.get('filghtsInformation.json').
        then(function successResponse(response) {
            callback(response.data);
//            console.log(response.data)
        }, function errorResponse(response) {
            $log.error('database not connected');
        });
    };
    
}]);