grunt-gitkeep
=============

Create .gitkeep ( or other name) file which empty folder.

## Getting Started

This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-gitkeep --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-gitkeep');
```

## The "gitkeep" task

### Overview
In your project's Gruntfile, add a section named `gitkeep` to the data object passed into `grunt.initConfig()`.

- Simple usage

```js
gitkeep : {
  simple : ['some/keepdir']
}
```

- Multiple directory

```
gitkeep : {
  multi : ['tmp/multi1','tmp/multi2']
}
```

- Create custom name

```
custom_name: {
  src : ['tmp/opt'],
  options : {
    keepFileName : 'keepme.txt' // custom create file name.
  }
}
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

