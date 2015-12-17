"use strict";

(function(){
    angular
        .module("RentEasy")
        .factory("ListingService", ListingService);

    function ListingService($http, $q) {
        var service = {
            Create: createListing,
            Update: updateListing,
            Delete: deleteListing,
            FindAll: findAllListingsForUser,
            SearchByZip: searchListingByZip,
            SearchByLocality: searchListingByLocality
        };

        return service;

        function createListing(listing, userid) {
            var deferred = $q.defer();
            var url = '/api/project/listing/' + userid;

            $http.post(url, listing)
                .success(function(response) {
                    deferred.resolve(response);
                })
                .error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function updateListing() {

        }

        function deleteListing(listingid, userid) {
            var deferred = $q.defer();
            var url = '/api/project/listing/' + listingid + '/user/' + userid;

            $http.delete(url)
                .success(function(response) {
                    deferred.resolve(response);
                })
                .error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function findAllListingsForUser(userid) {
            var deferred = $q.defer();
            var url = '/api/project/listing/' + userid;

            $http.get(url)
                .success(function(response) {
                    deferred.resolve(response);
                })
                .error(function(error) {
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function searchListingByZip() {

        }

        function searchListingByLocality() {

        }
    }
})();