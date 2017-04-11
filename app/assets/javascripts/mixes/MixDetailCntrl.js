(function() {

  'use strict';



     angular
      .module('crossfadr')
      .controller('MixDetailCntrl' ['$stateParams', 'MixesFactory', '$scope',
      function($stateParams, MixesFactory, $scope ) {


           var vm = this;
           $scope.mix = []
           vm.replaceSpaces = replaceSpaces

           MixesFactory.getMix()
                       .then(setMix)

                       function setMix(data) {
                         $scope.mix = data.data
                         console.log(data)
                       }

                       function replaceSpaces(string) {
                         return string.replace(/\s/g, '-')
                       };


});

   }());
