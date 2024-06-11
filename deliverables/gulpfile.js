import { src, dest, watch, series } from 'gulp';
import gulpSass from 'gulp-sass';
import sass from 'sass';

const sassCompiler = gulpSass(sass);

function buildstyles() {
  return src('index.scss').pipe(sassCompiler()).pipe(dest('css'));
}

function watchTask() {
  watch(['index.scss'], buildstyles);
}

export default series(buildstyles, watchTask);
