(function(){
  'use strict'

  angular
      .module('crossfadr')
      .factory('MixesFactory', ['$http', function($http) {


          return {
            getMixes: getMixes,
            getMix: getMix,
          }

        function getMixes() {
            return $http.get('/api/mixes');
        }

        function getMix(id) {
          return $http.get('/api/mixes/' + id)
                      .then(handleResponse)
        }
        function handleResponse(response) {
           return response.data
        }


      }])
}())
