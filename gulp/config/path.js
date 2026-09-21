import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = `./dist`
const srcFolder = `./dev`

export const path = {
    build:{
        files:`${buildFolder}/static/files/`,
        html:`${buildFolder}/`,
        css:`${buildFolder}/static/css`,
        js:`${buildFolder}/static/js`,
        img:`${buildFolder}/static/img`,
        //svg:`${buildFolder}/static/img/icons`,
        fonts:`${buildFolder}/static/fonts/`,
        styl:`${srcFolder}/static/styles/`
    },
    watch:{
        files:`${srcFolder}/static/files/**/*.*`,
        pug:`${srcFolder}/blocks/**/*.pug`,
        styl:`${srcFolder}/blocks/**/*.styl`,
        stylModules:`${srcFolder}/static/**/*.styl`,
        js:`${srcFolder}/blocks/**/*.js`,
        img:`${srcFolder}/static/img/**/*.{jpg,jpeg,png,svg,bmp,webp,gif}`
    },
    src:{
        files:`${srcFolder}/static/files/**/*.*`,
        styl:`${srcFolder}/blocks/**/*.styl`,
        fonts:`${srcFolder}/static/fonts/fonts.styl`,
        stylModules:`${srcFolder}/static/styles/*.styl`,
        pug:`${srcFolder}/pages/*.pug`,
        js:`${srcFolder}/blocks/**/*.js`,
        jsModule:`${srcFolder}/static/js/modules/**/*.js`,
        img:`${srcFolder}/static/img/**/*.{jpg,jpeg,png,bmp,webp,gif,svg}`,
        svg:`${srcFolder}/static/img/**/*.svg`,
        
    },
    ftp:``,
    buildFolder: buildFolder,
    clean: buildFolder,
    rootFolder: rootFolder,
    srcFolder: srcFolder
}