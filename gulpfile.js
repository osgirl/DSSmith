
var gulp = require('gulp'), 
watch = require('gulp-watch');
browserSync = require('browser-sync').create(),
prefix = require('gulp-autoprefixer'),
sass = require('gulp-sass');


gulp.task('default', function(){
    console.log('test');
});

gulp.task('watch', function(){

    browserSync.init({
        server: {baseDir:"app"}
    });

    watch('./app/index.html', function(){
        browserSync.reload();
    });
    watch('./app/sass/**/*.scss', function(){
        gulp.start('sass');
    });

    watch('./app/css/style.css', function(){
        gulp.start('cssInject');
    });
    
});

gulp.task('sass', function () {
    gulp.src('./app/sass/style.scss')
      .pipe(sass({
        includePaths: [require('node-normalize-scss').includePaths, 'sass']
      }))
      .pipe(prefix(
        "last 1 version", "> 1%", "ie 8", "ie 7"
        ))
      .pipe(gulp.dest('./app/css'));
  });

gulp.task('cssInject', function(){
    return gulp.src('./app/css/style.css')
    .pipe(browserSync.stream());
});