(function() {

  'use strict';

  angular
   .module('crossfadr')
   .controller('NewMixController', ['MixesFactory', 'DjsFactory', '$location', '$scope', '$state',
   function(MixesFactory, DjsFactory, $location, $scope, $state) {

    var ctrl = this;
    $scope.mix_title = '';
    $scope.dj_name = '';
    $scope.mix_image = [];


    // Outlets

    $scope.files = [];
    $scope.description = '';

    // Action Outlets
    ctrl.submit = submit


    DjsFactory.getDjs().then(function(data) {
      ctrl.djs = data.data;
    });

    function submit(addMix) {
      var f = document.getElementById('mix-image-file').files[0],
      r = new FileReader();
      r.onload = function(e){
        $scope.mix_image = r.result;
        $scope.mix_image_file_name = f.name;

        var newMix = {
          mix_title: $scope.mix_title,
          artist_name: $scope.dj_name,
          mix_image_file_name: $scope.mix_image_file_name,
          mix_image: $scope.mix_image
        };

        return MixesFactory
        .addMix(newMix)
        .then(function(response) {
          $state.go('home.tracks')

       })
      }
      r.readAsDataURL(f);

    };
  }]);
}())
