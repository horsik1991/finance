import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js';


global.app={
    gulp:gulp,
    path:path,
    plugins:plugins
}

//Таски
import { copy } from './gulp/tasks/copy.js';
import { clean } from './gulp/tasks/clean.js';
import { pug2html } from './gulp/tasks/pug.js';
import { server } from './gulp/tasks/server.js';
import { styles } from './gulp/tasks/styles.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/img.js';
import {  otfToTtf, ttfToWoff, fonstStyle } from './gulp/tasks/fonts.js';

//Наблюдатель
function watcher(){
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.pug, pug2html);
    gulp.watch(path.watch.styl, styles);
    gulp.watch(path.watch.stylModules, styles);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.img, images)
}

// Последовательная обработака шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fonstStyle);


//Константы сценариев
const mainTasks = gulp.parallel(copy, pug2html, styles, js, images);
const dev = gulp.series(clean, fonts, mainTasks, gulp.parallel(watcher, server));
const test = gulp.series(clean,styles);


gulp.task('default', dev);
gulp.task('test', test);