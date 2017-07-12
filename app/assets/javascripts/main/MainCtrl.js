(function() {
  'use strict';

  angular
    .module('crossfadr')
     .controller('MainCtrl', ['$scope', '$localStorage', '$http',
    function($scope, $localStorage, $http) {
      var vm = this
      $scope.$storage = $localStorage;
      $scope.logout = logout;
      $scope.userForm = {};
      $scope.login = login;
      $scope.mostLikedMixes = mostLikedMixes;

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

      function mostLikedMixes(mixes) {
        mixes.sort(function(a, b) {
          return a.liked_mixes.count - b.liked_mixes.count;
        })
          console.log(mixes)
      }

      function logout() {
        $http.delete('/api/session')
          .success(function(resp) {
           delete $scope.$storage.email
           delete $scope.$storage.token
         })
         .error(function(err){
           console.log(err)
         })
      }
    }])
}());
