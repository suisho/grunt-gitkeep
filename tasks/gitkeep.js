'use strict';
var emptykeep = require('emptykeep');

module.exports = function(grunt){
  grunt.registerMultiTask('gitkeep', function(){
    var option = this.options({
    });
    var done = this.async();
    emptykeep(this.file.src, option, function(){
      done();
    });
  });
};
