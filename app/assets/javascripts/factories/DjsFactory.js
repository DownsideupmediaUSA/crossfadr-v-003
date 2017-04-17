(function(){
  'use strict'

  angular
      .module('crossfadr')
      .factory('DjsFactory', ['$http', function($http) {


          return {
            getDjs: getDjs,
            getDj: getDj,
          }

        function getDjs() {
            return $http.get('/api/djs');

        }

        function getDj(id) {
          return $http.get('/api/djs/' + id)
                      .then(handleResponse)
        }
        function handleResponse(response) {
          return response.data
        }


      }])
}())
