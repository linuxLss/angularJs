define(["angularAMD"],function(angularAMD){
	var loginConfig = function($stateProvider){
		$stateProvider.state("login",angularAMD.route({
			url:"/login",
			templateUrl: 'business/login/views/login.html',
			controllerUrl: "business/login/controllers/loginCtrl.js"
		}))
	};
	var loginModule = angular.module("login.module",["ui.router"]);
	loginModule.config(loginConfig);

	return loginModule;
});