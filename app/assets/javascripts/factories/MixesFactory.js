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
        }
        function handleResponse(response) {
           return response.data
        }

        function addMix(newMix) {
          return $http.post('api/mixes',{mix: newMix});
        };



      }])
}())
