(function() {
  'use strict';

angular
  .module('crossfadr')
  .directive('dragNDrop', function(){
    return{
      restrict: 'A',
      scope: {
        filesToUpload: '='
      }
    }
  })

}())
