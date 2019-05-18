const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const rename = require('gulp-rename');

const utils = require('./utils');

const paths = {
  srcDir: 'src/scss/',
  srcFile: 'app.scss',
  destDir: 'build/css/',
  destFile: 'app.css',
};

const sassDevOptions = {
  outputStyle : 'expanded',
  precision : 10,
  sourceMap : true,
};

const sassBuildOptions = {
  outputStyle : 'compressed',
  precision : 10,
  sourceMap : false,
};

const postcssDevProcessors = [
  autoprefixer({browsers: ['ios >= 9']}),
];

const postcssBuildProcessors = [
  autoprefixer({browsers: ['ios >= 9']}),
  cssnano(),
];

const compile = {
  dev: () => gulp.src(`${paths.srcDir}${paths.srcFile}`)
    .pipe(sourcemaps.init())
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(postcss(postcssDevProcessors))
    .pipe(rename(paths.destFile))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.destDir))
    .pipe(utils.browserSync.stream({ match: '**/*.css' })),

  build: () => gulp.src(`${paths.srcDir}${paths.srcFile}`)
    .pipe(sass(sassBuildOptions).on('error', sass.logError))
    .pipe(postcss(postcssBuildProcessors))
    .pipe(rename(paths.destFile))
    .pipe(gulp.dest(paths.destDir))
    .pipe(utils.browserSync.stream({ match: '**/*.css' })),
};

gulp.task('css:dev', compile.dev);
gulp.task('css:build', compile.build);

module.exports = {
  paths,
};