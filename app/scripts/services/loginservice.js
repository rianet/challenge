'use strict';

 /*
  * Login service main logic
  */
 function loginService($http, $q) {
     var authenticatedUser = null;
     // Public API
     return {

         login: function (credentials) {
           var deferred = $q.defer();
           if (credentials.username === this.validUser() && credentials.password === this.validPassword()) {
               authenticatedUser = credentials.username;
               deferred.resolve({ authenticatedUser: credentials.username });
            } else {
                deferred.reject('* Credetials are incorrect');
            }
             return deferred.promise;
         },

         logout: function () {
             authenticatedUser = null;
         },

         getUser: function () {
             return authenticatedUser;
         },

         isLoggedIn: function () {
             return authenticatedUser !== null;
         },

         validUser: function () {
            return "open";
         },

         validPassword: function () {
            return "sesame";
         }
     };
 }

 /**
  * @ngdoc service
  * @name challengeApp.loginService
  * @description
  * # loginService
  * Service in the challengeApp.
  */
angular.module('challengeApp')
  .factory('loginService', loginService);
