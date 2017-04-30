(function() {
  'use strict';

  var module = angular.module('module', []);
  module.directive('dragNDrop', function(){
    return {
      restrict: 'A',
      scope : {
        filesToUpload : '='
      },
      link : function(scope, element, attributes){
        element.bind('file-dragndrop-over', function(e) {
          if(e != null){
            e.preventdefault();
          }
          e.dataTransfer.effectAllowed = 'copy';
          element.attr('class', 'file-dragndrop-over')
        });
        element.bind('dragEnter', function(e) {
          if(e != null){
            e.preventdefault();
          }
          e.dataTransfer.effectAllowed = 'copy';
          element.attr('class', 'file-dragndrop-over')
        });
        element.bind('drop', function(e) {
          element.attr('class', 'file-dragndrop');
          if(e != null) {
            e.preventdefault();
          }
          var fileObjectsArray = [];
          angular.forEach(e.dataTransfer.files, function(file){
            //for the sake of previewing files on page prior to uploading
            var reader = new fileReader();
            reader.onload = function(e){
              scope.$apply(function(){
                var newFilePreview = e.target.result;
                var newFileName = file.name;
                var newFileSize = file.size;

                var fileObject = {
                  file : file,
                  name : newFileName,
                  size : newFileSize,
                  preview : newFilePreview
                }
                fileObjectsArray.push(fileObject);
              });
            }
            reader.readAsDataUrl(file);
          });
          scope.filesToUpload = fileObjectsArray;
        });
      }
    }
  })

}).call(this);
