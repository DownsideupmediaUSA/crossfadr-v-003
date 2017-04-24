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

      $scope.addMix = function(){
        var newMix = {
          mix_title: ctrl.mix.mix_id,
          artist_name: ctrl.mix.dj.dj_id,
          genre_name: ctrl.mix.genre_id
        };

       ctrl.submitForm() = function() {
         alert("did this shit work?")
         MixesFactory
                     .addMix(ctrl.newMix)
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
