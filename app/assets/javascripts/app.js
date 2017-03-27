var app = angular.module('crossfadr', ['ui.router', 'templates'])

app
   .config(function($stateProvider, $urlRouterProvider) {
  
    $stateProvider
    .state('home', {
      url:'/home',
      templateUrl: 'main/home.html',
      controller: 'MainCtrl as vm'
    })
    .state('tracks', {
      url:'/tracks',
      templateUrl: 'mixes/mixes.html',
      controller: 'MixCntrl as vm'
    })
    .state('artists', {
      url:'/artists',
      templateUrl: 'djs/djs.html',
      controller: 'DJCntrl as vm'
    })
    .state('about', {
      url:'about',
      templateUrl: 'home/about.html',
    })
    .state('contact', {
      url:'contact',
      templateUrl: 'home/contact.html',
    });

    $urlRouterProvider.otherwise('/home')
})
