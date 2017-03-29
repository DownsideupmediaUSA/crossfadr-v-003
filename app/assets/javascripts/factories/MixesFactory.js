(function(){
  'use strict'

  angular
  .module('crossfadr')
  .factory('MixesFactory', ['$http', function($http) {


      return {
        getMixes: getMixes,
      
      }

    function getMixes() {
      return $http.get('/api/mixes')
                  .then(handleResponse)

      function handleResponse(response) {
        console.log(response)
      }
    }

  }])
}())
