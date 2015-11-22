"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .factory("FormService", FormService);

    function FormService($http, $q) {
        var service = {
            createFormForUser: createFormForUser,
            findAllFormsForUser: findAllFormsForUser,
            deleteFormById: deleteFormById,
            updateFormById: updateFormById
        }

        return service;

        function createFormForUser(userId, form) {
            var deferred = $q.defer();
            var url = '/api/assignment/' + userId + '/form';

            $http.post(url, form)
                .success(function(response){
                    deferred.resolve(response);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function findAllFormsForUser(userId) {
            var deferred = $q.defer();
            var url = '/api/assignment/' + userId + '/form';

            $http.get(url)
                .success(function(response){
                    deferred.resolve(response);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function deleteFormById(formId) {
            var deferred = $q.defer();
            var url = '/api/assignment/form/' + formId;

            $http.delete(url)
                .success(function(response){
                    deferred.resolve(response);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function updateFormById(formId, form) {
            var deferred = $q.defer();
            var url = '/api/assignment/form/' + formId;

            $http.put(url, form)
                .success(function(response){
                    deferred.resolve(response);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
})();