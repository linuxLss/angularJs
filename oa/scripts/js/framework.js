define(["jquery",
    "uiRouter",
    "bootstrapJs",
    /*"angularAMD",*/
    "business/home/configures/routerConfigure.js",
    "business/login/configures/routerConfigure.js",
    "business/chapter11/configures/routerConfigure.js",
    "business/chapter13/configures/routerConfigure.js"
],function(
    $,uiRouter,bootstrapJs,homeConfig,loginConfig,chapter11Config,chapter13Config
){
    var relyModule = [
        "ui.router",
        homeConfig.name,
        loginConfig.name,
        chapter11Config.name,
        chapter13Config.name
    ];
    var app = angular.module("app", relyModule);

    var registerRoutes = function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.when("", "/login");

        $stateProvider
            .state("main", {
                url: "/main",
                templateUrl: "business/main.html"
            })
            .state("main.page1", {
                url:"/page1",
                templateUrl: "business/page1.html"
            })
            .state("main.page2", {
                url:"/page2",
                templateUrl: "business/page2.html"
            })
            .state("main.page3", {
                url:"/page3",
                templateUrl: "business/page3.html"
            });
    };
    app.config(["$stateProvider", "$urlRouterProvider", registerRoutes]);

    app.run(['$rootScope','$state',function($rootScope, $state){
        $rootScope._webName = "/smartdot.oa";
        $rootScope.$state = $state;
        $rootScope.$on('$stateChangeSuccess',function(){
            var userLoginIsSuccess = sessionStorage.getItem("user.login.isSuccess");
            if (userLoginIsSuccess != "TRUE") {
                $state.go("login");
            }
        });
    }]);

    app.controller("myAppCtrl",function($scope,$state){
        $scope.getController = function() {
            $state.go("main");
        };
    });
    return app;
});


