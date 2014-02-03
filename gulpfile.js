/* globals require */

'use strict';

// gulp plugins
var gulp     = require('gulp'),
gutil        = require('gulp-util'),
sass         = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
jshint       = require('gulp-jshint'),
coffee       = require('gulp-coffee'),
concat       = require('gulp-concat');

// paths variables
var stylesPath = 'app/assets/styles',
scriptsPath    = 'app/assets/scripts';

gulp.task('styles', function () {
  return gulp.src(stylesPath + '/**/*.scss')
  .pipe(sass({style: 'expanded'}), gutil.log('Compiling styles', 'Styles compiled'))
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest(stylesPath));
});

gulp.task('coffee', function () {
  return gulp.src(scriptsPath + '/**/*.coffee')
  .pipe(coffee({bare: true})).on('error', gutil.log)
  .pipe(gulp.dest(scriptsPath));
});

gulp.task('scripts', ['coffee'], function () {
  return gulp.src(scriptsPath + '/**/*.js')
  .pipe(jshint(), gutil.log('Running jsHint'))
  .pipe(jshint.reporter('default'))
  .pipe(concat('script.js'), gutil.log('Concatenating scripts files', 'Done'))
  .pipe(gulp.dest(scriptsPath));
});

gulp.task('clean', function () {
  gutil.log('Clean task goes here...');
});

gulp.task('build', function () {
  gutil.log('Build task goes here...');
});

gulp.task('serve', function () {
  gutil.log('Serve task goes here...');
});

gulp.task('default', function () {
  gutil.log('Default task goes here...');
});