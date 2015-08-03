'use strict';

angular.module('taskbook')
  .factory('Taskbook', ['$resource', TaskbookFactory]);

function TaskbookFactory($rescource) {
  return {}
}
