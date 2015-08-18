//registerCtrl controller
angular.module('yetibox').controller('registerCtrl', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){

  $scope.register = function(){
    $meteor.createUser({
          username:    $scope.newuser.username,
          email:       $scope.newuser.email,
          password:    $scope.newuser.password,
          profile: {
            name:       $scope.newuser.name,
            additional: $scope.newuser.additional,
            blockly: []
          },
        }).then(function(){
        $state.go('account');
      }, function(err){
        $scope.showalert    = true;
        $scope.alertclass   = 'alert';
        $scope.message      = err.reason;

      });
    };

}]);
