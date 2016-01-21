'use strict';

/**
 * @ngdoc overview
 * @name app
 * @description
 * # app
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/ridemate', {
        templateUrl: 'views/ridemate.html',
        controller: 'RidemateCtrl',
        controllerAs: 'ridemate'
      })
      .when('/miisik', {
        templateUrl: 'views/miisik.html',
        controller: 'MiisikCtrl',
        controllerAs: 'miisik'
      })
      .when('/tastehome', {
        templateUrl: 'views/tastehome.html',
        controller: 'TastehomeCtrl',
        controllerAs: 'tastehome'
      })
      .when('/expedia', {
        templateUrl: 'views/expedia.html',
        controller: 'ExpediaCtrl',
        controllerAs: 'expedia'
      })
      .when('/pickeat', {
        templateUrl: 'views/pickeat.html',
        controller: 'PickeatCtrl',
        controllerAs: 'pickeat'
      })
      .when('/cs61as-quiz-system', {
        templateUrl: 'views/cs.html',
        controller: 'CsCtrl',
        controllerAs: 'cs'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
