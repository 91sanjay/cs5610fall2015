"use strict";

(function() {
    angular
        .module("RentEasy")
        .controller("MyListingController", MyListingController);

    function MyListingController($scope, $location) {
        $scope.$location = $location;
    }
})();
