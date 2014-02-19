'use strict';
var emptykeep = require('emptykeep');

module.exports = function(grunt){
  grunt.registerMultiTask('gitkeep', function(){
    var option = this.options({
    });
    // TODO: ditch this when grunt v0.4 is released
    grunt.util = grunt.util || grunt.utils;
    var done = this.async();
    grunt.util.async.forEachSeries(this.files, function(f, next){
      var files = f.src
      grunt.util.async.forEachSeries(files, function(file, nextFile){
        emptykeep(file, option, function(err){
          if(err){
            grunt.warn(err)
            done();
          }
          nextFile()
        })
      }, function(){
        next()
      })
    }, function(){
      done()
    })

  })
};
