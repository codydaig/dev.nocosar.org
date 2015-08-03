'use strict';

angular.module('taskbook').controller('TaskbookController', ['$scope', '$stateParams', '$location', 'Authentication', 'Taskbook', TaskbookController]);

function TaskbookController($scope, $stateParams, $location, Authentication, Taskbook){
  $scope.authentication = Authentication;
}
