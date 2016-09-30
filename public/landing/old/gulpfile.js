var gulp = require('gulp');
// var del = require('del');
// var runSequence = require('run-sequence');
// var minifyHTML = require('gulp-minify-html');
// var minifyInline = require('gulp-minify-inline');
// var size = require('gulp-size');
// var uglify = require('gulp-uglify');
// var gutil = require('gulp-util');
// var htmlmin = require('gulp-htmlmin');

// gulp.task('default', function() {
//   console.log('Gulp is up and running.');
//   runSequence(
//     'clean',
//     'minifyBowerComponents',
//     'uglify',
//     'copy'
//   );
// });

// gulp.task('minify', function() {
//   return gulp.src([
//     '*.html',
//     '!index.html'
//   ]).pipe(minifyInline())
//     .pipe(htmlmin())
//     // .pipe(minifyHTML())
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('uglify', function() {
//   return gulp.src([
//     'bower_components/**/*.js',
//     'bower_components/webcomponentsjs/**/*.js',
//     '!bower_components/lodash/**/*.js',
//     '!bower_components/webcomponentsjs/**/*.js',
//     '!bower_components/**/demo/**/*.js',
//     '!bower_components/**/test/**/*.js',
//   ]).pipe(size({
//     pretty: !0,
//     title: 'Before uglify...'
//   })).pipe(uglify().on('error', gutil.log))
//     .pipe(size({
//       pretty: !0,
//       title: 'After uglify...'
//     }))
//     .pipe(size({
//       pretty: !0,
//       title: 'After uglify and minify...',
//       gzip: !0
//     }))
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('copy', function() {
//   return gulp.src([
//     'bower_components/lodash/**/*.min.js',
//     'bower_components/webcomponentsjs/**/*.min.js',
//   ], { base: 'bower_components' })
//       .pipe(size({
//         pretty: !0,
//         title: 'Before copy...',
//         gzip: !0
//       })).pipe(gulp.dest('dist'));
// });

// gulp.task('minifyBowerComponents', function() {
//   return gulp.src([
//     'bower_components/**/*.html',
//     '!bower_components/**/index.html',
//     '!bower_components/**/demo/**/*.html',
//     '!bower_components/**/test/**/*.html',
//   ]).pipe(size({
//       pretty: !0,
//       title: 'Before minify...'
//     }))
//     .pipe(minifyInline())
//     .pipe(htmlmin())
//     .pipe(size({
//       pretty: !0,
//       title: 'After minify...'
//     }))
//     .pipe(size({
//       gzip: !0,
//       pretty: !0,
//       title: 'After minify and gzip...'
//     }))
//     // .pipe(minifyHTML())
//     .pipe(gulp.dest('dist'));
// });

// gulp.task('clean', function() {
//   return del([
//     'dist'
//   ]);
// });
gulp.task('generate-service-worker', function(callback) {
  var path = require('path');
  var swPrecache = require('sw-precache');
  var rootDir = '';

  swPrecache.write(path.join(rootDir, 'sw.js'), {
    staticFileGlobs: [
      rootDir + 'dist/**/*.{js,html,css}',
      rootDir + 'img/**/*.{png,ico,svg,webp}',
      rootDir + 'elements/**/*.html',
      rootDir + 'data/**/*.json',
      rootDir + 'app.js',
      rootDir + 'index.html',
      rootDir + 'manifest.json',
    ],
    stripPrefix: rootDir
  }, callback);
});