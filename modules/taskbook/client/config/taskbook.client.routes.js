'use strict';

// Setting up route
angular.module('taskbook').config(['$stateProvider',
  function ($stateProvider) {
    // Taskbook state routing
    $stateProvider
      .state('taskbook', {
        abstract: true,
        url: '/taskbook',
        template: '<ui-view/>',
        data: {
          roles: ['volunteer', 'admin']
        }
      })
      .state('taskbook.dashboard', {
        url: '',
        templateUrl: '/modules/taskbook/views/dashboard-taskbook.client.view.html'
      });
  }
]);
