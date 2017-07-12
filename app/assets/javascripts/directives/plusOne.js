(function() {
  'use strict';

  angular
         .module('crossfadr')
         .directive('plusOne', function() {
          return { restrict: 'E',
                      scope: {},
                      templateUrl: 'main/home/home.html',
                       link: function(scope, element, attrs) {
                         scope.liked_mix = function() {                           
                          element.toggleClass('thumbs outline up icon');
                         }
                       }
                     };
                   });


}())
