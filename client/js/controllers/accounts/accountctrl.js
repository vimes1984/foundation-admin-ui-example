//helpsurvival controller
angular.module('yetibox').controller('accountctrl', ['$scope', '$meteor', '$rootScope', function($scope, $meteor, $rootScope){
  console.log( $rootScope.currentUser );
  $scope.formobject = $rootScope.currentUser;
  $scope.saveform = function(){
    console.log($scope.formobject);
    Meteor.users.update(
        {_id: Meteor.userId()},
        { $set:
          {
            'profile.name': $scope.formobject.profile.name,
            'profile.additional': $scope.formobject.profile.additional
          }
        }
    );
  };
}]);
