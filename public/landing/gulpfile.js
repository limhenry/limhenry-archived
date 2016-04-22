var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

var packageJson = require('./package.json');
var glob = require('glob-all');
var crypto = require('crypto');
var path = require('path');
var fs = require('fs');

var DIST = 'dist';

var dist = function(subpath) {
    return !subpath ? DIST : path.join(DIST, subpath);
};


gulp.task('serve', function() {
    // Run a local server to depurate
    browserSync.init({
        server: {
            baseDir: "public",
            routes: {
                "/project/": "/"
            }
        }
    });

    gulp.watch(["public/*", "public/data/*", "public/elements/*"]).on("change", reload);
});


gulp.task('cache-config', function(callback) {
    var dir = dist();

    var config = {
        cacheId: packageJson.name || path.basename(__dirname),
        disabled: false
    };

    glob([
        'index.html',
        './',
        'bower_components/webcomponentsjs/webcomponents-lite.min.js',
        '{elements,scripts,styles}/**/*.*'
    ], { cwd: dir }, function(error, files) {
        if (error) {
            callback(error);
        } else {
            config.precache = files;

            var md5 = crypto.createHash('md5');
            md5.update(JSON.stringify(config.precache));
            config.precacheFingerprint = md5.digest('hex');

            var configPath = path.join('cache-config.json');
            fs.writeFile(configPath, JSON.stringify(config), callback);
        }
    });

});
