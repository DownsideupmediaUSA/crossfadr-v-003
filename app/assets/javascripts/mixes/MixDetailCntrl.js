(function() {

  'use strict';



     angular
      .module('crossfadr')
      .controller('MixDetailCntrl' ['$stateParams', 'MixesFactory', '$scope',
      function($stateParams, MixesFactory, $scope ) {


           var vm = this
           $scope.mixes = []
           vm.replaceSpaces = replaceSpaces
           MixesFactory.getMix(id)
                       .then(setMix)

                       function setMix(data) {
                         $scope.mix = data.data
                         console.log(data)
                       }

                       function replaceSpaces(string) {
                         return string.replace(/\s/g, '-')
                       }
                       $scope.plusOne = function(index) {
                         $scope.mixes[index].liked_mixes += 1;
                       };
      }])



   }())
