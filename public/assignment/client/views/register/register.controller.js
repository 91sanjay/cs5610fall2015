"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        $scope.register = register;

        function register() {
            var exits = false;
            $scope.regError = null;

            if ($scope.userName && $scope.password && $scope.verifyPassword && $scope.email) {
                if ($scope.password != $scope.verifyPassword) {
                    $scope.regError = "Passwords do not match";
                } else {
                    UserService.findAllUsers()
                        .then(function (users) {
                            console.log(users);
                            for (var i = 0; i < users.length; i++) {
                                if (users[i].username === $scope.userName) {
                                    var message = "User Name already exists. Please choose a different one. We accept only letters and numbers in usernames";

                                    if ($scope.regError) {
                                        $scope.regError += " | " + message;
                                    } else {
                                        $scope.regError = message;
                                    }
                                }
                                if (users[i].email === $scope.email) {
                                    var message = "Email already in use"

                                    if ($scope.regError) {
                                        $scope.regError += " | " + message;
                                    } else {
                                        $scope.regError = message;
                                    }
                                }
                            }

                            if (!$scope.regError) {
                                console.log("enter "+$scope.regError);
                                var user = {
                                    username: $scope.userName,
                                    password: $scope.password,
                                    email: $scope.email
                                };

                                UserService.createUser(user)
                                    .then(function(newUser){
                                        $rootScope.currentUser = newUser;
                                        $rootScope.$broadcast('login', newUser);
                                        $location.url('/profile');
                                    });
                            }
                        });
                }
            } else {
                $scope.regError = "All fields are required"
            }
        }
    }
})();