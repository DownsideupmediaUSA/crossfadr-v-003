(function() {

  'use strict';
  angular
         .module('crossfadr')
         .controller('MainCtrl', MainCtrl)

          function MainCtrl(Auth) {
              var vm = this

              var credentials = {
                username: 'bdc',
                email: 'bdc@bdc.com',
                password: 'password'
              };
              var config = {
                headers: {
                  'X-HTTP-Method-Override':
                  'POST'
                }
              };

                    Auth.login(credentials, config)
                        .then(function(user) {
                            console.log(user)
                          }, function(error) {
                            console.log(error)
                        })

                    Auth.currentUser()
                        .then(function(user) {
                          console.log(user)
                        }, function(error) {
                          console.log(error)

                        })
          }
}())
