'use strict';

/**
 * @ngdoc overview
 * @name App
 * @description
 * # App
 *
 * Main module of the application.
 */
angular
  .module('App', [
    'ngAnimate',
    'ngCookies',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngSails'
  ])
  .config(function ($routeProvider,$sailsProvider) {
    $sailsProvider.url = 'http://localhost:1337/';
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/country', {
        templateUrl: 'views/country.html',
        controller: 'CountryCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
