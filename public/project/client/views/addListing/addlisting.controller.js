"use strict";

(function() {
    angular
        .module("RentEasy")
        .controller("AddListingController", AddListingController);

    function AddListingController($scope, $location) {
        $scope.$location = $location;
    }
})();
