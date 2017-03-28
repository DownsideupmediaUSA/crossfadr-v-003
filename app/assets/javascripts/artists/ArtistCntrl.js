(function() {

  'use strict';

    function ArtistCntrl($scope) {
      $scope.artist = 'this is some artist'
    }

    ArtistCntrl.$inject = ['$scope']


    angular
     .module('crossfadr')
     .controller('ArtistCntrl', ArtistCntrl)

 }());
