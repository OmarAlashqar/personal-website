const gulp = require('gulp');

const utils = require('./utils');

const paths = {
  srcDir: 'public/',
  buildDir: 'build/',
};

const copyAssets = () => gulp.src(`${paths.srcDir}**/*`)
  .pipe(gulp.dest(`${paths.buildDir}`))
  .pipe(utils.browserSync.stream());

gulp.task('assets', copyAssets);