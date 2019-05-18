const gulp = require('gulp');
const gh = require('gulp-gh-pages');

const options = {
  branch: 'master',
  cacheDir: '.publish',
};

const publish = () => gulp.src('build/**/*')
  .pipe(gh(options))

gulp.task('publish', publish);