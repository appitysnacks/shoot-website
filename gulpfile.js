var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var autoprefixer = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var combineMq = require('gulp-combine-mq');


var paths = {
	sass: ['./sass/**/*.scss']
};

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: './'
    });

    gulp.watch('sass/**/*.scss', ['sass']);
    gulp.watch('*.html').on('change', browserSync.reload);
});

gulp.task('sass', function() {
  return gulp.src('./sass/shoot.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        style: 'expanded',
        errLogToConsole: false,
        onError: function(err) {
            return notify().write(err);
        }
    }))
    .pipe(sourcemaps.write())
    .pipe(combineMq())
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./css/'))
    // .pipe(rename({suffix: '.min'}))
    // .pipe(minifyCss())
    // .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream())
    .pipe(notify({ message: 'SkyBlue css generated' }));
});


gulp.task('watch', function() {
	gulp.watch(paths.sass, ['sass']);
});


gulp.task('default', ['serve']);
