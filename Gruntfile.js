module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'assets/js/app.js']
        },
        copy: {
            main: {
                files: [
                    // includes files within path
                    {expand: true, src: ['*.html'], dest: 'dist/', filter: 'isFile'},

                    // includes files within path and its sub-directories
                    {expand: true, src: ['assets/**'], dest: 'dist/'}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.registerTask('default', ['jshint','copy']);

};