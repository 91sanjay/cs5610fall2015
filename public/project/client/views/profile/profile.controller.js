"use strict";

(function() {
    angular
        .module("RentEasy")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        $scope.update = update;
        $scope.updated = false;
        $scope.user = $rootScope.currentUser;

        $rootScope.$on("authenticate", function (event, user) {
            $scope.user = $rootScope.currentUser = user;
        });

        function update() {
            UserService.Update($scope.user._id, $scope.user).then(function (updatedUser) {
                $rootScope.currentUser = updatedUser;
                $scope.user = updatedUser;
                $scope.updated = true;
            });
        }
    }
})();
