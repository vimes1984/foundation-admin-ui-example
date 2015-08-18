//Reset password Ctrl controller
angular.module('yetibox').controller('resetpasswordCtrl', ['$scope', '$meteor', '$stateParams', function($scope, $meteor, $stateParams){

    console.log($stateParams);
  $scope.resetpassword = function(){
    console.log($stateParams);
    $meteor.resetPassword($stateParams.token, $scope.pass).then(function(){
          $scope.showalert    = true;
          $scope.alertclass   = 'Success';
          $scope.message      = 'Password successfully reset';
      }, function(err){
        $scope.showalert    = true;
        $scope.alertclass   = 'alert';
        $scope.message      = err.reason;
        console.log('Error sending forgot password email - ', err);
      });
  };

}]);
