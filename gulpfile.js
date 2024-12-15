const gulp = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');
const concat = require('gulp-concat');

gulp.task('compress', function() {
  return gulp.src(['src/liturgical-calendars-select.js', 'src/litcal-api-client.js'])
    .pipe(terser())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('dist'))
});
gulp.task('bundle', function() {
  return gulp.src(['dist/liturgical-calendars-select.min.js', 'dist/litcal-api-client.min.js'])
    .pipe(concat('liturgy-components-jquery.min.js'))
    .pipe(gulp.dest('dist'))
});
