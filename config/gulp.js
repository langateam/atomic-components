const gulp = require('gulp')
const babel = require('gulp-babel')
const webpack = require('webpack-stream')
const sass = require('gulp-sass')
const imagemin = require('gulp-imagemin')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

module.exports = {
  defaultTaskName: 'default',

  tasks: {
    default: ['compileTemplate', 'compileStyles', 'image', 'bundle'],

    compileTemplate() {
      return gulp.src('./assets/js/**/*.js')
        .pipe(babel({
          presets: ['react', 'es2015', 'stage-0']
        }))
        .pipe(gulp.dest('dist'))
    },
    compileStyles() {
      return gulp.src('./assets/styles/**/*.scss')
        .pipe(sass({
          includePaths: ['./node_modules']
        }).on('error', sass.logError))
        .pipe(gulp.dest('dist/styles'))
    },
    image() {
      return gulp.src('./assets/img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/img'))
    },
    bundle() {
      gulp.src('./assets/js/form.js')
        .pipe(webpack({
          output: {
            filename: 'form.js'
          },
          module: {
            loaders: [{
              test: /\.js?$/,
              loader: 'babel-loader',
              query: {
                presets: ['es2015', 'react']
              }
            }]
          }
        }))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
    }
  }
}


