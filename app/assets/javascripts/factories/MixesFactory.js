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
            //             .then(handleResponse)
            //
            // function handleResponse(response) {
            //   return response.data
            // }
        }

        function getMix() {}


      }])
}())
