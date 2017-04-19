app.controller('NewMixController', ['MixesFactory', '$location', '$scope', function(MixesFactory, $location, $scope){
  $scope.mix = {mix_title : '', dj_name : '', genre_name : ''};
  var ctrl = this;

  ctrl.addMix = function(){
    var newMix = {
      mix_title: ctrl.mix.mix_title,
      artist_name: ctrl.mix.dj.dj_name,
      genre_name: ctrl.mix.genre_name
    }

    $scope.submitForm = function() {
      MixesFactory.addMix($scope.mix)
      .then(function(resp){
        $location.path('mix/' + resp.data.mix.id);
        alert('New Mix Added!')
      },
        function(error){
          alert('Cannot create mix: ' + error.statusText);
        }
      );
    }



  }
}])
