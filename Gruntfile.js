module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    compass: {                  // Task
      dist: {                   // Target
        options: {              // Target options
          sassDir: 'app/styles',
          cssDir: 'public/css'
        }
      },
      dev: {                    // Another target
        options: {
          sassDir: 'sass',
          cssDir: 'css'
        }
      }
    },
    
    concat: {
      options: {
        separator: '\n',
      },
      jsdist: {
        src: ['app/bower_components/jquery/jquery.js', 'app/bower_components/bootstrap/jquery.js'],
        dest: 'public/js/<%= pkg.name %>-<%= pkg.version %>.js',
      },
      cssdist: {
        src: ['app/bower_components/bootstrap/dist/css/bootstrap.css', 'public/css/main.css'],
        dest: 'public/css/<%= pkg.name %>-<%= pkg.version %>.css',
      },
    },
    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'public/js/<%= pkg.name %>-<%= pkg.version %>.js',
        dest: 'public/js/<%= pkg.name %>-<%= pkg.version %>.min.js'
      }
    }, 
    
    cssmin: {
      compress: {
        files: {
          'public/css/<%= pkg.name %>-<%= pkg.version %>.min.css': ['public/css/<%= pkg.name %>-<%= pkg.version %>.css']
        }
      }
    },
    
    copy: {
      fonts: {
        files: [
          {
            src: ['app/bower_components/bootstrap/dist/fonts/*'], 
            dest: 'public/fonts/'
          }
        ]
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Default task(s).
  grunt.registerTask('default', ['concat:jsdist', 'compass:dist', 'concat:cssdist', 'uglify', 'cssmin', 'copy:fonts']);

};
