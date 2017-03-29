(function() {

  'use strict';

  angular
     .module('crossfadr')
     .controller('MixCntrl', ['$stateParams', 'MixesFactory',
     function($stateParams, MixesFactory ) {

     var vm = this

     vm.mixes = []

     vm.replaceSpaces = replaceSpaces

     MixesFactory.getMixes()
                 .then(setMixes)

     function setMixes(data) {
       vm.mixes = data
       console.log(data)
     }

     function replaceSpaces(string) {
       return string.replace(/\s/g, '-')

     }


     }])

 }())
