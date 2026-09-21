import imagemin from "gulp-imagemin"
import webp from 'gulp-webp'
export const images = ()=>{
    return app.gulp.src(app.path.src.img, { encoding: false })
    .pipe(app.plugins.newer(app.path.build.img))
    //.pipe(app.gulp.dest('dist/static/img'))
    // .pipe(webp())
    .pipe(app.plugins.newer(app.path.build.img))
    .pipe(imagemin({
        progressive:true,
        // svgoPlugins:[{removeViewBox:false}],
        // interlaced:true,
        optimizationLevel:3
    }))
    // .pipe(app.gulp.dest(`${app.path.build.img}`))
    // .pipe(app.plugins.bs.stream())
    // .pipe(webp())
    .pipe(app.gulp.dest(`${app.path.build.img}`))
}