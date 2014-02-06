/* globals require */

'use strict';

// gulp plugins
var gulp     = require('gulp'),
gutil        = require('gulp-util'),
sass         = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
jshint       = require('gulp-jshint'),
coffee       = require('gulp-coffee'),
clean       = require('gulp-clean'),
connect      = require('gulp-connect'),
usemin       = require('gulp-usemin');

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
  .pipe(gulp.dest(scriptsPath));
});

gulp.task('connect', connect.server({
  root: './app',
  port: 1337,
  livereload: true,
  open: {
    file: 'index.html',
    browser: 'Google Chrome'
  }
}));

gulp.task('watch', function () {
  gulp.watch([ stylesPath + '/**/*.scss'], ['styles']);
  gulp.watch([ scriptsPath + '/**/*.coffee'], ['scripts']);
  gulp.watch([
    './app/**/*.html',
    './app/assets/styles/**/*.css',
    './app/assets/scripts/**/*.js'
  ], connect.reload);
});

gulp.task('serve', ['connect', 'styles', 'scripts', 'watch']);

gulp.task('clean', function () {
  gutil.log('Clean task goes here...');
});

gulp.task('usemin', function () {
  gulp.src('./app/**/*.html')
  .pipe(usemin(), gutil.log('Running usemin...'))
  .pipe(gulp.dest('dist/'));
});

gulp.task('clean-build', function () {
  gulp.src('dist/', {read: false})
  .pipe(clean());
});

gulp.task('build', ['styles', 'scripts', 'clean-build'], function () {
  return gulp.start('usemin');
});

gulp.task('default', function () {
  gutil.log('Default task goes here...');
});