"use strict";

(function(){
	angular.module("FormBuilderApp").controller("LoginController", LoginController);

	function LoginController($scope,$location,$rootScope,UserService) {

		$scope.login = login;

		function login() {
			var users = UserService.findAllUsers();

			for(var i=0;i<users.length;i++) {
				if (users[i].userName === userName) {
					$rootScope = users[i];
					break;
				}
			}
			$location.path = ("/profile");
		}
	}
})();