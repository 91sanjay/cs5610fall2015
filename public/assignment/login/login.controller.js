"use strict";

(function(){
	angular.module("FormBuilderApp").controller("LoginController", LoginController);

	function LoginController($scope,$location,$rootScope,UserService) {
		$scope.login = login;

		function login() {
			var userName = $scope.userName;
			var password = $scope.password;

			UserService.findUserByNameAndPassword(userName, password, function(user) {
				if (user !== null) {
					console.log("Found "+user.userName);
					$rootScope.currentUser = user;
					$location.path("/profile");
				} else {
					console.log("Username does not exist. Please register to proceed.")
					$location.path("/login");
				}
			})
		}
	}
})();