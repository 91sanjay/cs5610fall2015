"use strict";

(function(){
	angular.module("FormBuilderApp").controller("ProfileController", ProfileController);

	function ProfileController($scope,$location,UserService) {

		$scope.update = update;

		function update() {
			var user = {
				'userName': $scope.userName,
				'password': $scope.password,
				'email': $scope.email
			}

			UserService.createUser(user, function(newUser) {
				$rootScope = newUser;
			})

			$location.path("/profile");
		}
	}
})();