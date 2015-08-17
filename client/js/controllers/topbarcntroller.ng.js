
//topbarcntroller controller
angular.module('yetibox').controller('topbarcntroller', ['$scope', '$meteor', '$state', '$rootScope', function($scope, $meteor, $state, $rootScope){

  $scope.signOut   = function(){
    $meteor.logout().then(function(){
          $state.go('home');
      }, function(err){});
  };


}]);
