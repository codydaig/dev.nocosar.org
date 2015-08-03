'use strict';

// Configuring the Articles module
angular.module('taskbook').run(['Menus',
  function (Menus) {
    // Add the Taskbook Menu Item
    Menus.addMenuItem('topbar', {
      title: 'Taskbook',
      state: 'taskbook.dashboard',
      type: 'dropdown'
    });

    Menus.addSubMenuItem('topbar', 'taskbook.dashboard', {
      title: 'Manage Vehicles',
      state: 'taskbook.vehicles'
    });
  }
]);
