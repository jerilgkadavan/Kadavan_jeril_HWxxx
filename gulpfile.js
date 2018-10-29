// gulp modules required
let gulp = require("gulp");
let sass = require("gulp-sass");
let browserSync = require("browser-sync").create();

// gulp serve
gulp.task("serve", function() {
  browserSync.init({
    server: {
      baseDir: "./",
      index: "index.html"
    }
  });
});

// gulp sass / just when no css
gulp.task("sass", function() {
  return gulp
    .src("./sass/**/*.scss")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(gulp.dest("./css"));
});

// gulp watch
gulp.task("watch", function() {
  gulp.watch("./sass/**/*.scss", ["sass"]);
});