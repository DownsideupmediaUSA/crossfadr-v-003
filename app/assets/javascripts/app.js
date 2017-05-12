(function() {
  'use strict';
  var app = angular.module('crossfadr', ['ui.router', 'templates', 'ngStorage']);
   app.config(['$httpProvider', function($httpProvider) {
     // for CSRF errors
     $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
     $httpProvider.interceptors.push('authINterceptor');
   }])

   app.factory('authINterceptor', function($localStorage) {
     return {
      'request': function (config) {
        config.headers = config.headers || {};
        config.headers.Authorization = 'Token token=' + $localStorage.token + ', email=' + $localStorage.email;
        return config;
      }
    }
   })

}());
