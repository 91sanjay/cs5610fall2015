"use strict";

(function(){
	angular.module("FormBuilderApp").controller("RegisterController", RegisterController);

	function RegisterController($scope,$location,$rootScope,UserService) {

		$scope.register = register;
		var user = $rootScope.user;

		function register() {
			console.log("called");

			var user = {"username": $scope.username, "password": $scope.password,"email": $scope.email};

			UserService.createUser(user, function(user) {
				if (user.id !== null) {
					$location.path("/profile");
				}
			});
		}
	}
})();