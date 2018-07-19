// INCLUDE GULP
var gulp = require('gulp');

// INCLUDE PLUGINS
var babel = require('gulp-babel');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minify = require('gulp-minify');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var jswrap = require('gulp-js-wrapper');
var autoprefixer = require('gulp-autoprefixer');


// LINT JS
gulp.task('lint', function() {
    return gulp.src('public/_js/*.js')
        .pipe(jshint())
        .pipe(plumber())
        .pipe(jshint.reporter('default'))       
});


// COMPILE SASS
gulp.task('sass', function () {
  return gulp.src('public/_sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions','last 3 iOS versions','> 1%'],
      cascade: true
    }))    
    .pipe(gulp.dest('dist/css'));
});


// CONCATENATE & MINIFY JS
gulp.task('scripts', function() {
    return gulp.src([
          'public/_js/**/*.js',
          'public/_js/*.js',
        ])
        .pipe(babel({
          presets: ['env']
        }))
        .pipe(concat('scripts.js'))
        .pipe(plumber())
        .on('error', function(error) {
          // Would like to catch the error here 
          //console.log(error);
          //console.log(error.toString())
          console.log('SCRIPTS ERROR');
          this.emit('end')
        })           
        
        // .pipe(jswrap({
        //     // pass a safe undefined into the encapsulation
        //     opener: '$(document).ready(function() {',
        //     closer: '});'
        // }))

        .pipe(gulp.dest('dist/js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});


// WATCH FILES FOR CHANGES
gulp.task('watch', function() {
  gulp.watch([
        'public/_js/*.js',
        'public/_js/**/*.js',
    ], gulp.series('scripts'));
  gulp.watch([
        'public/_sass/*.sass',
        'public/_sass/**/*.sass',
    ], gulp.series('sass'));
});



// DEFAULT TASK
gulp.task('default', gulp.series('sass','scripts','watch'));
