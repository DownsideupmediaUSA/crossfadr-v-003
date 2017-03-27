angular
  .module('crossfadr', ['ui.router', 'templates'])
   .config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: 'main/home.html',
      controller: 'MainCtrl as vm'
    })
    $urlRouterProvider.otherwise('/home')
  }])
