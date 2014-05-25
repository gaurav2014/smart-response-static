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
        },
        'ftp-deploy': {
            build: {
                auth: {
                    host: grunt.option( "host" ),
                    username:  grunt.option( "username" ),
                    password:  grunt.option( "password" )
                },
                src: 'dist',
                dest:  grunt.option( "branch" )
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-ftp-deploy');
    grunt.registerTask('default', ['jshint','copy']);
    grunt.registerTask('ftp-deploy');

};