define(["angular"],function(){
	var loginCtrl = ["$rootScope","$scope","$state","$http",
	function($rootScope,$scope,$state,$http) {
		$scope.loginTitle = "I am loging page....";
		$scope.loginUser = {
			userName:"",userPassword:""
		};
		$scope.login = function() {
			if ($scope.loginUser.userName && $scope.loginUser.userPassword) {
				var promise = $http({
					method : "get",
					url : $rootScope._webName + "/login/loginCheck",
					params : $scope.loginUser
				});
				promise.then(function(resp) {
					if (resp.data) {
						//将“用户登录是否成功标志”存储到sessionStorage/localStorage，
						//framework.js的$stateChangeSuccess的时候判断
						sessionStorage.setItem("user.login.isSuccess","TRUE");
						$state.go("main");
					} else {
						console.log("userName or userPassword is error......");
					}
				},function(resp){
					console.log("login error......");
				});
				
			}
			
		}
	}];

	return loginCtrl;
});