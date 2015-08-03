'use strict';

angular.module('taskbook').controller('TaskbookController', TaskbookController);

function TaskbookController($scope, $stateParams, $location, Authentication, Taskbook){
  $scope.authentication = Authentication;
}
