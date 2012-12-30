'use strict';
module.exports = function(grunt){
  grunt.initConfig({
    jshint : {
      all : [
        'Gruntfile.js',
        'tasks/*.js',
        'test/*.js'
      ],
      jshintrc: '.jshintrc'
    },
    watch : {
      all : {
        files : ['<%= jshint.all %>'],
        tasks : ['default'],
        options: {interrupt: true}
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['jshint']);
};
