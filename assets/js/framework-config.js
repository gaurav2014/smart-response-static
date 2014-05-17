
define('framework-config',[], function(){
    return {
        "paths": {
            "jquery": "vendor/jquery/dist/jquery.min",
            "jquery.bootstrap": "vendor/bootstrap/dist/js/bootstrap.min",
            "underscore": "vendor/underscore/underscore",
            "docs": "libs/docs.min"
        },

        "shim": {
            "backbone": {
                deps: ['underscore', 'jquery'],
                exports: 'Backbone'
            },
            "jquery.bootstrap": {
                deps: ['jquery']
            },
            "underscore": {
                exports: '_'
            },
            "docs": {
                deps: ['jquery','bootstrap'],
                exports: 'Holder'
            }
        }
    };
});
