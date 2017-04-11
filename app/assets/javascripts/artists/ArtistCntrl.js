(function() {

  'use strict';

  angular
     .module('crossfadr')
     .controller('ArtistCntrl', ['$stateParams', 'DjsFactory', '$scope',
     function($stateParams, DjsFactory, $scope ) {

     var vm = this

     $scope.djs = []

     vm.replaceSpaces = replaceSpaces

     DjsFactory.getDjs()
                 .then(setDjs)

     function setDjs(data) {
       $scope.djs = data.data
       console.log(data)
     }

     function replaceSpaces(string) {
       return string.replace(/\s/g, '-')
     }

     $scope.plusOne = function(index) {
       $scope.djs[index].liked_djs += 1;
     };


     }])

 }())
