'use strict'
const gulp = require('gulp');
const ts = require('gulp-typescript');
const browserify = require('gulp-browserify');
const sass = require('gulp-sass');
const TSCONFIG = require('./tsconfig.json');
const SRC_PATH = {
    typescript: ['src/ts/**/*.ts'],
    browserify: ['midjs/*.js'],
    sass: ['src/sass/*.scss'],
    fonts: ['node_modules/font-awesome/fonts/*.*']
}
const TAR_PATH = {
    midjs: 'midjs/',
    destjs: 'dest/js/',
    destcss: 'dest/css/',
    fonts: 'dest/fonts/'
}
const WATCH_PATH = {
    typescript: 'src/ts/**',
    midjs: 'midjs/**',
    sass: 'src/sass/**'
}

let typescriptTimer = null;
gulp.task('typescript',function(){
    clearTimeout(typescriptTimer);
    function tsFunc(){
        console.time('typescript');
        gulp.src(SRC_PATH.typescript)
        .pipe(ts(TSCONFIG))
        .pipe(gulp.dest(TAR_PATH.midjs))
        clearTimeout(typescriptTimer);  
        console.timeEnd('typescript');      
    }
    typescriptTimer = setTimeout(tsFunc,200);
});
let browserTimer = null;
gulp.task('browserify',function(){
    clearTimeout(browserTimer);
    function browserFunc(){
        console.time('browserify');
        gulp.src(SRC_PATH.browserify)
        .pipe(browserify())
        .pipe(gulp.dest(TAR_PATH.destjs))
        console.timeEnd('browserify');
    }
    browserTimer = setTimeout(browserFunc,1000);
});

gulp.task('sass', function(){
    gulp.src(SRC_PATH.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(TAR_PATH.destcss))
});

gulp.task('watch',function(){
    gulp.watch(WATCH_PATH.typescript,['typescript']);
    gulp.watch(WATCH_PATH.midjs,['browserify']);
    gulp.watch(WATCH_PATH.sass,['sass']);
});

gulp.task('fonts', function(){
    gulp.src(SRC_PATH.fonts)
    .pipe(gulp.dest(TAR_PATH.fonts));
});

gulp.task('copy', function(){
    gulp.src('node_modules/gif.js/dist/**')
    .pipe(gulp.dest('dest/js/dist'));
});

process.on('uncaughtException', (err) => {
  console.log('process error',err);
});