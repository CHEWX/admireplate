module.exports = function(grunt) {

    require('time-grunt')(grunt);

    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });

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
        autoprefixer: {
            options: {
                browsers: [
                    'last 2 versions',
                    'Explorer >= 8',
                    'Android >= 3'
                ]
            },
            sourcemap: {
                options: {
                    map: true
                },
                src: 'assets/css/main.css',
            },
            css: {
                src: 'assets/css/main.css',
            }
        },
        compass: {
            deploy: {
                options: {
                    config: 'config.rb',
                    outputStyle: 'compressed',
                    force: true
                }
            },
            dev: {
                options: {
                    config: 'config.rb',
                    outputStyle: 'expanded',
                    force: true
                }
            }
        },
        copy: {
            main: {
                files: [
                    {
                        src: ['**', '!**/bower_components/**', '!**/node_modules/**'],
                        dest: '../theme/',
                    }
                ]
            },
        },
        watch: {
            sass: {
                files: ['assets/css/scss/**/*.scss'],
                tasks: ['compass:dev', 'autoprefixer'],
                options: {
                    spawn: false,
                }
            }
        }

    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-autoprefixer');



    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('theme', ['copy']);
    grunt.registerTask('deploy', ['concat','uglify','compass:deploy','autoprefixer']);


};