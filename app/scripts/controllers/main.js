'use strict';
function AppCtrl($scope, AUTH_EVENTS){

  $scope.$on(AUTH_EVENTS.loginSuccess, function (event, data) {
    console.log("escucho evento");
    console.log(data); // 'Data to send'
  });
  
  $scope.currentUser = "test";

  $scope.setCurrentUser = function (user) {
    $scope.currentUser = user;
  };
}

/**
 * @ngdoc function
 * @name challengeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('MainCtrl', AppCtrl);
