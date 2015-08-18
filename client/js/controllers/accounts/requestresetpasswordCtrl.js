//resetpasswordCtrl controller
angular.module('yetibox').controller('requestresetpasswordCtrl', ['$scope', '$meteor', function($scope, $meteor){

  $scope.resetpassword = function(){
    $meteor.forgotPassword({email: $scope.email}).then(function(){
        console.log('Success sending forgot password email');
        $scope.showalert    = true;
        $scope.alertclass   = 'success';
        $scope.message      = 'Email sent to '+ $scope.email +' to reset your password';
      }, function(err){
        $scope.showalert    = true;
        $scope.alertclass   = 'alert';
        $scope.message      = err.reason;
        console.log('Error sending forgot password email - ', err);
      });
  };

}]);
