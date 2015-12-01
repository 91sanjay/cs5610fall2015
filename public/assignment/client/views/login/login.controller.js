"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        $scope.login = login;
        $scope.loginerror = false;

        function login() {
            var userName = $scope.userName;
            var password = $scope.password;

            UserService.findUserByNameAndPassword(userName, password).
                then(function(user) {
                    if (user) {
                        $scope.user = user;
                        $rootScope.currentUser = user;
                        $rootScope.$broadcast('login', user);
                        $location.url("/profile");
                    } else {
                        $scope.loginerror = true;
                    }
                });
        }
    }
})();