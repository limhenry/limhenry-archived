var gulp = require('gulp');
var postcss = require('gulp-postcss');
var minifycss = require('gulp-minify-css');
var autoprefixer = require('autoprefixer');
const imagemin = require('gulp-imagemin');
var htmlmin = require('gulp-htmlmin');

gulp.task('build', function () {
  gulp.run('css');
  gulp.run('html');
  gulp.run('images');
});

gulp.task('css', function () {
  return gulp.src('./styles/*.css')
    .pipe(postcss([autoprefixer()]))
    .pipe(minifycss())
    .pipe(gulp.dest('./build/styles'));
});

gulp.task('images', function () {
  gulp.src('images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./build/images'))
});

gulp.task('html', function () {
  return gulp.src('*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./build'));
});