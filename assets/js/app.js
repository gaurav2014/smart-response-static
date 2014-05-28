
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
            var data = [10];

            var x = d3.scale.linear()
                .domain([0, d3.max(data)])
                .range([0, 100]);

            d3.select(".chart")
                .selectAll("div")
                .data(data)
                .enter().append("div")
                .style("width", function(d) { return x(d) + "px"; })
                .text(function(d) { return d; });
        });
});


