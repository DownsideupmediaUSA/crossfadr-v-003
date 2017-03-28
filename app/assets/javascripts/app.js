var app = angular.module('crossfadr', ['ui.router', 'templates']);

app
   .config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
          url:'/home',
          templateUrl: 'main/home.html',
          controller: 'MainCtrl as vm'
        })
        .state('home.tracks', {
          url:'/tracks',
          templateUrl: 'mixes/mixes.html',
          controller: 'MixCntrl as vm'
        })
        .state('home.artists', {
          url:'/artists',
          templateUrl: 'artists/artist.html',
          controller: 'ArtistCntrl as vm'
        })
        .state('home.about', {
          url:'/about',
          templateUrl: 'static/about.html',
          controller: 'AboutCntrl as vm'
        })
        .state('contact', {
          url:'contact',
          templateUrl: 'home/contact.html',
        });

    $urlRouterProvider.otherwise('/home');
  }])
