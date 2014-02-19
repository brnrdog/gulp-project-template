/* globals require, exports */

'use strict';

// gulp plugins
var gulp     = require('gulp'),
gutil        = require('gulp-util'),
es           = require('event-stream'),
sass         = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
jshint       = require('gulp-jshint'),
coffee       = require('gulp-coffee'),
clean        = require('gulp-clean'),
connect      = require('gulp-connect'),
browserify   = require('gulp-browserify'),
usemin       = require('gulp-usemin'),
imagemin     = require('gulp-imagemin'),
rename = require('gulp-rename');

// Connect Task
gulp.task('connect', connect.server({
  root: ['./app'],
  port: 1337,
  livereload: true
}));

// Html reload
gulp.task('html', function () {
  return gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

// sass compiler task
gulp.task('sass', function () {
  return gulp.src('./app/styles/**/*.scss')
    .pipe(sass({
      onError: function (error) {
        gutil.log(gutil.colors.red(error));
        gutil.beep();
      },
      onSuccess: function () {
        gutil.log(gutil.colors.green('Sass styles compiled successfully.'));
      }
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./app/styles/'))
    .pipe(connect.reload());
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

// Script task
gulp.task('scripts', ['coffee'], function () {
  return gulp.src('app/scripts/app.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename(function (path) {
      path.basename = 'bundle';
    }))
    .pipe(gulp.dest('app/scripts'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch([ 'app/styles/**/*.scss'], ['sass']);
  gulp.watch([ 'app/scripts' + '/**/*.js'], ['scripts']);
  gulp.watch(['./app/**/*.html'], ['html']);
});

gulp.task('serve', ['connect', 'sass', 'scripts', 'watch']);

gulp.task('clean', function () {
  gutil.log('Clean task goes here...');
});

gulp.task('usemin', function () {
  gulp.src('./app/**/*.html')
    .pipe(usemin())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean-build', function () {
  return gulp.src('dist/', {read: false})
    .pipe(clean());
});

gulp.task('build', ['clean-build', 'sass', 'scripts', 'imagemin', 'usemin'], function () {
});

gulp.task('default', function () {
  gutil.log('Default task goes here...');
});