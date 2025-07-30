const { src, dest, watch, parallel } = require("gulp");
const gulp = require("gulp"),
    sass = require("gulp-sass")(require("sass-embedded")),
    postcss = require("gulp-postcss"),
    autoprefixer = require("autoprefixer"),
    cssnano = require("cssnano"),
    sourcemaps = require("gulp-sourcemaps"),
    browserSync = require("browser-sync").create();

const minifyCSS = require("gulp-csso");

function css() {
  return src("assets/scss/*.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(dest("css"));
}

function watchFiles() {
  watch("./assets/scss/**/*", css);
}

exports.css = css;
exports.watch = watch;
exports.default = parallel(css, watchFiles);
