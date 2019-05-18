const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const browserify = require('browserify');
const vinylSourceStream = require('vinyl-source-stream');
const vinylBuffer = require('vinyl-buffer');
const uglify = require('gulp-uglify');

const utils = require('./utils');

const paths = {
  srcDir : 'src/js/',
  destDir : 'build/js/',
  srcFile : 'app.js',
  destFile : 'app.js'
};

const compile = {
  dev: () => browserify({ entries: `${paths.srcDir}${paths.srcFile}`, debug: true })
    .transform('babelify', { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(vinylSourceStream(paths.destFile))
    .pipe(vinylBuffer())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.destDir))
    .pipe(utils.browserSync.stream({ match: '**/*.js' })),

  build: () => browserify({ entries: `${paths.srcDir}${paths.srcFile}`, debug: false })
    .transform('babelify', { presets: ['@babel/preset-env'] })
    .bundle()
    .pipe(vinylSourceStream(paths.destFile))
    .pipe(vinylBuffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.destDir))
    .pipe(utils.browserSync.stream({ match: '**/*.js' })),
};

gulp.task('js:dev', compile.dev);
gulp.task('js:build', compile.build);

module.exports = {
  paths,
};