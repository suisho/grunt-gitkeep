'use strict';
var fs = require('fs-extra');
var touch = require('touch');
var assert = require('assert');
var path = require('path');
function _setup(dir){
  fs.mkdirsSync(dir);
  fs.mkdirsSync(dir+'/empty');
  fs.mkdirsSync(dir+'/not_empty');
  touch.sync(dir+'/not_empty/foo.txt');
  fs.mkdirsSync(dir+'/tree/tree/empty');
  fs.mkdirsSync(dir+'/tree/tree/not_empty');
  touch.sync(dir+'/tree/tree/not_empty/foo.txt');
}
function _assert(dir, name){
  name = name || ".gitkeep";
  assert.ok(fs.existsSync(path.join(dir, '/empty/'+name)))
  assert.ok(!fs.existsSync(path.join(dir,'/not_empty/'+name)))
  assert.ok(fs.existsSync(path.join(dir, '/tree/tree/empty/'+name)))
  assert.ok(!fs.existsSync(path.join(dir,'/tree/tree/not_empty/'+name)))
}
module.exports = function(grunt){
  grunt.initConfig({
    watch : {
      all : {
        files : ['<%= jshint.all %>'],
        tasks : ['default'],
        options: {interrupt: true}
      }
    },
    clean: {
      test: ['tmp/short', 'tmp/long', 'tmp/opt', 'tmp/multi1','tmp/multi2']
    },
    gitkeep : {
      short : ['tmp/short'],
      long : { // not recommend usage
        src : ['tmp/long']
      },
      multi : ['tmp/multi1','tmp/multi2'],
      custom_name: {
        src : ['tmp/opt'],
        options : {
          keepFileName : 'keepme'
        }
      }
    },
    options : {
      'stack' : true
    }
  });
  grunt.registerTask('setup',function(){
    _setup('tmp/short')
    _setup('tmp/long')
    _setup('tmp/opt')
    _setup('tmp/multi1')
    _setup('tmp/multi2')
  });
  grunt.registerTask('assert', function(){
    try{
      _assert('tmp/short')
      _assert('tmp/long')
      _assert('tmp/opt', 'keepme')
      _assert('tmp/multi1')
      _assert('tmp/multi2')
    }catch(e){
      grunt.fatal(e)
    }
  })
  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('test',['clean', 'setup', 'gitkeep', 'assert']);
  grunt.registerTask('default',['test']);
};
