"use strict";

(function() {
    angular
        .module("RentEasy")
        .controller("MyListingController", MyListingController);

    function MyListingController($scope, $location, $rootScope) {
        $scope.$location = $location;
        $scope.user = $rootScope.currentUser;

        $rootScope.$on("authenticate", function (event, user) {
            $scope.user = $rootScope.currentUser = user;
        });

    }
})();
