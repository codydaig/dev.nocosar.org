'use strict';

//Articles service used for communicating with the articles REST endpoints
angular.module('taskbook').factory('Vehicles', ['$resource',
  function ($resource) {
    return $resource('api/vehicles/:vehicleId', {
      vehicleId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
]);
