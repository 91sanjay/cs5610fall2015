"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location, $rootScope, UserService) {
        $scope.login = login;

        function login() {
            var userName = $scope.userName;
            var password = $scope.password;

            UserService.findUserByNameAndPassword(userName, password).
                then(function(user) {
                    $scope.user = user;
                    $rootScope.currentUser = user;
                    $rootScope.$broadcast('login', user);
                    $location.url("/profile");
                });
        }
    }
})();