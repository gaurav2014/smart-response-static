
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
        'd3',
        'jquery.bootstrap',
        'flexslider'
    ],
        function($,d3) {
            $('.flexslider').flexslider({
                animation: "slide",
                start: function(){
                    $('#pageCover').hide();
                }
            });

            $('.chart').each(function(idx){

                var data = [((idx + 3) * 10)];
                d3.select(this)
                    .selectAll("div")
                    .data(data)
                    .enter().append("div")
                    .style("width", function(d) { return d + "%"; })
                    .text(function(d) { return d + '%'; });
            });

        });
});


