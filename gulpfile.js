const gulp = require('gulp');
const terser = require('gulp-terser');
const rename = require('gulp-rename');

gulp.task('compress', function() {
  return gulp.src(['src/liturgical-calendars-select.js'])
    .pipe(terser())
    .pipe(rename({ extname: '.min.js' }))
    .pipe(gulp.dest('dist'))
});
