(function() {

  'use strict';

    function AboutCntrl($scope) {
      $scope.about = 'Crossfadr is a music player focused on bringing you the best in underground dance music.'
    }

  AboutCntrl.$inject = ['$scope']


    angular
     .module('crossfadr')
     .controller('AboutCntrl', AboutCntrl)

 }());
