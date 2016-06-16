var gulp        = require('gulp');
var babel       = require('gulp-babel');
var browserify  = require('browserify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var sourcemaps  = require('gulp-sourcemaps');
var uglify      = require('gulp-uglify');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var del         = require('del');
var sass        = require('gulp-sass');


gulp.task('transpile', function () {

    return gulp.src('app/src/**/*.js')
        .pipe(babel())
        .pipe(gulp.dest('app/dist'));
});

gulp.task('bundle', ['transpile'], function() {

    var libraryName = 'app';
    var mainFilePath = './app/dist/Main.js';
    var outputFolder   = './js/';
    var outputFileName = libraryName + '.js';

    var bundler = browserify({
        debug: true,
        standalone : libraryName
    });

    return bundler.add(mainFilePath)
        .bundle()
        .pipe(source(outputFileName))
        .pipe(buffer())
        .pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(outputFolder));
});

gulp.task('clean:dist',['bundle'], function () {
    return del(['app/dist']);
});

gulp.task('sass', function () {
    return gulp.src('app/style/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'));
});

gulp.task('build', ['transpile','bundle','clean:dist']);

gulp.task('default', ['sass','build']);

gulp.task('watch', ['default'], function () {

    browserSync.init({
        server: '.'
    });

    gulp.watch([ 'app/src/**/*'], ['build']);
    gulp.watch([ 'app/style/**/*'], ['sass']);
    gulp.watch('js/*.js').on('change', browserSync.reload); 
    gulp.watch('css/*.css').on('change', browserSync.reload); 
    gulp.watch('index.html').on('change', browserSync.reload); 
});