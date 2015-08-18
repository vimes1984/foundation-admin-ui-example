//myblocklyctrl controller
angular.module('yetibox').controller('myblocklyctrl', ['$scope', '$meteor', '$rootScope', function($scope, $meteor, $rootScope){

  $scope.userblocklys =  $rootScope.currentUser.profile.blockly;
  

}]);
