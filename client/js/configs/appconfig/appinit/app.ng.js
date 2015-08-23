angular.module('SampleApp', ['angular-meteor', 'ui.router', 'adminui']);
MainApp  = angular.module('SampleApp');
MainApp.config([
  '$interpolateProvider',
  function ($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  }
]);
