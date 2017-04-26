(function() {

  'use strict';

  angular
     .module('crossfadr')
     .controller('NewMixController', ['MixesFactory', 'DjsFactory', '$location', '$scope',
     function(MixesFactory, DjsFactory, $location, $scope){

      var vm = this




      $scope.djs = [];
      DjsFactory.getDjs().then(function(data){
      $scope.djs = data.data;
      });

      function addMix(newMix){
        var newMix = {
          mix_title: ctrl.mix_title,
          artist_name: ctrl.dj.dj_name,
          genre_name: ctrl.genre_name
        };

       $scope.submitForm(addMix) = function() {
         alert("did this work?")

         return MixesFactory.addMix(newMix)
                             .then(function(response){
                               debugger
                                 $location.path('api/mixes/' + response.mix.id);
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
