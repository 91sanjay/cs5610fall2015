"use strict";

(function () {
    angular
        .module("FormBuilderApp")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $rootScope, $location, UserService) {
        $scope.location = $location;
        $scope.update = update;
        $scope.user = $rootScope.currentUser;
        $scope.updated = false;

        $rootScope.$on("login", function (event, user) {
            $scope.user = $rootScope.currentUser = user;
        });

        function update() {
            UserService.updateUser($scope.user.id, $scope.user).then(function (updatedUser) {
                $rootScope.currentUser = updatedUser;
                $scope.user = updatedUser;
                $scope.updated = true;
            });
        }
    }
})();