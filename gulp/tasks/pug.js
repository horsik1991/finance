//Обрабатываем pug -> html
export const pug2html = ()=>{
    return app.gulp.src(app.path.src.pug)
        .pipe(app.plugins.plumber())
        .pipe(app.plugins.pug({pretty:true}))
        .pipe(app.plugins.replace(/@img\//g, 'static/img/')) //Это замена встречающегося слова @img на static/img. А с символом @ пишется относительный путь, который компилируется в абсолютный (Т.н. Алиас)
        //.pipe(app.plugins.webpnonsvg())
        .pipe(app.plugins.gnum({ //здесь происходит добавление к версии файлов префикса в виде даты и времени. Делается это для избежания кеширования
            'value':'%DT%',
            'append':{
                'key':'_v',
                'cover': 0,
                to: [
                    'css',
                    'js',
                ]
            },
            'output':{
                'file' : 'gulp/version.json'
            }
        }))
        .pipe(app.plugins.plumber.stop())
        .pipe(app.gulp.dest('dist'))
        .pipe(app.plugins.bs.stream())
};