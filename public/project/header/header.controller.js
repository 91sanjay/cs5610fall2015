"use strict";

(function() {
    angular
        .module("RentEasy")
        .controller("HeaderController", HeaderController);

    function HeaderController($scope, $location) {
        $scope.$location = $location;
    }
})();
