'use strict';

var config       = require('../config');
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var gulpif       = require('gulp-if');
var browserSync  = require('browser-sync');
var handleErrors = require('../util/handleErrors');

gulp.task('styles', function(){
  gulp.src(config.styles.src)
    .pipe(sass({
      includePaths: require('node-refills').includePaths,
      style: 'compressed',
      quiet: true
    }))
    .on('error', handleErrors)
    .pipe(gulp.dest(config.styles.dest))
    .pipe(gulpif(browserSync.active, browserSync.reload({ stream: true })));
});
