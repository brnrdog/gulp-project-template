/* globals require, describe, it */

'use strict';

var assert = require('assert');
var gulp = require('../gulpfile');
var fs = require('fs');

describe('Gulpfile', function(){

  before(function(done) {
    gulp.run;
    done();
  });

  it('compiles scss files with success', function(){
    fs.exists('./app/styles/main.scss', function(exists) {
      assert.equal(true, exists);
    });
  });
});