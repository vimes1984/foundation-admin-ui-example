

MainApp.config(['$urlRouterProvider', '$stateProvider', '$locationProvider',
  function($urlRouterProvider, $stateProvider, $locationProvider){


    $stateProvider
    .state('signin', {
        url: '/sign-in',
        templateUrl: 'client/templates/accounts/signin.ng.html',
        controller: 'signinCtrl'
    })
    .state('register', {
        url: '/register',
        templateUrl: 'client/templates/accounts/register.ng.html',
        controller: 'registerCtrl'
    })
    .state('resetpassword', {
        url: '/resetpassword/:token',
        templateUrl: 'client/templates/accounts/resetpass.ng.html',
        controller: 'resetpasswordCtrl'
    })
    .state('requestresetpasswordCtrl', {
        url: '/requestresetpassword',
        templateUrl: 'client/templates/accounts/requestresetpassword.ng.html',
        controller: 'requestresetpasswordCtrl'
    })
    .state('changepass', {
        url: '/changepass',
        templateUrl: 'client/templates/accounts/changepass.ng.html',
        controller: 'changepassctrl',
        resolve: {
              "currentUser": ["$meteor", function($meteor){
                return $meteor.requireUser();
              }]
            }
    })
    .state('myblockly', {
        url: '/myblockly',
        templateUrl: 'client/templates/accounts/myblockly.ng.html',
        controller: 'myblocklyctrl',
        resolve: {
              "currentUser": ["$meteor", function($meteor){
                return $meteor.requireUser();
              }]
            }
    })
    .state('newblockly', {
        url: '/newblockly',
        templateUrl: 'client/templates/accounts/newblockly.ng.html',
        controller: 'NewBlocklyCtrl',
        resolve: {
              "currentUser": ["$meteor", function($meteor){
                return $meteor.requireUser();
              }]
            }
    })
    .state('viewblockly', {
        url: '/viewblockly/:id',
        templateUrl: 'client/templates/accounts/viewblockly.ng.html',
        controller: 'viewblocklyctrl',
        resolve: {
              "currentUser": ["$meteor", function($meteor){
                return $meteor.requireUser();
              }]
            }
    })
    .state('verifyemail', {
        url: '/verifyemail/:token',
        templateUrl: 'client/templates/accounts/verifyemail.ng.html',
        controller: 'verifyEmailctrl'
    })
    .state('account', {
        url: '/my-account',
        templateUrl: 'client/templates/accounts/myaccount.ng.html',
        controller: 'accountctrl',
        resolve: {
              "currentUser": ["$meteor", function($meteor){
                return $meteor.requireUser();
              }]
            }
    });

}]);
MainApp.run(["$rootScope", "$state", function($rootScope, $state) {
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
