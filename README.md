### NOTE

**This project has moved as part of [GulpShot](https://github.com/bernardogfilho/gulp-shot) project. This repository is discontinued.**

## [gulp.js](http://gulpjs.com/) project template <a href="http://badge.fury.io/js/gulp-project-template"><img src="https://badge.fury.io/js/gulp-project-template@2x.png" alt="NPM version" height="18"></a> [![Dependency Status](https://david-dm.org/bernardogfilho/gulp-project-template.svg?theme=shields.io)](https://david-dm.org/bernardogfilho/gulp-project-template)

This is a template or a initial setup for a simple [gulp](http://gulpjs.com/) project. It aims to provide some common tasks to a web app development within a organized structure.

### Features

- CSS Autoprefixing
- Automatically minify css files
- Automatically compile Sass
- Automatically compile CoffeeScript
- Automatically lint scripts via jsHint
- Automatically uglify script files
- Automatically optimize image files (.jpg, .png, .gif)
- Watches for changes
- Initialize a preview server with LiveReload support
- Generates a optimized build
- Bundles js modules via browserify
- SOON: Runs Mocha tests


### Structure

A sample project strucutre would be:

```
|-- app
|  |-- vendors (bower_components)
|  |-- styles
|  |  |-- style_one.scss
|  |  |-- style_two.scss
|  |-- scripts
|  |  |-- script_one.coffee
|  |  |-- script_two.coffee
|  |-- images
|  |  |-- background.png
|  |-- index.html
|-- dist
|  |-- styles
|  |  |-- main.min.css
|  |-- scripts
|  |  |-- scripts.min.js
|  |-- images
|  |-- index.html
|-- node_modules
|-- test
```

### Copyright

The MIT License (MIT)
Copyright © 2014 Bernardo Gurgel Filho <bernardogfilho@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
