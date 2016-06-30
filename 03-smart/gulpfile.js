
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

var _ = require('lodash');

var sourceWebappDir = 'src/main/webapp';
var buildWebappDir = 'build/webapp';

var stylesSrcDir = 'src/main/webapp/style';
var stylesDestDir =  buildWebappDir + '/style';

gulp.task('sass', function() {

    return gulp.src(stylesSrcDir + '/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest(stylesDestDir) );

});

gulp.task('copyapp', ['sass'], function() {

    return gulp.src(sourceWebappDir + '/**/*')
        .pipe(gulp.dest(buildWebappDir));

});

gulp.task('watch', function () {
    gulp.watch(sourceWebappDir + '/**', ['copyapp']);
});

/* ng2 section */

var ng2AppsByName = { pmgr: 'src/main/js/product-mgr' }

var ng2Apps = _.values(ng2AppsByName);

gulp.task('ng:install', function(cb) {

    _.each(ng2Apps, function(app) {
        execSync('npm install',app);
    });

    cb();
});

gulp.task('ng:build', function() {

    return Promise.all(ng2Apps.map(app => {
            return execWithValidate('ng build', app, 'Built project successfully')
        }));

});

gulp.task('ng:dist', [ 'ng:install'], function() {

    return Promise.all(ng2Apps.map(app => {
            return execWithValidate('ng build -prod', app, 'Built project successfully')
        }));

});

function execWithValidate(cmd, cwd, successString) {

    return new Promise(function(resolve, reject) {

        console.log("cwd: " + cwd);
        console.log("exec: " + cmd);

        var _exec = require('child_process').exec;
        _exec(cmd,{cwd: cwd}, function(err, stout, sterr) {

            console.log(stout);
            console.log(sterr);

            if(! _.includes(stout,successString)) {
                reject('EXECUTION FAILED');
                return;
            }

            if(err)  {
                reject(err);
                return
            }

            console.log("exec complete: " + cmd);

            resolve();
        }); // _exec

    }); // promise

}


function execSync(cmd, cwd) {

    var _exec = require('child_process').execSync;
    var buffer = _exec( cmd, {cwd: cwd});

    var StringDecoder = require('string_decoder').StringDecoder;
    var decoder = new StringDecoder('utf-8');
    console.log(decoder.write(buffer));

}




/* all */

gulp.task('default', [ 'copyapp', 'ng:dist' ], function() { });
