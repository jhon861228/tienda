'use strict';

/**
 * @ngdoc function
 * @name tiendaApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tiendaApp
 */
angular.module('tiendaApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
