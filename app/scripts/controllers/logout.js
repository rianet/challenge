'use strict';

/*
 * Logout Controller Logic
 */
function LogoutCtrl($scope, $rootScope, $location, loginService, AUTH_EVENTS) {
    $scope.isVisible = false;
    $scope.username = '';

    $rootScope.$on(AUTH_EVENTS.loginSuccess, function (event, data) {
      $scope.username = data;
      $scope.isVisible = true;
    });

    $scope.logout = function () {
      $scope.isVisible = false;
      loginService.logout();
      $location.path('/');
    };
}

/**
 * @ngdoc function
 * @name challengeApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('LogoutCtrl', LogoutCtrl);
