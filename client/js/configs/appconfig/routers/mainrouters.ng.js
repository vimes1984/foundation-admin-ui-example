

angular.module('yetibox').config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'client/templates/home.ng.html',
      controller: 'HomeCtrl'
    })
    .state('help', {
        url: '/help',
        templateUrl: 'client/templates/help.ng.html',
        controller: 'HelpController'
    });
}]);
