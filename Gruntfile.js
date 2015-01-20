module.exports = function(grunt) {

    // Project configs
    grunt.initConfig({
    	pkg: grunt.file.readJSON('package.json'),
    	
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
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Register tasks
    grunt.registerTask('default', ['uglify', 'watch']);
    grunt.registerTask('optimize-img', ['imagemin']);
};