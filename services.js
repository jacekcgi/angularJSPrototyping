planes.service("getAllPlanesDataService", ["$http", "$log","$rootScope", function ($http, $log,$rootScope) {

    var sharedData = {};
    
    sharedData.values = {};
    
    this.allPlanes = function getAllPlanes(callback) {
        $http.get('data.json').
            then(function successResponse(response) {
            
            //sharedData.values = callback(response.data);
            
            callback(response.data);
            
           //  sharedData.values = response.data;
             $rootScope.$broadcast('dataPassed');
            
            // console.log("servide: "+ sharedData.values);
            }, function errorResponse(response) {
                $log.error('database not connected');
            });
    };
}]);