"use strict";

(function() {
	angular.module("FormBuilderApp").config(Config);

	function Config($routeProvider) {
		$routeProvider.when("/home",
		{
			templateUrl: "home/home.view.html"
		})
		.when("/register",
		{
			templateUrl: "register/register.view.html"
		})
		.when("/login",
		{
			templateUrl: "login/login.view.html"
		})
		.when("/profile",
		{
			templateUrl: "profile/profile.view.html"
		})
		.otherwise({
			redirectTo: "/home/home.view.html"
		});
	}
})();