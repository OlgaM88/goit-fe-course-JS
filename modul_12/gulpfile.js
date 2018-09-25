const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const htmlmin = require('gulp-htmlmin');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const sequence = require('run-sequence');

gulp.task('html', () =>
  gulp
    .src('./src/*.html')
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
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('./build/'))
    .pipe(cssnano())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('./build/'))
);

gulp.task('scripts', () =>
  gulp
    .src('./src/*.js')
    .pipe(
      babel({
        presets: ['env'],
      }),
    )
    .pipe(gulp.dest('./build/js'))
    .pipe(uglify())
    .pipe(rename('scripts.min.js'))
    .pipe(gulp.dest('./build/js')),
);

gulp.task('watch', () => {
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/*.scss', ['styles']);
    gulp.watch('src/*.js', ['scripts']);
  });

  gulp.task('build', cb =>
  sequence(
    'styles',
    'html',
    'scripts',
    cb,
  ),
);
gulp.task('start', cb => sequence('build', 'watch'));

