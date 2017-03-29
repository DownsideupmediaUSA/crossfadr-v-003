(function() {

  'use strict';

    


    angular
     .module('crossfadr')
     .controller('MixCntrl',
     ['$stateParams', 'MixesFactory',
     function($stateParams, MixesFactory ) {

     var vm = this

     vm.mixes = []

     vm.replaceSpaces = replaceSpaces

     MixesFactory.getMixes()

     function replaceSpaces(string) {
       return string.replace(/\s/g, '-')
     }


     }])

 }())
