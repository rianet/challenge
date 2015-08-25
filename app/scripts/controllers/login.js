'use strict';

/*
 *  Controller Logic for the Login view
 */
function LoginCtrl($scope, $location, $rootScope, AUTH_EVENTS, loginService) {
    $scope.login = function () {
        var credentials = {
            'username': $scope.username,
            'password': $scope.password
        };
        var that = this;

        var promise = loginService.login(credentials);
        promise.then(
            function (data) {
                $location.path('/main');
                $rootScope.$broadcast(AUTH_EVENTS.loginSuccess, data.authenticatedUser);
                $scope.setAttempts(0);
            },
            function (error) {
              var count = localStorage.getItem("loginAttempts");
              count++;
              $scope.setAttempts(count);
              if(count >= 3){
                alert(error);
                $scope.setAttempts(0);
              }
            }
        );
        $scope.clearForm();
    };

    $scope.clearForm = function(){
      $scope.username = '';
      $scope.password = '';
    };

    $scope.setAttempts = function (num) {
      localStorage.setItem("loginAttempts", num);
    };
}

/**
 * @ngdoc function
 * @name challengeApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the challengeApp
 */
angular.module('challengeApp')
  .controller('LoginCtrl', LoginCtrl);
