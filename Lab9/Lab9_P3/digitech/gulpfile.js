const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass")(require('sass')); // <-- CHANGE THIS LINE
const minifyCSS = require("gulp-csso");

function css() {
  return src("assets/scss/*.scss")
    .pipe(sass().on('error', sass.logError)) // Added error logging for sass
    .pipe(minifyCSS())
    .pipe(dest("css"));
}

function watchFiles() {
  watch("./assets/scss/**/*", css);
}

exports.css = css;
exports.watch = watch;
exports.default = parallel(css, watchFiles);