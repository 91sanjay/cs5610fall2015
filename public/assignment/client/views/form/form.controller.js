"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, $location, $rootScope, FormService) {
        $scope.location = $location;
        $scope.user = $rootScope.currentUser;
        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        $scope.showFormFields = showFormFields;
        $scope.selectedForm = null;

        $rootScope.$on("login", function(event, user){
            $scope.user = $rootScope.currentUser = user;
            initForms();
        });

        function initForms() {
            console.log("init");
            if ($scope.user) {
                FormService.findAllFormsForUser($scope.user._id).then(function(forms){
                    console.log("called "+$scope.user._id);
                    $scope.forms = forms;
                });
            }
        }

        function addForm(formName) {

            if (!checkFormsForUser($scope.user._id, formName)) {
                var form = {
                    title: formName
                };

                FormService.createFormForUser($scope.user._id, form).then(function(forms) {
                    $scope.formName = "";
                    $scope.forms = forms;
                })
            }
        }

        function checkFormsForUser(userId, formName) {
            var formNameExists = false;

            console.log("Check");
            FormService.findAllFormsForUser(userId).then(function(forms) {
                if (forms) {
                    for (var i = 0; i < forms.length; i++) {
                        if (forms[i].title == formName) {
                            formNameExists = true;
                        }
                    }
                }
            });

            return formNameExists;
        }

        function updateForm(formName) {
            $scope.selectedForm.title = formName;

            FormService.updateFormById($scope.selectedForm.id, $scope.selectedForm).then(function(forms) {
                $scope.forms = forms;
            });

            $scope.selectedForm = null;
            $scope.formName = null;
        }

        function deleteForm(id) {
            FormService.deleteFormById(id).then(function(forms) {
                $scope.forms = forms;
            })
        }

        function selectForm(form) {
            $scope.formName = form.title;
            $scope.selectedForm = form;
        }

        function showFormFields(form) {
            var url = "/user/"+$scope.user.id+"/form/"+form.id+"/fields";
            $scope.selectedForm = form;
            $scope.formName = form.title;
            $rootScope.selectedForm = form;
            $rootScope.$broadcast('selectedForm', form);
            console.log("Called "+url);

            $location.path(url);
        }
    }
})();