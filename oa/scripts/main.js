require.config({
    paths:{
        "angular":"angular-1.5.2/angular",
        "uiRouter":"ui-router-0.3.0/angular-ui-router",
        "jquery":"jquery/jquery-2.2.3",
        "bootstrapJs":"bootstrap-3.3.6/js/bootstrap",
        "angularAMD":"angularAMD-0.2.1/angularAMD",
        "ngload":"angularAMD-0.2.1/ngload"
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