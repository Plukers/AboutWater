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


gulp.task('transpile', function () {

    return gulp.src('src/*.js')
        .pipe(babel())
        .pipe(gulp.dest('dist'));
});

gulp.task('bundle', ['transpile'], function() {

    var libraryName = 'app';
    var mainFilePath = './dist/main.js';
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
  return del(['dist']);
});

gulp.task('default', ['transpile','bundle','clean:dist']);

gulp.task('watch', ['default'], function () {

    browserSync.init({
        server: '.'
    });

    gulp.watch([ 'src/*.js'], ['default']);
    gulp.watch('js/*.js').on('change', browserSync.reload); 
    gulp.watch('index.html').on('change', browserSync.reload); 
});