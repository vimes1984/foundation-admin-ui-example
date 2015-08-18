//viewblocklyctrl controller
angular.module('yetibox').controller('viewblocklyctrl', ['$scope', '$meteor', '$rootScope', 'Blockly', '$timeout', '$stateParams',
  function($scope, $meteor, $rootScope, Blockly, $timeout, $stateParams){

  var getworkspace    = $rootScope.currentUser.profile.blockly[parseInt($stateParams.id)];
  $scope.blockname    = getworkspace.title;

  // This is wrapped in timeout to allow the directive to load.

  $timeout(function () {

      document.getElementById('source').innerHTML = getworkspace.workspace;
      Blockly.setWorkspace( angular.fromJson( getworkspace.workspace ) );
  }, 10);
  $timeout(function () {

      Blockly.onChange(function (workspace) {
          console.log(workspace);
          document.getElementById('source').innerHTML = angular.toJson(workspace, true);
      });
  }, 0);
  $scope.SaveToaccount = function(){
    var workspace                             = Blockly.getWorkspace();
    var blockname                             = $scope.blockname;
    workspace.block[0].workspace              = angular.toJson(workspace);
    workspace.block[0].title                  = blockname;
    workspace.block[0].pageid                 = $stateParams.id;
    var newblock                              = {};
    var tojs                                  = Blockly.saveToJS(workspace);
    workspace.block[0].jscodejson             = JSON.stringify(tojs);

    newblock["profile.blockly." + $stateParams.id] = workspace.block[0];

    Meteor.users.update(
      {_id: Meteor.userId()},
      { $set: newblock}
    );
    $scope.showalert    = true;
    $scope.alertclass   = 'success';
    $scope.message      = 'Saved to account';
    $scope.distitle = false;

    console.log( $rootScope.currentUser );

  };

}]);
