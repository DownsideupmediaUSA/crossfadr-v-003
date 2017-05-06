(function() {

  'use strict'
  angular
         .module('crossfadr')
         .controller('MainCtrl', MainCtrl)

          function MainCtrl(Auth) {
              var vm = this
              vm.logout = Auth.logout

              var credentials = {
                username: 'bdc',
                email: 'bdc@bdc.com',
                password: 'password'
              }
              var config = {
                headers: {
                  'X-HTTP-Method-Override':
                  'POST'
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
                    }
                        // $scope.$on('devise:logout', function(event, oldCurrentUser) {
                        //   vm.user = {}
                        // })




        
}())
