"use strict";

(function () {
    angular
        .module("RentEasy")
        .controller("MyListingController", MyListingController);

    function MyListingController($scope, $location, $rootScope, $routeParams, ListingService) {
        $scope.$location = $location;
        $scope.user = $rootScope.currentUser;
        $scope.deleteListing = deleteListing;
        $scope.showDetails = showDetails;
        $scope.listings = null;
        $scope.noListings = false;
        $scope.listing = null;

        $rootScope.$on("authenticate", function (event, user) {
            $scope.user = $rootScope.currentUser = user;
        });

        function init() {
            ListingService.FindAll($scope.user._id)
                .then(function (userListings) {
                    if (userListings) {
                        $scope.listings = userListings;
                    } else {
                        $scope.noListings = true;
                    }
                });
        }

        if ($scope.user) {
            init();
        }

        function deleteListing(listingid) {
            ListingService.Delete(listingid, $scope.user._id)
                .then(function (userListings) {
                    if (userListings) {
                        $scope.listings = userListings;
                    } else {
                        $scope.noListings = true;
                    }
                })
        }

        function showDetails(listing) {
            $scope.listing = listing;
            $rootScope.listing = listing;

            $rootScope.$broadcast('listing_detail', listing);

            $location.url('#/result');
        }
    }
})();
