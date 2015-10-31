"use strict";

var app = angular.module("RentEasy", ["ngRoute"]);

app.directive("navigation", function () {
    return {
        restrict: 'E',
        templateUrl: 'header/header.view.html',
        controller: 'HeaderController'
    }
});

app.directive("pageFooter", function () {
    return {
        restrict: 'E',
        templateUrl: 'footer/footer.view.html'
    }
});
