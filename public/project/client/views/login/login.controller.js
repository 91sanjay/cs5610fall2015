"use strict";

(function() {
    angular
        .module("RentEasy")
        .controller("LoginController", LoginController);

    function LoginController($scope, $location) {
        $scope.$location = $location;
    }
})();
