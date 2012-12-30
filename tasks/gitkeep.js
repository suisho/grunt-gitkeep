'use strict';
var emptykeep = require('emptykeep');
module.exports = function(grunt){
  grunt.registerTask('gitkeep', function(){
    var option = grunt.option();
    var done = grunt.async();
    emptykeep(this.file.src, option, function(){
      done();
    });
  });
};
