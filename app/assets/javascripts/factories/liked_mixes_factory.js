// (function(){
//   'use strict';
//   angular
//         .module('crossfadr')
//         .factory('liked_mixes_factory', ['$http', function($http) {
//
//           return {
//             getLikes: getLikes,
//             addLike: addLike
//           }
//
//
//           function getLikes(id) {
//             return $http.get('api/likes' + id)
//                         .then(handleResponse);
//           };
//
//           function addLike(newlike) {
//             var req = {
//                 method: 'POST',
//                 url: 'api/likes' ,
//                 headers: {
//                   'Content-Type': 'json'
//                 }
//                 , data: {like: newlike }
//             }
//             return $http(req)
//                         .then(handleCreate)
//           }
//
//
//           function handleCreate(response) {
//             return response.data
//           }
//
//            function handleResponse(response) {
//               return response.data
//            }
//
//         }])
// })
