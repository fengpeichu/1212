var gulp = require('gulp');
var sass = require('gulp-sass');
var server = require('gulp-webserver');
gulp.task('sass', function() {
    return gulp.src('./src/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});
gulp.task('watch', function() {
    return gulp.watch('./src/scss/style.scss', gulp.series('sass'));
})
gulp.task('server', function() {
    return gulp.src('src')
        .pipe(server({
            port: '9090'
        }))
});
gulp.task('dev', gulp.series('server', 'sass', 'watch'));