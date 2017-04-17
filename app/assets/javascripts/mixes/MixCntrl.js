(function() {

  'use strict';

  angular
     .module('crossfadr')
     .controller('MixCntrl', ['$stateParams', 'MixesFactory', '$scope',
     function($stateParams, MixesFactory, $scope ) {

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
                       $scope.mixes[index].liked_mixes += 1;
                     };




                     }])

 }())
