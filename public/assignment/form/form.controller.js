"use strict";

(function(){
	angular.module("FormBuilderApp").controller("FormController", FormController);

	function FormController($scope,$location,$rootScope,FormService) {
		var user = $rootScope.currentUser;
		$scope.addForm = addForm;
		$scope.updateForm = updateForm;
		$scope.deleteForm = deleteForm;
		$scope.selectForm = selectForm;

		function init() {
			if (user == null) {
				console.log("yes");
				user = {"id": "1", "userName": "Default", "lastName": " ", "password": "password", "email": "default@default.com"};
			}

			FormService.findAllFormsForUser(user.id, function(response) {
				$scope.forms = response;
			});
		}

		init();

		function addForm() {
			var newForm = null;
			var form = {"name": $scope.name};

			FormService.createFormForUser(user.id, form, function(form) {
				newForm = form;
			});

			$scope.forms.push(newForm);
		}

		function updateForm() {
			console.log("Called");
			FormService.updateFormById(user.id, currentForm, function(form) {
				currentForm = form;
			});
		}

		function deleteForm(index) {
			var formId = $scope.forms[index].id;
			FormService.deleteFormById(formId, function(forms) {
				console.log("Form Deleted");
				$scope.forms = forms;
			});
		}

		function selectForm(formId) {

		}
	}
})();