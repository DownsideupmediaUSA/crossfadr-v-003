(function() {

  'use strict';

  angular
     .module('crossfadr')
     .controller('MixCntrl', ['$http', '$stateParams', 'MixesFactory', '$location', '$scope',
     function($http, $stateParams, MixesFactory, $location, $scope ) {
         var vm = this
         $scope.mixes = []
         vm.replaceSpaces = replaceSpaces
         $scope.getMix = function(id) {
         $location.path('/home/mixes/' + id)
         }
         MixesFactory.getMixes()
                     .then(setMixes)

                     function setMixes(data) {
                       $scope.mixes = data.data
                     }

                     function replaceSpaces(string) {
                       return string.replace(/\s/g, '-')
                     }

                     $scope.plusOne = function(mix) {
                       $http.post('/liked_mixes', {mix_id: mix.id})
                          .success(function(response) {
                            mix.liked_mixes = response.liked_mixes;
                          })
                          .error(function(resp) {
                            console.log('error', resp);
                          });
                     };

     }])

 }())
