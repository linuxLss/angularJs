define(["angularAMD"],function(angularAMD){
    var chapter13Config = function($stateProvider) {
        $stateProvider.state("main.chapter13", angularAMD.route({
            url: "/chapter13",
            templateUrl: 'business/chapter13/views/chapter13.html',
            controllerUrl:"business/chapter13/controllers/chapter13Ctrl.js"
        }))
    };
    var chapter13Module = angular.module("chapter13.module", ["ui.router"]);
    chapter13Module.config(chapter13Config);

    return chapter13Module;
});