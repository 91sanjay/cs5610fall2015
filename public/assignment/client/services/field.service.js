"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .factory("FieldService", FieldService);

    function FieldService($http, $q) {
        var service = {
            createFieldForForm: createFieldForForm,
            getFieldsForForm: getFieldsForForm,
            getFieldForForm: getFieldForForm,
            deleteFieldForForm: deleteFieldForForm,
            updateFieldForForm: updateFieldForForm
        }

        return service;

        function createFieldForForm(formId, field) {
            var deferred = $q.defer();
            var url = "/api/assignment/form/"+formId+"/field";

            $http.post(url, field)
                .success(function(fields){
                    deferred.resolve(fields);
                }).error(function(error){
                   deferred.reject(error);
                });

            return deferred.promise;
        }

        function getFieldsForForm(formId) {
            var deferred = $q.defer();
            var url = "/api/assignment/form/"+formId+"/field";

            $http.get(url)
                .success(function(fields){
                    deferred.resolve(fields);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function getFieldForForm(formId, fieldId) {
            var deferred = $q.defer();
            var url = "/api/assignment/form/"+formId+"/field/"+fieldId;

            $http.get(url)
                .success(function(field){
                    deferred.resolve(field);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function deleteFieldForForm(formId, fieldId) {
            var deferred = $q.defer();
            var url = "/api/assignment/form/"+formId+"/field/"+fieldId;

            $http.delete(url)
                .success(function(fields){
                    deferred.resolve(fields);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }

        function updateFieldForForm(formId, fieldId, field) {
            var deferred = $q.defer();
            var url = "/api/assignment/form/"+formId+"/field/"+fieldId;

            $http.put(url, field)
                .success(function(field){
                    deferred.resolve(field);
                }).error(function(error){
                    deferred.reject(error);
                });

            return deferred.promise;
        }
    }
})();
