module.exports = function(grunt) {

    // 1. All configuration goes here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            dist: {
                src: [
                    'assets/js/libs/*.js', // All JS in the libs folder - keep un-minified
                    'assets/js/src/global.js'  // This specific file
                ],
                dest: 'assets/js/main.js',
            }
        },
        uglify: {
            build: {
                src: 'assets/js/main.js',
                dest: 'assets/js/main.min.js'
            }
        },
        compass: {
            dev: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },
        watch: {
            sass: {
                files: ['assets/css/scss/**/*.scss'],
                tasks: ['compass:dev']
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');



    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('deploy', ['concat','uglify','compass']);


};