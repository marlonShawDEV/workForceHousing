'use strict';

import plugins  from 'gulp-load-plugins';
import yargs    from 'yargs';
import browser  from 'browser-sync';
import gulp     from 'gulp';
import panini   from 'panini';
import rimraf   from 'rimraf';
import sherpa   from 'style-sherpa';
import yaml     from 'js-yaml';
import fs       from 'fs';
// Load all Gulp plugins into one variable
const $ = plugins();

// Check for --production flag
const PRODUCTION = !!(yargs.argv.production);

// Load settings from settings.yml
const { COMPATIBILITY, PORT, UNCSS_OPTIONS, PATHS } = loadConfig();

function loadConfig() {
  let ymlFile = fs.readFileSync('config.yml', 'utf8');
  return yaml.load(ymlFile);
}

// Build the "dist" folder by running all of the below tasks
gulp.task('build',
 gulp.series(clean, gulp.parallel(javascript, pages, sass, sassHomepage, images, copy), styleGuide));

// Build the site, run the server, and watch for file changes
gulp.task('default',
  gulp.series('build', server, watch));

gulp.task('clean', 
  gulp.series(clean));

gulp.task('images', 
  gulp.series(gulp.parallel(images)));

// Delete the "dist" folder
// This happens every time a build starts
function clean(done) {
  rimraf(PATHS.dist, done);
}

// Copy files out of the assets folder
// This task skips over the "img", "js", and "scss" folders, which are parsed separately
function copy() {
  gulp.src(PATHS.assets) 
    .pipe(gulp.dest(PATHS.dist));  
  return gulp.src('src/assets/docs/**/*')
    .pipe(gulp.dest(PATHS.dist + '/docs'));
}

// Copy page templates into finished HTML files
function pages() {
  return gulp.src('src/pages/**/*.{html,hbs,handlebars}')
    .pipe(panini({
      root: 'src/pages/',
      layouts: 'src/layouts/',
      partials: 'src/partials/',
      data: 'src/data/',
      helpers: 'src/helpers/'
    }))
    .pipe(gulp.dest(PATHS.dist));
}

// Load updated HTML templates and partials into Panini
function resetPages(done) {
  panini.refresh();
  done();
}

// Generate a style guide from the Markdown content and HTML template in styleguide/
function styleGuide(done) {
  sherpa('src/styleguide/index_corp.md', {
    output: PATHS.dist + '/styleguide/styleguide_corp.html',
    template: 'src/styleguide/template_corp.html'
  }, done); 
}
function styleGuideSF(done) {
  sherpa('src/styleguide/index_sf.md', {
    output: PATHS.dist + '/styleguide/styleguide_sf.html',
    template: 'src/styleguide/template_sf.html'
  }, done);
}
function styleGuideMF(done) {
  sherpa('src/styleguide/index_mf.md', {
    output: PATHS.dist + '/styleguide/styleguide_mf.html',
    template: 'src/styleguide/template_mf.html'
  }, done);
}
function styleGuideCM(done) {
  sherpa('src/styleguide/index_cm.md', {
    output: PATHS.dist + '/styleguide/styleguide_cm.html',
    template: 'src/styleguide/template_cm.html'
  }, done);
}
// Compile Sass into CSS
// In production, the CSS is compressed
function sass() {
  return gulp.src('src/assets/scss/app_corp.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    // Comment in the pipe below to run UnCSS in production
    //.pipe($.if(PRODUCTION, $.uncss(UNCSS_OPTIONS)))
    .pipe($.if(PRODUCTION, $.cssnano()))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/ss'))
    .pipe(browser.reload({ stream: true }));
}

// Compile Sass into CSS
// In production, the CSS is compressed
function sassHomepage() {
  return gulp.src('src/assets/scss/home*.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sasshome
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    // Comment in the pipe below to run UnCSS in production
    //.pipe($.if(PRODUCTION, $.uncss(UNCSS_OPTIONS)))
    .pipe($.if(PRODUCTION, $.cssnano()))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/ss'))
    .pipe(browser.reload({ stream: true }));
}

// Combine JavaScript into one file
// In production, the file is minified
function javascript(done) {
  return gulp.src(PATHS.javascriptcorp)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.concat('app_corp.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/js'));
  done();
}

function javascriptSF(done) {
  return gulp.src(PATHS.javascriptsf)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.concat('app_sf.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/js'));
  done();
}

function javascriptMF(done) {
  return gulp.src(PATHS.javascriptmf)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.concat('app_mf.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/js'));
  done();
}

function javascriptCM(done) {
  return gulp.src(PATHS.javascriptcm)
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.concat('app_cm.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/js'));
  done();
}


// Copy images to the "dist" folder
// In production, the images are compressed
function images() {
  return gulp.src('src/assets/img/**/*')
    .pipe($.if(PRODUCTION, $.imagemin({
      progressive: true
    })))
    .pipe(gulp.dest(PATHS.dist + '/images'));
}

// Start a server with BrowserSync to preview the site in
function server(done) {
  browser.init({
    server: PATHS.dist, port: PORT, ws: 'http://o365proxy.fhlmc.com'
  });
  done();
}

// Reload the browser with BrowserSync
function reload(done) {
  browser.reload();
  done();
}

// Watch for changes to static assets, pages, Sass, and JavaScript
function watch() {
  gulp.watch(PATHS.assets, copy);
  gulp.watch('src/pages/**/*.html').on('change', gulp.series(pages, browser.reload));
  gulp.watch('src/{layouts,partials}/**/*.html').on('change', gulp.series(resetPages, pages, browser.reload));
  gulp.watch('src/assets/scss/**/*.scss').on('change', gulp.series(sass, sassHomepage, browser.reload));
  gulp.watch('src/assets/js/**/*.js').on('change', gulp.series(javascript, browser.reload));
  gulp.watch('src/assets/img/**/*').on('change', gulp.series(images, browser.reload));
  gulp.watch('src/styleguide/**').on('change', gulp.series(styleGuide, browser.reload));
}
