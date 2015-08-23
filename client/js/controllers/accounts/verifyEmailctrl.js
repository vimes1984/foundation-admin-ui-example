//changepassctrl controller
MainApp.controller('verifyEmailctrl', ['$scope', '$meteor', '$rootScope', '$stateParams', function($scope, $meteor, $rootScope, $stateParams){

  console.log($stateParams);
  $meteor.verifyEmail($stateParams.token).then(function(){
    $scope.showalert    = true;
    $scope.alertclass   = 'success';
    $scope.message      = 'Email Verified';
    }, function(err){
      $scope.showalert    = true;
      $scope.alertclass   = 'alert';
      $scope.message      = err.reason;
      console.log('Error sending forgot password email - ', err);
    });
}]);
