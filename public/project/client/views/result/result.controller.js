"use strict";

(function () {
    angular
        .module("RentEasy")
        .controller("ResultController", ResultController);

    function ResultController($scope, $location) {
        $scope.$location = $location;
    }
})();
