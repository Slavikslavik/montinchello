let gulp = require('gulp');
let browser_sync = require('browser-sync').create();
let sass = require('gulp-sass');
var uglify = require('gulp-uglify-es').default;
let del = require('del');

var paths = {
    html:{
        src:'assets/index.html'
    },
    styles: {
      src: ['src/scss/**/*.scss', '!'+'src/scss/**/_*.scss'],
      dest: 'assets/css/'
    },
    scripts: {
      src: 'src/script/**/*.js',
      dest: 'assets/script/'
    },
    clean: ['assets/css','assets/script']
  };

function browser(){
    browser_sync.init({
        server:{
            baseDir:'assets'
        },
    })
};

function clean(){
      return del(paths.clean);
};

function styles(){
      return gulp.src(paths.styles.src)
        .pipe(sass())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(browser_sync.stream())
};
function scripts(){
    return gulp.src(paths.scripts.src)
        .pipe(uglify())
        .pipe(gulp.dest(paths.scripts.dest))
        .pipe(browser_sync.stream())
};
function watchs(){
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
    //gulp.watch(paths.html.src, browser_sync.reload());
};

let build = gulp.series(clean, gulp.parallel(styles, scripts, browser,watchs));


exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watchs;
exports.build = build;



exports.default = build;


