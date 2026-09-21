import webpack from 'webpack-stream'
export const js = ()=>{
    return app.gulp.src([app.path.src.js , app.path.src.jsModule], {sourcemaps:true, allowEmpty:true})
    .pipe(app.plugins.plumber())
    .pipe(app.plugins.concat('app.min.js'))
    .pipe(app.gulp.dest(`${app.path.build.js}`))
    .pipe(app.plugins.bs.stream())
}