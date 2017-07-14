'use strict'

/**
 * @ngdoc overview
 * @name meanMarkdownApp
 * @description
 * # meanMarkdownApp
 *
 * Main module of the application.
 */
angular
.module('meanMarkdownApp', [
  // 'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  // 'ngTouch',
  'ui.codemirror',
  'ngDialog',
  // 'ngCssInjector',
  // 'sun.scrollable',
  'angular.filter'
])
.config(function ($routeProvider, $locationProvider) {
  // configure routes
  $routeProvider
    .when('/', {
      redirectTo: '/login'
    })
    .when('/login', {
      template: '<ms-login></ms-login>'
    })
    .when('/files', {
      template: '<ms-files></ms-files>'
    })
    .when('/editor/:id', {
      templateUrl: 'views/editor.html',
      controller: 'EditorCtrl'
    })
    .otherwise({
      redirectTo: '/'
    })

  // use # isntead of the newer #!
  $locationProvider.hashPrefix('')
})
