const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('gulp-cssnano');
const del = require('del');
const htmlmin = require('gulp-htmlmin');
const plumber = require('gulp-plumber');
const rigger = require('gulp-rigger');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const sequence = require('run-sequence');

gulp.task('html', () =>
  gulp
    .src('./src/*.html')
    .pipe(rigger())
    .pipe(
      htmlmin({
        collapseWhitespace: true,
      }),
    )
    .pipe(gulp.dest('./build')),
);

gulp.task('styles', () =>
  gulp
    .src('./src/styles.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./build/css'))
    .pipe(cssnano())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream()),
);

gulp.task('scripts', () =>
  gulp
  .src('./src/*.js')
    .pipe(plumber())
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('./build/js'))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('./build/js')),
);

gulp.task('watch', () => {
  gulp.watch('src/**/*.html', ['html']).on('change', browserSync.reload);
  gulp.watch('src/*.scss', ['styles']).on('change', browserSync.reload);
  gulp.watch('src/*.js', ['scripts']).on('change', browserSync.reload);
});

gulp.task('serve', ['styles', ], () =>
  browserSync.init({
    server: './build',
    notify: false,
    open: true,
    cors: true,
    ui: false,
    logPrefix: 'DevServer',
    host: 'localhost',
    port: 3000,
  }),
);

gulp.task('del:build', () => del('./build'));


gulp.task('build', cb =>
  sequence(
    'del:build',
    'styles',
    'html',
    'scripts',
    cb,
  ),
);

gulp.task('start', cb => sequence('build', 'serve', 'watch'));