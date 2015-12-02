"use strict";

(function() {
    angular
        .module("RentEasy")
        .controller("RegisterController", RegisterController);

    function RegisterController($scope, $location) {
        $scope.$location = $location;
    }
})();
