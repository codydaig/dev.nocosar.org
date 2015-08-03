'use strict';

// Configuring the Articles module
angular.module('taskbook').run(['Menus',
  function (Menus) {
    // Add the Taskbook Menu Item
    Menus.addMenuItem('topbar', {
      title: 'Taskbook',
      state: 'taskbook'
    });
  }
]);
