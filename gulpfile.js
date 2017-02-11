'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');

gulp.task('default', ['browser-sync'], function() {

});

gulp.task('browser-sync', ['nodemon'], function() {
    browserSync.init({
        proxy: "http://localhost:8000",
        files: ["bin/www"]
    });
});

gulp.task('nodemon', function(cb) {
    var started = false;
    return nodemon({
        script: './bin/www'
    }).on('start', function() {
        // to avoid nodemon being started multiple times
        if(!start) {
            cb();
            started = true;
        }
    });
});