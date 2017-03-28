(function(){
  'use strict'

  angular
  .module('crossfadr')
  .factory('mixesFactory', ['$http', function($http){


      return {
        getmixes: getmixes,
        getMix: getMix
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
