/* globals require */

'use strict';

var gulp     = require('gulp'),
gutil        = require('gulp-util'),
sass         = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
clean        = require('gulp-clean'),
jshint       = require('gulp-jshint'),
concat       = require('gulp-concat');

// Paths variables
var stylesPath = 'app/assets/styles',
scriptsPath    = 'app/assets/scripts';


gulp.task('styles', function () {
  return gulp.src(stylesPath + '/**/*.scss')
  .pipe(sass({style: 'expanded'}), gutil.log('Compiling styles', 'Styles compiled'))
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest(stylesPath));
});

gulp.task('scripts', function () {
  return gulp.src(scriptsPath + '/**/*.js')
  .pipe(jshint(), gutil.log('Running jsHint'))
  .pipe(jshint.reporter('default'))
  .pipe(concat('script.js'), gutil.log('Concatenating scripts files', 'Done'))
  .pipe(gulp.dest(scriptsPath));
});

gulp.task('clean', function () {
  return gulp.src([stylesPath + '**/*.css', ], {read: false})
  .pipe(clean());
});