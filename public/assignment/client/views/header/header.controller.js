"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location, $rootScope) {
        $scope.$location = $location;
        $scope.user = $rootScope.currentUser;

        $rootScope.$on("auth", function(event, user){
            $scope.user = $rootScope.currentUser = user;
        });

        $scope.logout = function() {
            $scope.user = $rootScope.currentUser = null;
            $location.url("/login");
        }
    }
})();