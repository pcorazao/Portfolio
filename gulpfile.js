// gulpfile.js 
var gulp = require('gulp');
var server = require('gulp-express');
const eslint = require('gulp-eslint');
const webpack = require('webpack');
const gulpWebpack = require('webpack-stream');

gulp.task('dev', function() {
    process.env.NODE_ENV = 'development';
    gulp.start('server');
});

gulp.task('prod', function() {
    process.env.NODE_ENV = 'production';
    //gulp.start('webpack');
    gulp.start('server');
});

gulp.task('webpack', function() {
    return gulp.src('app/index.js')
  .pipe(gulpWebpack( require('./webpack.config.js',webpack) ))
  .pipe(gulp.dest('dist/'));
  });

gulp.task('server', ['lint'], function () {
    // Start the server at the beginning of the task 
    server.run(['app.js']);
 
    // Restart the server when file changes 
    gulp.watch(['app/**/*.html'], server.notify);
    gulp.watch(['app/styles/**/*.scss'], ['styles:scss']);
    //gulp.watch(['{.tmp,app}/styles/**/*.css'], ['styles:css', server.notify]); 
    //Event object won't pass down to gulp.watch's callback if there's more than one of them. 
    //So the correct way to use server.notify is as following: 
    gulp.watch(['{.tmp,app}/styles/**/*.css'], function(event){
        gulp.run('styles:css');
        server.notify(event);
        //pipe support is added for server.notify since v0.1.5, 
        //see https://github.com/gimm/gulp-express#servernotifyevent 
    });
 
    gulp.watch(['app/**/*.js'], ['jshint']);
    gulp.watch(['app/images/**/*'], server.notify);
    gulp.watch(['app.js', 'routes/**/*.js'], [server.run]);
});

gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
    return gulp.src(['**/*.js','**/*.jsx','!node_modules/**','!dist/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});