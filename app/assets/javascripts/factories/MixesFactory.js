(function(){
  'use strict'

  angular
      .module('crossfadr')
      .factory('MixesFactory', ['$http', function($http) {


          return {
            getMixes: getMixes,
            getMix: getMix,
            addMix: addMix
          }

        function getMixes() {
            return $http.get('api/mixes');
        }

        function getMix(id) {
          return $http.get('api/mixes' + id)
                      .then(handleResponse);
        };

        function addMix(newMix) {
          var req = {
              method: 'POST',
              url: 'api/mixes' ,
              headers: {
                'Content-Type': 'json'
              }
              , data: {mix: newMix }
          }
          

          return $http.post('api/mixes', {mix: newMix});
        }


        function handleCreate(response) {
          return response.data
        }

         function handleResponse(response) {
            return response.data
         }

        //  function uplike(id) {
        //    var req = {
        //        method: 'POST',
        //        url: 'api/uplike' ,
        //        headers: {
        //          'Content-Type': 'json'
        //        }
        //        , data: id
        //    }
     }])
}())
