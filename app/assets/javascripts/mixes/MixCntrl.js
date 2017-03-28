(function() {

  'use strict';

    function MixCntrl($scope) {
      $scope.name = 'this is a pretend mix'
    }

    MixCntrl.$inject = ['$scope']


    angular
     .module('crossfadr')
     .controller('MixCntrl', MixCntrl)

 }());
