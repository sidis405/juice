var gulp            = require('gulp'),
    Elixir          = require('laravel-elixir'),
    bower           = require('gulp-bower'),
    bowerFiles      = require('main-bower-files'),
    bowerNormalize  = require('gulp-bower-normalize'),
    _               = require('underscore');

Elixir.extend('bower', function (options) {

    options = _.extend({
        src:    Elixir.config.assetsPath + '/vendor',
        output: Elixir.config.publicPath + '/assets/vendor',
    }, options);

    var paths = prepGulpPaths(options.src, options.output);


    new Elixir.Task('bower', function () {

        this.log(paths.src.baseDir, paths.output.baseDir);

        var onError = function (e) {
            new Elixir.Notification('Bower Dependencies Instalation Failed!');
            this.emit('end');
        };

        return gulp.src(bowerFiles(), {base: paths.src.baseDir})
            .on('error', onError)
            .pipe(bowerNormalize({bowerJson: './bower.json'}))
            .pipe(gulp.dest(paths.output.baseDir))
            .pipe(new Elixir.Notification('Bower Dependencies Installed!'));
    });
});


/**
 * Prep the Gulp src and output paths.
 *
 * @param  {string|array} src
 * @param  {string|null}  output
 * @return {object}
 */
var prepGulpPaths = function(src, output) {
    return new Elixir.GulpPaths()
        .src(src)
        .output(output, 'bower.js');
};