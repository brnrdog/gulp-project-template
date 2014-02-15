/* globals require */

'use strict';

// gulp plugins
var gulp     = require('gulp'),
gutil        = require('gulp-util'),
es           = require('event-stream'),
sass         = require('gulp-ruby-sass'),
autoprefixer = require('gulp-autoprefixer'),
jshint       = require('gulp-jshint'),
coffee       = require('gulp-coffee'),
clean        = require('gulp-clean'),
connect      = require('gulp-connect'),
browserify   = require('gulp-browserify'),
usemin       = require('gulp-usemin'),
imagemin     = require('gulp-imagemin');

// Connect Task
gulp.task('connect', connect.server({
  root: ['./app'],
  port: 1337,
  livereload: true
}));

gulp.task('html', function () {
  return gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

// Scss compiler task
gulp.task('scss', function () {
  return gulp.src('./app/styles/**/*.scss')
  .pipe(sass({style: 'expanded'}), gutil.log('Compiling scss files...'))
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'), gutil.log('Applying autoprefixer...'))
  .pipe(gulp.dest('./app/styles/'))
  .pipe(connect.reload(), gutil.log('Reloading browser...'));
});

// Minify images

gulp.task('imagemin', function () {
  return es.concat(
    gulp.src('./app/images/**/*.png')
      .pipe(imagemin())
      .pipe(gulp.dest('/dest/img')),
    gulp.src('./app/images/**/*.jpg')
      .pipe(imagemin())
      .pipe(gulp.dest('/dest/img')),
    gulp.src('./app/images/**/*.gif')
      .pipe(imagemin())
      .pipe(gulp.dest('/dest/img'))
  );
});

// CoffeeScript compiler task
gulp.task('coffee', function () {
  return gulp.src('app/scripts/**/*.coffee')
    .pipe(coffee({bare: true})).on('error', gutil.log)
    .pipe(gulp.dest('app/scripts'));
});

// JSHint task
gulp.task('scripts', ['coffee'], function () {
  return gulp.src('app/scripts/**/*.js')
    .pipe(jshint(), gutil.log('Running jsHint'))
    .pipe(jshint.reporter('default'))
    .pipe(browserify({
      insertGlobals: true,
      debug: !gulp.env.production
    }))
    .pipe(gulp.dest('app/scripts'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch([ 'app/styles/**/*.scss'], ['scss']);
  gulp.watch([ 'app/scripts' + '/**/*.coffee'], ['scripts']);
  gulp.watch(['./app/**/*.html'], ['html']);
});

gulp.task('serve', ['connect', 'scss', 'scripts', 'watch']);

gulp.task('clean', function () {
  gutil.log('Clean task goes here...');
});

gulp.task('usemin', function () {
  gulp.src('./app/**/*.html')
    .pipe(usemin(), gutil.log('Running usemin...'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean-build', function () {
  gulp.src('dist/', {read: false})
    .pipe(clean());
});

gulp.task('build', ['clean-build', 'scss', 'scripts', 'imagemin', 'usemin'], function () {
});

gulp.task('default', function () {
  gutil.log('Default task goes here...');
});
