const gulp = require('gulp');

const css = require('./css');
const js = require('./js');
const markup = require('./markup');
const utils = require('./utils');

const watchCss = () =>
  gulp.watch(`${css.paths.srcDir}**/*.scss`, gulp.series('css:dev'));

const watchJs = () =>
  gulp.watch([`${js.paths.srcDir}**/*.js`], gulp.series('js:dev'));

const watchMarkup = () =>
  gulp.watch(`${markup.paths.srcDir}**/*.*`, gulp.series('markup'));

const watch = () => {
  utils.browserSync.init({
    server: {
      baseDir: './build',
    },
    notify: false,
    watch: true,
  });

  watchCss();
  watchJs();
  watchMarkup();
}

gulp.task('watch', watch);
gulp.task('watch:js', watchJs);
gulp.task('watch:css', watchCss);
gulp.task('watch:markup', watchMarkup);