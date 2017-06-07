define(["angularAMD"],function(angularAMD){
    var homeConfig = function($stateProvider) {
        $stateProvider.state("home", angularAMD.route({
            url: "/home",
            templateUrl: 'business/home/views/home.html',
            controllerUrl:"business/home/controllers/homeCtrl.js"
        }))
    };
    var homeModule = angular.module("home.module", ["ui.router"]);
    homeModule.config(homeConfig);

    return homeModule;
});