var gulp = require('gulp');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

gulp.task('default', function() {
	"use strict";
	return gutil.log('Gulp è in esecuzione');
});

gulp.task('copiaHtml', function() {
	"use strict";
	gulp.src('source/html/*.html').pipe(gulp.dest('dist'));
	//gulp.src('source/javascript/*.js').pipe(gulp.dest('dist'));
	return gulp.src('source/javascript/*.js')
		.pipe(sourcemaps.init())
			.pipe(concat('bundle.js'))
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist/'));
});
gulp.task('jshint', function() {
	"use strict";
	return gulp.src('source/javascript/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('jshint-stylish'));
});