'use strict';

var config         = require('../config');
var gulp         = require('gulp');
var concat       = require('gulp-concat');
var bowerMain    = require('main-bower-files');
var gulpFilter   = require('gulp-filter');
var uglify       = require('gulp-uglify');

gulp.task('bower', function() {

  var jsFilter = gulpFilter('*.js');

  return gulp.src(bowerMain())

    // JS
    .pipe(jsFilter)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.dest));
});
