(function() {

  'use strict';

  angular
   .module('crossfadr')
   .controller('NewMixController', ['MixesFactory', 'DjsFactory', '$location', '$scope',
   function(MixesFactory, DjsFactory, $location, $scope) {

    var ctrl = this

    // Outlets
    ctrl.djs = [];
    ctrl.mix = {};


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

      ctrl.saveMix = function(addMix) {

        ctrl.mix.$save(function() {
          $location.path('mixes');
        })
      }

    };





  }])
}())
