(function() {

  'use strict';

  angular
   .module('crossfadr')
   .controller('NewMixController', ['MixesFactory', 'DjsFactory', '$location', '$scope',
   function(MixesFactory, DjsFactory, $location, $scope) {

    var ctrl = this

    // Outlets
    ctrl.djs = [];
    ctrl.mix = [];
    $scope.files = [];
    $scope.description = '';

    // Action Outlets
    ctrl.submit = submit


    DjsFactory.getDjs().then(function(data) {
      ctrl.djs = data.data;
    });

    function submit() {
      alert("did this work")
        return MixesFactory
        .addMix(ctrl.mix)
        .then(function(response) {

debugger
        })

    };

    function addMix(newMix) {

      var newMix = {
        mix_title: ctrl.mix_title,
        artist_name: ctrl.dj.dj_name,
        genre_name: ctrl.genre_name
      }
      $scope.addMix = function(newMix) {
      var ctrl = new Mix();
      ctrl.name = title;
      ctrl.$save(function(){
        $scope.mixes = Mix.query();
      });


      }

      // ctrl.saveMix = function(addMix) {
      //   $location.path('mixes');
      //   // ctrl.mix.$save(function() {
      //   //   $location.path('mixes');
      //   // })
      // }

    };


    $scope.save = function(){
      var fd = new FormData();
      angular.forEach($scope.files, function(file,key){
        var fileObject =  'file' + key;
        fd.append(fileObject, file.file);
      })

    }
     $scope.remove = function(index){
          var files = [];
          angular.forEach($scope.files, function(file, key) {
            if(index != key) {
              files.push(file);
          }

        });
        $scope.files = files;
     }




  }]);
}())
