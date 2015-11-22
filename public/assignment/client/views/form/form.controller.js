"use strict";

(function() {
    angular
        .module("FormBuilderApp")
        .controller("FormController", FormController);

    function FormController($scope, $location, $rootScope, FormService) {
        $scope.user = $rootScope.currentUser;
        $scope.addForm = addForm;
        $scope.updateForm = updateForm;
        $scope.deleteForm = deleteForm;
        $scope.selectForm = selectForm;
        $scope.showFormFields = showFormFields;
        $scope.selectedForm = null;

        $rootScope.$on("login", function(event, user){
            $scope.user = $rootScope.currentUser = user;
        });

        function initForms() {
            if ($scope.user) {
                FormService.findAllFormsForUser($scope.user.id).then(function(forms){
                    $scope.forms = forms;
                })
            }
        }

        initForms();

        function addForm(formName) {

            if (!checkFormsForUser($scope.user.id, formName)) {
                var form = {
                    title: formName
                }

                FormService.createFormForUser($scope.user.id, form).then(function(forms) {
                    $scope.formName = "";
                    $scope.forms = forms;
                })
            }
        }

        function checkFormsForUser(userId, formName) {
            var formNameExists = false;

            FormService.findAllFormsForUser(userId).then(function(forms){
                for (var i=0;i<forms.length; i++) {
                    if (forms[i].title == formName) {
                        formNameExists = true;
                    }
                }
            })
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