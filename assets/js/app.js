
/**
 * @fileoverview Bootstrap file for smartresponse.org
 * @author trey.eckels@gmail.com (Trey Eckels)
 */

require(['framework-config'], function(frameworkConfig){
    require.config(frameworkConfig);

    /**
     * Kick off the site.
     */
    require([
        'jquery',
        'jquery.bootstrap',
        'flexslider'
    ],
        function($) {
            $('.flexslider').flexslider({
                animation: "slide",
                start: function(){
                    $('#pageCover').hide();
                }
            });
        });
});


