"use strict";

(function() {
    angular
        .module("RentEasy")
        .controller("SearchController", SearchController);

    function SearchController($scope, $location) {
        $scope.$location = $location;
    }
})();
