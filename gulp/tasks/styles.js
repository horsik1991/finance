export const styles = ()=>{
    return app.gulp.src([`./dev/static/styles/instruments/*.styl`,`${app.path.src.fonts}`,`${app.path.src.stylModules}`,`${app.path.src.styl}`], {allowEmpty:true,sourcemaps:true})
    .pipe(app.plugins.plumber())
    .pipe(app.plugins.sourcemaps.init())
    .pipe(app.plugins.concat('main.styl'))
    //.pipe(app.gulp.dest(`${app.path.build.styl}`))
    .pipe(app.plugins.stylus('main.styl',{
        compress: false
        }
    ))

    .pipe(app.plugins.replace(/@img\//g, '../img/'))
    
    .pipe(app.plugins.groupmedia())
    // .pipe(app.plugins.webpcss({
    //     webpClass: '.webp',
    //     noWebpClass:'.no-webp'
    // }))
    .pipe(app.plugins.pref({
        grid:true,
        cascade:true,
        overrideBrowserslist:['last 3 versions']
    }))
    .pipe(app.plugins.rename('styles-non-compressed.css'))
    .pipe(app.plugins.sourcemaps.write())
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.bs.stream())


    .pipe(app.plugins.stylus())
    .pipe(app.plugins.cleanCss())
    .pipe(app.plugins.rename('styles.min.css'))
    .pipe(app.gulp.dest(app.path.build.css))
    .pipe(app.plugins.bs.stream())
}