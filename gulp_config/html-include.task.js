var gulp = require( 'gulp' )
  , include = require( 'gulp-html-tag-include' )
  , livereload = require( 'gulp-livereload' )
  , paths = require('../package.json').paths;

module.exports = function() {
    return gulp.src( paths.src.html + '*.html' )
        .pipe( include() )
        .pipe( gulp.dest( paths.dist.root ) )
        .pipe( livereload() );
};
