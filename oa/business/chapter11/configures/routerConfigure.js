define(["angularAMD"],function(angularAMD){
    var chapter11Config = function($stateProvider) {
        $stateProvider.state("main.chapter11", angularAMD.route({
            url: "/chapter11",
            templateUrl: 'business/chapter11/views/chapter11.html',
            controllerUrl:"business/chapter11/controllers/chapter11Ctrl.js"
        }))
    };
    var chapter11Module = angular.module("chapter11.module", ["ui.router"]);
    chapter11Module.config(chapter11Config);

    return chapter11Module;
});