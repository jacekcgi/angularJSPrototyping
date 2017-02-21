var planes = angular.module('planes', []);
planes.controller('listPlanes', ['$scope', 'getAllPlanesDataService', function ($scope, getAllPlanesDataService) {


    
    getAllPlanesDataService.allPlanes(function (data) {
        $scope.planeList = data;
    });    
    
     $scope.$on('dataPassed',function(){
        
         var isNotEmpty = getAllPlanesDataService.values;
         console.log(isNotEmpty);      
         if(isNotEmpty){
        $scope.planeList = getAllPlanesDataService.values;
         console.log('dupa dupa dupa')
             };
         
    });
    
//     getAllPlanesDataService.allPlanes(function (data) {
//        $scope.planeList = data;
//    });
    
//    $scope.$on('dataPassed', function )
    
}]);

planes.controller('showSomething',['$scope', 'getAllPlanesDataService', function($scope, getAllPlanesDataService){
    
    $scope.go = function() {
        
        getAllPlanesDataService.allPlanes(function (data) {
          //  console.log(data)
            getAllPlanesDataService.values = data;
       // $scope.planeList = data;
                
    });  
        
//        $scope.$on('dataPassed',function(){
//        $scope.planeList = getAllPlanesDataService.values;
//    });
        
//         $scope.$watch('getAllPlanesDataService',function(){
//         console.log('change promisse 2222')
//          
//    });

  // alert('hey hey');
  }
        

    
}]);