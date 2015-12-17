"use strict";

(function () {
    angular
        .module("RentEasy")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location, $rootScope, UserService) {
        $scope.$location = $location;
        $scope.logout = logout;
        $scope.user = $rootScope.currentUser;

        $rootScope.$on('authenticate', function (event, user) {
            $scope.user = $rootScope.currentUser = user;
        });

        function logout() {
            UserService.Logout().then(function() {
                $rootScope.currentUser = null;
                $scope.user = null;
                $location.url("/home");
            });
        }
    }
})();
