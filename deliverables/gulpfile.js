import { src, dest, watch, series } from 'gulp';
import gulpSass from 'gulp-sass';
import sass from 'sass';

const sassCompiler = gulpSass(sass);

function buildstyles() {
  return src('simozy/**/*.scss').pipe(sassCompiler()).pipe(dest('css'));
}

function watchTask() {
  watch(['simozy/**/*.scss'], buildstyles);
}

export default series(buildstyles, watchTask);
