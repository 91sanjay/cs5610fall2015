"use strict";

(function () {
    angular
        .module("RentEasy")
        .controller("SearchController", SearchController);

    function SearchController($scope, $location) {
        $scope.$location = $location;
        $scope.fullAddress = "440 Huntington Ave, Boston, MA-02115";
        $scope.description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Deleniti dolor dolores doloribus eius eligendi enim id inventoreiusto mollitia odit officiis possimus quibusdam quodreprehenderit tempora temporibus vel velit, veniam?";
        $scope.bed = 2;
        $scope.bath = 1;
        $scope.pets = false;
        $scope.heat = false;
    }
})();
