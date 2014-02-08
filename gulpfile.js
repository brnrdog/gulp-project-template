/* globals require */

'use strict';

// gulp plugins
var gulp     = require('gulp'),
gutil        = require('gulp-util'),
sass         = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
jshint       = require('gulp-jshint'),
coffee       = require('gulp-coffee'),
clean        = require('gulp-clean'),
connect      = require('gulp-connect'),
usemin       = require('gulp-usemin');

// Connect Task
gulp.task('connect', connect.server({
  root: './app',
  port: 1337,
  livereload: true
}));

gulp.task('html', function () {
  return gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

// Scss compiler task
gulp.task('scss', function () {
  return gulp.src('./app/assets/styles/**/*.scss')
  .pipe(sass({style: 'expanded'}), gutil.log('Compiling scss files...'))
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'), gutil.log('Applying autoprefixer...'))
  .pipe(gulp.dest('./app/assets/styles/'))
  .pipe(connect.reload(), gutil.log('Reloading browser...'));
});

// CoffeeScript compiler task
gulp.task('coffee', function () {
  return gulp.src('app/assets/scripts/**/*.coffee')
    .pipe(coffee({bare: true})).on('error', gutil.log)
    .pipe(gulp.dest('app/assets/scripts'));
});

// JSHint task
gulp.task('scripts', ['coffee'], function () {
  return gulp.src('app/assets/scripts/**/*.js')
    .pipe(jshint(), gutil.log('Running jsHint'))
    .pipe(jshint.reporter('default'))
    .pipe(gulp.dest('app/assets/scripts'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch([ 'app/assets/styles/**/*.scss'], ['scss']);
  gulp.watch([ 'app/assets/scripts' + '/**/*.coffee'], ['scripts']);
  gulp.watch(['./app/**/*.html'], ['html']);
});

gulp.task('serve', ['connect', 'scss', 'scripts', 'watch']);

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

gulp.task('build', ['scss', 'scripts', 'clean-build'], function () {
  return gulp.start('usemin');
});

gulp.task('default', function () {
  gutil.log('Default task goes here...');
});