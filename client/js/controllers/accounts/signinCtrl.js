//helpsurvival controller
MainApp.controller('signinCtrl', ['$scope', '$meteor', '$state', function($scope, $meteor, $state){
  //default values
  $scope.user       = {};
  $scope.showerror  = false;
  //Sign user in
  $scope.signin = function(){
      $meteor.loginWithPassword($scope.user.name, $scope.user.password).then(
        function(){

            $state.go('account');
        }, function(err){
          $scope.showerror  = true;
          $scope.error = err;
        });
  };

}]);
