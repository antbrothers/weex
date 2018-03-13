var gulp = require('gulp');
var sftp = require('gulp-sftp');

gulp.task('default', function() {
    return gulp.src('./dist/**')
    .pipe(sftp({
        host: '114.67.143.209',
        port: 22,
        user: 'root',
        pass: 'oeusTGa]1',
        remotePath: '/root/'
    }))
})