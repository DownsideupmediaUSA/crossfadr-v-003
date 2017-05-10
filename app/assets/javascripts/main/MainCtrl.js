(function() {
  'use strict'
  angular
    .module('crossfadr')
    .controller('MainCtrl', ['$scope', '$localStorage', '$http',
    function MainCtrl($scope, $localStorage, $http) {
      var vm = $scope;
      vm.$storage = $localStorage;
      //vm.logout = logout;
      $scope.userForm = {email: 'dummyemail'};



      vm.login = function() {
        console.log('login called');
        var loginData = {user: {
          email: vm.userForm.email,
          password: vm.userForm.password
        }};
        // var config = {
        //   headers: {
        //     'Authorization': 'Token token=' + token + ', email=' + email
        //   }
        // };
        $http.post('/session/new', loginData)
          .success(function(resp) {
            console.log(resp);
            vm.$storage.email = resp.user.email;
            vm.$storage.token = resp.token;
          })
          .error(function(err) {
            console.log(err);
          })
      }
    }])
}());
