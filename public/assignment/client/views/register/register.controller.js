"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, $rootScope, UserService) {
        $scope.register = register;

        function register() {
            var userName = $scope.userName;
            var password = $scope.password;
            var email = $scope.email;
            if (userName && password && email) {
                var user = {
                    "userName": $scope.userName,
                    "password": $scope.password,
                    "email": $scope.email
                };

                console.log("Registering user " + user.userName);

                UserService.createUser(user, function(user) {
                    if (user.id != null) {
                        console.log("Not Null");
                        $location.path("/profile");
                    } else {
                        console.log("User already registered. Login to continue");
                        $location.path("/register");
                    }
                });

                $rootScope.currentUser = user;
            }
        }
    }
})();