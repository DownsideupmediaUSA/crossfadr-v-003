(function() {

  'use strict';

  angular
         .module('crossfadr')
         .controller('MainCtrl', MainCtrl)

          function MainCtrl(Auth, $scope) {
              var vm = this
              vm.logout = Auth.logout

              var credentials = {
                username: 'bdc',
                email: 'bdc@bdc.com',
                password: 'password'
              }

              var config = {
                  headers: {
                    'X-HTTP-Method-Override': 'POST'
                  }
              }



                    Auth.login(credentials, config)
                        .then(function(user) {
                            vm.user = user
                            console.log(user)
                          }, function(error) {
                            console.log(error)
                        })

                    Auth.currentUser()
                        .then(function(user) {
                          vm.user = user
                          console.log(user)
                        }, function(error) {
                          console.log(error)

                        })


                    Auth.logout(config).then(function(oldUser) {
                      // alert(oldUser.name + "you're signed out now.");
                     }, function(error) {
                      // An error occurred logging out.
                     });



                    $scope.$on('devise:logout', function(event, oldCurrentUser) {
                      vm.user = {}

                    });

                    }






}());
