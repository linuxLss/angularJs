define(["angular"],function(){
	var loginCtrl = ["$scope","$state",function($scope,$state) {
		$scope.loginTitle = "I am loging page...."
		$scope.login = function() {
			if(window.localStorage){
				//将“用户登录是否成功标志”存储到localStorage，
				//framework.js的$stateChangeSuccess的时候判断
				localStorage.setItem("user.login.isSuccess",true);
				$state.go("main");
	        } else {
				console.log("Browser does not support localStorage!");
			}
		}
	}];

	return loginCtrl;
});