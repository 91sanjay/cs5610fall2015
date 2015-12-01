"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .controller("FieldController", FieldController);

    function FieldController($scope, $location, $rootScope, FieldService) {
        $scope.$location = $location;
        $scope.user = $rootScope.currentUser;
        $scope.selectedForm = $rootScope.selectedForm;
        $scope.fields = [];
        $scope.fieldType = null;
        $scope.addField = addField;
        $scope.removeField = removeField;

        $rootScope.$on("login", function(event, user){
            $scope.user = $rootScope.currentUser = user;
        });

        $rootScope.$on("selectedForm", function(event, form){
            $scope.selectedForm = $rootScope.selectedForm = form;
        });

        function initFields() {
            if($scope.selectedForm) {
                FieldService.getFieldsForForm($scope.selectedForm.id).then(function (fields) {
                    $scope.fields = fields;
                });
            }
        }

        initFields();

        function addField(fieldType) {
            var field = getField(fieldType);
            //$scope.fields.push(field);

            FieldService.createFieldForForm($scope.selectedForm.id, field).then(function(fields) {
                $scope.fields = fields;
            });
        }

        function getField(fieldType) {
            var field;
            switch(fieldType) {
                case "TEXT":
                    field = {
                        "id": null,
                        "label": "New Text Field",
                        "type": "TEXT",
                        "placeholder": "New Field"
                    };
                    break;
                case "TEXTAREA":
                    field = {
                        "id": null,
                        "label": "New Text Field",
                        "type": "TEXTAREA",
                        "placeholder": "New Field"
                    };
                    break;
                case "DATE":
                    field = {
                        "id": null,
                        "label": "New Date Field",
                        "type": "DATE"
                    };
                    break;
                case "OPTIONS":
                    field = {
                        "id": null,
                        "label": "New Dropdown",
                        "type": "OPTIONS",
                        "options": [{"label": "Option 1", "value": "OPTION_1"}, {"label": "Option 2", "value": "OPTION_2"}, {"label": "Option 3", "value": "OPTION_3"}]
                    };
                    break;
                case "EMAIL":
                    field = {
                        "id": null,
                        "label": "New Email Field",
                        "type": "EMAIL",
                        "placeholder": "New Email Field"
                    };
                    break;
                case "CHECKBOXES":
                    field = {
                        "id": null,
                        "label": "New Checkboxes",
                        "type": "CHECKBOXES",
                        "options": [{"label": "Option 1", "value": "OPTION_1"}, {"label": "Option 2", "value": "OPTION_2"}, {"label": "Option 3", "value": "OPTION_3"}]
                    };
                    break;
                case "RADIOS":
                    field = {
                        "id": null,
                        "label": "New Radio Buttons",
                        "type": "RADIOS",
                        "options": [{"label": "Option 1", "value": "OPTION_1"}, {"label": "Option 2", "value": "OPTION_2"}, {"label": "Option 3", "value": "OPTION_3"}]
                    };
                    break;
            }

            return field;
        }

        function removeField(field) {
            FieldService.deleteFieldFromForm($scope.selectedForm.id, field.id).then(function(fields) {
                $scope.fields = fields;
            })
        }
    }
})();