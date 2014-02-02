### Gulp Structure Setup

This is a initial structure for project using gulp to build.

#### Structure
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
```

#### Todo

- Add [gulp-usemin](https://npmjs.org/package/gulp-usemin)
- Define what will be the dist folder and 'build' folder