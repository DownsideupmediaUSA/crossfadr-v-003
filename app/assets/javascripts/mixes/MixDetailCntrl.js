(function () {
  'use strict'

  angular
         .module("crossfadr")
         .controller('mixDetailCntrl', ['$stateParams', 'MixesFactory', '$scope',
         function($stateParams, MixesFactory, $scope ) {

             var vm = this
             $scope.mixes = []
             vm.replaceSpaces = replaceSpaces
             MixesFactory.getMixes()
                         .then(setMixes)

                         function setMixes(data) {
                           $scope.mixes = data.data
                           console.log(data)
                         }

                         function replaceSpaces(string) {
                           return string.replace(/\s/g, '-')
                         };

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
