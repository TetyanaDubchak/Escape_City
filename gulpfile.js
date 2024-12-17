const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');

gulp.task('styles', function() {
  return gulp.src('./src/scss/**/*.scss') 
    .pipe(sass().on('error', sass.logError)) 
    .pipe(cleanCSS())
    .pipe(gulp.dest('./dist/css')) 
    .pipe(browserSync.stream());
});


gulp.task('serve', function() {
  browserSync.init({
    server: {
      baseDir: './' 
    }
  });

  gulp.watch('./src/scss/**/*.scss', gulp.series('styles')); 
  gulp.watch('./*.html').on('change', browserSync.reload);
});


gulp.task('default', gulp.series('styles', 'serve'));
