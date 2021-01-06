const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function css() {
    return gulp
        .src('scss/app.scss')
        .pipe(autoprefixer({
            overrideBrowserslist : ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            outputStyle: 'expanded', // nested, compact, compressed
        }))
        .pipe( gulp.dest('css') );
}

function watchFiles() {
    gulp.watch('scss/*.scss', css); 
    gulp.watch('index.html');
}

//Registrar Funciones como tareas
gulp.task( 'css', css );
/*se coloca el parallel porque se ejecutan las dos archivos en paralelo es decir asincronamente.*/
gulp.task( 'watch', gulp.parallel( watchFiles) );

