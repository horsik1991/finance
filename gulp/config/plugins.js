import gulp from 'gulp';
import plumber from 'gulp-plumber';
import pug from 'gulp-pug';
import replace from 'gulp-replace';
import webpnonsvg from 'gulp-webp-html-nosvg';
import gnum from 'gulp-version-number';
import bs from 'browser-sync';
import stylus from 'gulp-stylus';
import concat from 'gulp-concat';
import rename from "gulp-rename";
import pref from 'gulp-autoprefixer';
import webpcss from 'gulp-webpcss';
import groupmedia from 'gulp-group-css-media-queries';
import cleanCss from 'gulp-clean-css';
import newer from 'gulp-newer'
import sourcemaps from 'gulp-sourcemaps'

export const plugins = {
    gulp:gulp,
    pug:pug,
    plumber:plumber,
    replace:replace,
    webpnonsvg:webpnonsvg,
    gnum:gnum,
    bs:bs,
    sourcemaps:sourcemaps,
    stylus:stylus,
    concat:concat,
    pref:pref,
    webpcss:webpcss,
    rename:rename,
    groupmedia:groupmedia,
    cleanCss:cleanCss,
    newer:newer
}