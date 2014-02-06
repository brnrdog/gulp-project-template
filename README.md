## [gulp.js](http://gulpjs.com/) project template
<a href="http://badge.fury.io/js/gulp-project-template"><img src="https://badge.fury.io/js/gulp-project-template@2x.png" alt="NPM version" height="18"></a>

This is a template or a initial setup for a simple [gulp](http://gulpjs.com/) project. It aims to provide some common tasks to a web app development within a organized structure.

### Structure

A sample project strucutre could be:

```
|-- app
|  |-- bower_modules
|  |-- assets
|  |  |-- styles
|  |  |  |-- style_one.scss
|  |  |  |-- style_two.scss
|  |  |-- scripts
|  |  |  |-- script_one.coffee
|  |  |  |-- script_two.coffee
|  |  |-- images
|  |-- index.html
|-- dist
|  |-- assets
|  |  |-- styles
|  |  |  |-- main.min.css
|  |  |-- scripts
|  |  |  |-- main.min.js
|  |  |-- images
|  |-- index.html
|-- node_modules
|-- test
```

### Build tasks

The tasks this template aims are:

- [x] Compiles scss files
- [x] Minify styles
- [x] Compiles CoffeeScript files
- [x] Runs jsHint against js files
- [ ] Runs mocha tests
- [x] Generates an optimized build 
- [x] Starts a server
- [x] Watches for changes