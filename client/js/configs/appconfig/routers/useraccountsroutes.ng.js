angular.module('yetibox').run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on('$stateChangeStart', function(){
    $(document).foundation('reflow');
  });
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $meteor.requireUser() promise is rejected
    // and redirect the user back to the login page
    if (error === "AUTH_REQUIRED") {
        // It is better to use $state instead of $location. See Issue #283.
        $state.go('signin');
    }
  });
}]);
