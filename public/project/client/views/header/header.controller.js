"use strict";

(function() {
    angular
        .module("RentEasy")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location, $rootScope) {
        $scope.$location = $location;
        $scope.logout = logout;

        $rootScope.$on('login', function() {
           $scope.user = $rootScope.currentUser;
        });

        function logout() {
            $scope.user = null;
            $location.url('/login');
        }
    }
})();
