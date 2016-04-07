/**
 * Created by Shahid on 2/15/2016.
 */

var gulp = require('gulp');
var concat = require('gulp-concat');

var scripts = [
    // Vendor Scripts
    //
    'vendor/jquery/dist/jquery.js',
    'vendor/bootstrap/dist/js/bootstrap.js',
    'vendor/angular/angular.js',
    'vendor/angular-route/angular-route.js',

    // Application Scripts
    //
    'app/*.js',
    'app/Controllers/*.js'

];

var styles = [
    // Vendor Scripts
    //
    'vendor/bootstrap/dist/css/bootstrap.css',
    'vendor/bootstrap/dist/css/bootstrap-theme.min.css',

    // Application Scripts
    //
    'res/styles/**/*.css'
];

var layouts = ['res/layouts/**/*.html'];
var images = ['res/images/**/*.*'];
var index = ['app/index.html'];
var fonts = ['vendor/bootstrap/dist/fonts/*.*'];


// Tasks List
//
gulp.task('default', ['build', 'watch']);
gulp.task('build', ['copy-index', 'scripts', 'styles', 'layouts', 'images', 'fonts']);


/**
 * layouts concatenation
 *
 */
gulp.task('copy-index', function () {
    return gulp.src(index)
        .pipe(gulp.dest('build/'));
});


/**
 * Scripts concatenation
 *
 */
gulp.task('scripts', function () {
    return gulp.src(scripts)
        .pipe(concat('contacts.js'))
        .pipe(gulp.dest('build/js/'));
});

/**
 * Styles concatenation
 *
 */
gulp.task('styles', function () {
    return gulp.src(styles)
        .pipe(concat('contacts.css'))
        .pipe(gulp.dest('build/css/'));
});

/**
 * layouts concatenation
 *
 */
gulp.task('layouts', function () {
    return gulp.src(layouts)
        .pipe(gulp.dest('build/views'));
});

/**
 * layouts concatenation
 *
 */
gulp.task('images', function () {
    return gulp.src(images)
        .pipe(gulp.dest('build/images'));
});

/**
 * layouts concatenation
 *
 */
gulp.task('fonts', function () {
    return gulp.src(fonts)
        .pipe(gulp.dest('build/fonts'));
});

/**
 * Watch files for changes
 *
 */
gulp.task('watch', function () {
    var list = [];
    list = list.concat(scripts, styles, images, layouts, index);
    return gulp.watch(list, ['build']);
});
