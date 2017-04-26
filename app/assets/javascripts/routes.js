(function(){
  'use strict';

  angular
      .module('crossfadr')
      .config(['$stateProvider', '$urlRouterProvider',
      function($stateProvider, $urlRouterProvider) {
       $stateProvider
           .state('home', {
             url:'/home',
             templateUrl: 'main/home.html',
             controller: 'MainCtrl as ctrl'
           })
           .state('home.tracks', {
             url:'/tracks',
             templateUrl: 'mixes/mixes.html',
             controller: 'MixCntrl as ctrl'
           })
           .state('home.artists', {
             url:'/artists',
             templateUrl: 'artists/artist.html',
             controller: 'ArtistCntrl as ctrl'
           })
           // .state('home.track', {
           //   url:'/:id',
           //   templateUrl: 'mixes/show.html',
           //   controller: 'mixDetailCntrl as ctrl'
           // })
           .state('home.new', {
             url: '/new',
             templateUrl: 'mixes/new.html',

           })
           .state('home.about', {
             url:'/about',
             templateUrl: 'static/about.html',
             controller: 'AboutCntrl as ctrl'
           })
           .state('home.contact', {
             url:'/contact',
             templateUrl: 'main/contact.html',
             controller: 'contactCtrl as ctrl'
           });
           // .state('home.jplayer', {
           //   url:'/jplayer',
           //   templateUrl: 'mixes/jplayer.html',
           //   controller: 'jPlayerCtrl as ctrl'
           // });


       $urlRouterProvider.otherwise('/home');
     }])

}());
