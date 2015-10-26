"use strict";

(function(){
	angular.module("FormBuilderApp").controller("ProfileController", ProfileController);

	function ProfileController($scope,$rootScope,$location,UserService) {

		$scope.update = update;
		var currentUser = $rootScope.currentUser;

		function init() {
			if (currentUser != null) {
				$scope.userName = currentUser.userName;
				$scope.firstName = currentUser.firstName;
				$scope.lastName = currentUser.lastName;
				$scope.email = currentUser.email;
			}
		}

		init();

		function update() {
			var user = {
				'userName': $scope.userName,
				'password': $scope.password,
				'firstName': $scope.firstName,
				'lastName': $scope.lastName,
				'email': $scope.email
			}

			UserService.updateUser(currentUser.id, user, function(updatedUser) {
				$rootScope.currentUser = updatedUser;
			})
		}
	}
})();