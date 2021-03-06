(function() {

  'use strict';


   app.module(crossfadr)
      .directive('player', function() {
      return {
      restrict: 'EA',
      templateUrl: 'player.html',
      link: function(scope, element, attrs) {
        var updatePlayer = function(newValue, oldValue, scope) {
          scope.mix = newValue;
          console.log("Watch triggered (old = " + oldValue
            + "), new = (" + newValue + ")");
        }
        scope.$watch(attrs.mix, updatePlayer);
        }
      };
   });

})
