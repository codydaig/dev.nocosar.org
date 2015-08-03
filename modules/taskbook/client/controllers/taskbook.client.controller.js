'use strict';

angular.module('taskbook').controller('TaskbookController', ['$scope', '$stateParams', '$location', 'Authentication', 'Taskbook', TaskbookController]);

function TaskbookController($scope, $stateParams, $location, Authentication, Taskbook){
  $scope.authentication = Authentication;
}

angular.module('taskbook').controller('VehiclesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Vehicles', VehiclesController]);

function VehiclesController($scope, $stateParams, $location, Authentication, Vehicles){
  $scope.authentication = Authentication;

  $scope.find = function () {
    $scope.vehicles = Vehicles.query();
  };
}
