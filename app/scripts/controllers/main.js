'use strict';

/**
 * @ngdoc function
 * @name tiendaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tiendaApp
 */
angular.module('tiendaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
