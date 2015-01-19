module.exports = function(grunt) {

    // Project configs
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	
    	sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'assets/css/main.css' : 'assets/css/sass/all.sass'
                }
            }
    	},
        cssmin: {
            target: {
                files: {
                    'assets/css/main.min.css': ['assets/css/main.css', 'assets/css/vendor/*.css']
                }
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 5
                },
                files: [{
                    expand: true,
                    cwd: 'assets/img/src',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'assets/img/'
                }]
            }
        },
        jshint: {
            all: ['assets/js/main.js']
        },
        uglify: {
            my_target: {
                files: {
                    'assets/js/main.min.js': ['assets/js/main.js']
                }
            }
        },
    	watch: {
            css: {
                files: ['assets/css/**/*.sass', 'assets/css/**/*.scss'],
                tasks: ['sass', 'cssmin']
            },
            js: {
                files: ['assets/js/main.js'],
                tasks: ['jshint', 'uglify']
            },
            img: {
                files: ['assets/img/src/*'],
                tasks: ['imagemin']
            }
    	}
    });
    
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', ['sass', 'cssmin', 'uglify', 'watch']);
    grunt.registerTask('optimize-img', ['imagemin']);
};