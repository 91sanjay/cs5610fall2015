"use strict";

(function() {
    angular
        .module("RentEasy")
        .controller("ProfileController", ProfileController);

    function ProfileController($scope, $location) {
        $scope.$location = $location;
    }
})();
