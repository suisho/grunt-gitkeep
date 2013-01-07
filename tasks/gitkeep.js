'use strict';
var emptykeep = require('emptykeep');

module.exports = function(grunt){
  grunt.registerMultiTask('gitkeep', function(){
    var option = this.options({
    });
    // TODO: ditch this when grunt v0.4 is released
    grunt.util = grunt.util || grunt.utils;
    var done = this.async();
    var files = this.file.src;
    grunt.util.async.forEachSeries(files, function(filePath, next){
      emptykeep(filePath, option, function(err){
        if(err){
          grunt.warn(err)
          done();
        }
        next()
      })
    }, function(){
      done()
    })
  })
};
