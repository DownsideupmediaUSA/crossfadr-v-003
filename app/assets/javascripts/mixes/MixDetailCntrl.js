(function () {
  'use strict'

  angular
   .module("crossfadr")
   .controller('mixDetailCntrl', ['$http', '$stateParams', 'MixesFactory', '$scope',
   function($http, $stateParams, MixesFactory, $scope ) {

     var vm = this
     vm.replaceSpaces = replaceSpaces
     MixesFactory.getMix($stateParams.id)
                 .then(setMix)

     function setMix(data) {
       $scope.mix = data.data
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
