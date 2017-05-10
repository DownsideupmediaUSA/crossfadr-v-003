(function() {

  'use strict';

  angular
     .module('crossfadr')
     .controller('MixCntrl', ['$http', '$stateParams', 'MixesFactory', '$scope',
     function($http, $stateParams, MixesFactory, $scope ) {

         var vm = this
         $scope.mixes = []
         vm.replaceSpaces = replaceSpaces
         MixesFactory.getMixes()
                     .then(setMixes)

                     function setMixes(data) {
                       $scope.mixes = data.data
                      //  console.log(data)
                     }

                     function replaceSpaces(string) {
                       return string.replace(/\s/g, '-')
                     }

                     $scope.plusOne = function(index) {
                       const id = $scope.mixes[index].id
                       $http.post('/liked_mixes', {mix_id: id})
                          .success(function(response) {
                            console.log(response);
                            $scope.mixes[index].liked_mixes = response.mix_likes;
                          })
                          .error(function(resp) {
                            console.log('error', resp);
                          });
                     };






                     }])

 }())
