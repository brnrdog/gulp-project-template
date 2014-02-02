/* globals require */

'use strict';

var gulp = require('gulp'),
gutil    = require('gulp-util'),
sass         = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
clean        = require('gulp-clean');

var stylesPath = 'app/assets/styles';


gulp.task('styles', function () {
  return gulp.src(stylesPath + '/**/*.scss')
  .pipe(sass({style: 'expanded'}), gutil.log('Compiling styles', 'Styles compiled'))
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest(stylesPath));
});

gulp.task('clean', function () {
  return gulp.src([stylesPath + '**/*.css', ], {read: false})
  .pipe(clean());
});