const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');

const data = require('../src/js/data.js');

const paths = {
  srcDir: 'src/markup/',
  svgDir: 'src/img/svg/',
  destDir: 'build'
};

const options = {
  ignorePartials: true,
  batch: [
    `${paths.srcDir}partials/`,
    `${paths.svgDir}`,
  ]
};

const markup = () => gulp.src(`${paths.srcDir}index.hbs`)
  .pipe(handlebars(data, options))
  .pipe(rename('index.html'))
  .pipe(gulp.dest(paths.destDir));

gulp.task('markup', markup);

module.exports = {
  paths,
};