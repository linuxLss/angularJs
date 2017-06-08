require.config({
    paths:{
        "angular":"common/angular/angular",
        "uiRouter":"common/ui-router/angular-ui-router",
        "jquery":"common/jquery/jquery",
        "bootstrapJs":"common/bootstrap/js/bootstrap",
        "angularAMD":"common/angularAMD/angularAMD",
        "ngload":"common/angularAMD/ngload"
    },
    shim:{
        'uiRouter': {
            deps: ['angular']
        },
        'bootstrapJs': {
            deps: ['jquery']
        },
        'angularAMD': {
            deps: ['angular']
        },
        'ngload': {
            deps: ['angularAMD']
        }
    }
});

require(["js/framework","angularAMD"],function(app, angularAMD){
    angularAMD.bootstrap(app);
});