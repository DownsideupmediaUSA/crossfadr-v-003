(function() {

  'use strict';

  angular
     .module('crossfadr')
     .controller('NewMixController', ['MixesFactory', 'DjsFactory', '$location', '$scope', function(MixesFactory, DjsFactory, $location, $scope){
      $scope.mix = {};
      var ctrl = this;

      ctrl.addMix = addMix;

      $scope.djs = [];
      DjsFactory.getDjs().then(function(data){
      $scope.djs = data.data;
      });

      $scope.addMix = function(newMix){
        var newMix = {
          mix_title: ctrl.mix.mix_name,
          artist_name: ctrl.mix.dj.dj_name,
          genre_name: ctrl.mix.genre_name
        };

       $scope.submitForm() = function() {
         alert("did this work?")
         MixesFactory
                     .addMix(newMix)
                     .then(function(resp){
                         $location.path('/mixes' + resp.mix.id);
                         alert('New Mix Added!');
          },
                         function(error){
                         alert('Cannot create mix: ' + error.statusText);
            }
          );
        };



  }
}])
}())
