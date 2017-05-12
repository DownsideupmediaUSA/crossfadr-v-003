(function() {
  'use strict';

  angular
    .module('crossfadr')
     .controller('MainCtrl', ['$scope', '$localStorage', '$http',
    function($scope, $localStorage, $http) {
      var vm = this
      $scope.$storage = $localStorage;
      //$scope.logout = logout;
      $scope.userForm = {};
      $scope.login = login;

      function login() {        
        var loginData = {user: $scope.userForm};
        $http.post('/api/session ', loginData)
          .success(function(resp) {
            console.log(resp);
            $scope.$storage.email = resp.user.email;
            $scope.$storage.token = resp.token;
          })
          .error(function(err) {
            console.log(err);
          })
      }

      function logout() {

      }
    }])
}());
