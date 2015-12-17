"use strict";

(function () {
    angular
        .module("RentEasy")
        .controller("ResultController", ResultController);

    function ResultController($scope, $location, $rootScope) {
        $scope.$location = $location;
        $scope.listing = $rootScope.selectedListing;

        $rootScope.$on("listing", function(event, listing){
            $scope.listing = $rootScope.selectedListing = listing;
        });
    }
})();
