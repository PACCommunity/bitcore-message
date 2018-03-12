'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-pac');

bitcoreTasks('message-pac');

gulp.task('default', ['lint', 'coverage']);
