"use strict";

(function(){
	angular.module("FormBuilderApp").controller("FormController", FormController);

	function FormController($scope,$location,$rootScope,FormService) {

		var currentForm = {"name": $scope.name};

		FormService.FindAllFormsForUser($rootScope.currentUser.id, function(response) {
			$scope.forms = response;
		});

		function addForm() {
			var newForm = null;
			console.log("Yes");
			FormService.createFormForUser($rootScope.currentUser.id, form, function(form) {
				newForm = form;
			})

			$scope.forms.append(newForm);
		}

		function updateForm() {
			FormService.updateFormById($rootScope.currentUser.userid, currentForm, function(form) {
				currentForm = form;
			})
		}
	}
})();