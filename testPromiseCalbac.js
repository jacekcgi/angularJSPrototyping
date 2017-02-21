map.service('getCurrentPositionOfAllPlanes', function ($http) {
    this.positions = getPositions;

    function getPositions(callback) {
        $http.get('/planeLocation').
        then(function successCallback(response) {
            callback(response.data);
        }, function errorCallback(response) {
            callback(response.data);
            alert("!!!")
        });
    }
});
