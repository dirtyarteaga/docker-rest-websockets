var connect = require('gulp-connect'),
    gulp = require('gulp');

global.paths = {
    server: '',
    src: 'src',
    static: '../backend/messages/static',
    templates: '../backend/messages/templates',
    js: '/**/*.{js,tpl}',
    html: '/**/*.html'
};

gulp.task('connect', function () {
    'use strict';
    return connect.server({
        root: global.paths.server,
        livereload: true,
        port: 8181
    });
});

gulp.task('html', function () {
    'use strict';
    return gulp.src(global.paths.src + global.paths.html)
        .pipe(gulp.dest(global.paths.templates))
        .pipe(connect.reload())
        .on('error', function (error) {
           console.error('html error: ' + error);
        });
});

gulp.task('js', function () {
    'use strict';
    return gulp.src([global.paths.src + global.paths.js])
        .pipe(gulp.dest(global.paths.static))
        .pipe(connect.reload())
        .on('error', function (error) {
            console.error('js error: ' + error);
        });
});

gulp.task('build', ['html', 'js']);
gulp.task('default', ['connect', 'build', 'watch']);
gulp.task('watch', function () {
    'use strict';
    gulp.watch([global.paths.src + global.paths.html], ['html']);
    gulp.watch([global.paths.src + global.paths.js], ['js']);
});