var gulp = require('gulp');
var path = require('path');
var minifycss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin')

// 压缩 public 目录 css
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});
// 压缩 public 目录 html
gulp.task('minify-html', function() {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
             removeComments: true,
             minifyJS: true,
             minifyCSS: true,
             minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});
// 压缩 public 目录 js
gulp.task('minify-js', function() {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});
// 压缩图片任务
function compressImgsFolder(imgFolder='.') {
    return function () {
        return gulp.src(path.join(imgFolder, '/**/*.{png,jpg,gif,svg}'))
            // imagemin Usage at https://github.com/sindresorhus/gulp-imagemin#user-content-options
            .pipe(imagemin([
                    imagemin.gifsicle({interlaced: true}), 
                    imagemin.jpegtran({progressive: true}), 
                    imagemin.optipng(), 
                    imagemin.svgo()
                ], {verbose: false}
            ))
            .pipe(gulp.dest(imgFolder))
    }
}
gulp.task('minify-imgs', compressImgsFolder('./public/images/'));
gulp.task('minify-postImgs', compressImgsFolder('./public/posts/'));
// 执行 gulp 命令时执行的任务
gulp.task('default', [
    'minify-html', 'minify-css', 'minify-js',
    'minify-imgs', 'minify-postImgs'
]);
