const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const del = require('del');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const paths = {
    scss: {src: './scss/**/*.scss', dest: './dist/'},
    babel: {src: './scripts/**/*.js', dest: './dist/scripts/'},
    html: {src: './index.html'}
};

// gulp.task('clean', () => {
//     return del(['./dist/**/*']);
// });

gulp.task('build', ['sass', 'babel']);

// gulp.task('assets', function () {
//     return gulp.src('./assets/**/*')
//         .pipe(gulp.dest('./dist/'))
// });

gulp.task('sass', () => {
    return gulp.src(paths.scss.src)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '>5%', 'Firefox ESR'],
            cascade: false
        }))
        .pipe(gulp.dest(paths.scss.dest))
        .pipe(browserSync.stream());
});

gulp.task('babel', () => {
    return gulp.src(paths.babel.src)
        .pipe(babel({ presets: ['env'] }))
        .pipe(gulp.dest(paths.babel.dest))
        .pipe(browserSync.stream());
});

gulp.task('watch', ['build'],() => {
    browserSync.init({ server: './' });

    gulp.watch(paths.scss.src, ['sass']);
    gulp.watch(paths.babel.src, ['babel']);
    gulp.watch(paths.html.src).on('change', browserSync.reload);
});