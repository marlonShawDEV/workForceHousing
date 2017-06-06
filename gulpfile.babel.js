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
// add in javascriptMFSBL, sassMfSbl, styleGuideMFSBL, if building for SBL
// add in javascriptNHM, sassNHM, styleGuideNHM, if building for NHM
gulp.task('build',
 gulp.series(clean, gulp.parallel(pages, javascript, javascriptMFSBL, javascriptNHM, sassNHM, sassMfSbl, sassMfInnovate,  sass, sassHomepage, images, copy), styleGuideMFSBL, styleGuideNHM, styleGuide));

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
  return gulp.src('src/styleguide/files/**/*')
    .pipe(gulp.dest(PATHS.dist + '/styleguide/files'));
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
  }, styleGuideGrid(done) ); 
}
function styleGuideGrid(done) {
  return sherpa('src/styleguide/index_grid.md', {
    output: PATHS.dist + '/styleguide/styleguide_grid.html',
    template: 'src/styleguide/template_grid.html'
  }, styleGuideAbide(done)); 
}
function styleGuideAbide(done) {
  return sherpa('src/styleguide/abide.md', {
    output: PATHS.dist + '/styleguide/styleguide_abide.html',
    template: 'src/styleguide/template_grid.html'
  }, styleGuideEmbeds(done)); 
}
function styleGuideEmbeds(done) {
  return sherpa('src/styleguide/embeds.md', {
    output: PATHS.dist + '/styleguide/styleguide_embeds.html',
    template: 'src/styleguide/template_grid.html'
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
function styleGuideMFSBL(done) {
  sherpa('src/styleguide/index_mfsbl.md', {
    output: PATHS.dist + '/styleguide/styleguide_mfsbl.html',
    template: 'src/styleguide/template_mfsbl.html'
  }, done);
}
function styleGuideNHM(done) {
  sherpa('src/styleguide/index_mfsbl.md', {
    output: PATHS.dist + '/styleguide/styleguide_nhm.html',
    template: 'src/styleguide/template_nhm.html'
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
    .pipe($.if(PRODUCTION, $.cssnano({safe: true, minifyGradients: false, calc:false, zindex:false, colormin:false, reduceInitial:false})))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/ss'))
    .pipe(browser.reload({ stream: true }));
}
// Compile Sass into CSS
function sassMfSbl() {
  return gulp.src('src/assets/scss/app_mf_sbl.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.if(PRODUCTION, $.cssnano({safe: true, minifyGradients: false, calc:false, zindex:false, colormin:false, reduceInitial:false})))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/multifamily/new_standard/sbl/'))
    .pipe(browser.reload({ stream: true }));
}
// Compile Sass into CSS
function sassMfInnovate() {
  return gulp.src('src/assets/scss/app_mf_innovate.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.if(PRODUCTION, $.cssnano({safe: true, minifyGradients: false, calc:false, zindex:false, colormin:false, reduceInitial:false})))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/multifamily/new_standard/innovate/'))
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
    .pipe($.if(PRODUCTION, $.cssnano({safe: true, minifyGradients: false, calc:false, zindex:false, colormin:false, reduceInitial:false})))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/ss'))
    .pipe(browser.reload({ stream: true }));
}
// Compile Sass into CSS for NHM
function sassNHM() {
  return gulp.src('src/assets/scss/app_nhm.scss')
    .pipe($.sourcemaps.init())
    .pipe($.sass({
      includePaths: PATHS.sass
    })
      .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: COMPATIBILITY
    }))
    .pipe($.if(PRODUCTION, $.cssnano({safe: true, minifyGradients: false, calc:false, zindex:false, colormin:false, reduceInitial:false})))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/ss'))
    .pipe(browser.reload({ stream: true }));
}
// Combine JavaScript into one file
// In production, the file is minified
function javascript(done) {
  return gulp.src(PATHS.javascriptcorp)
    .pipe($.sourcemaps.init())
    .pipe($.babel({ignore: ['what-input.js']}))
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
    .pipe($.babel({ignore: ['what-input.js']}))
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
    .pipe($.babel({ignore: ['what-input.js']}))
    .pipe($.concat('app_mf.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/js'));
  done();
}
function javascriptMFSBL(done) {
  return gulp.src(PATHS.javascriptmfsbl)
    .pipe($.sourcemaps.init())
    .pipe($.babel({ignore: ['what-input.js']}))
    .pipe($.concat('app_mf_sbl.js'))
    .pipe($.if(PRODUCTION, $.uglify()
      .on('error', e => { console.log(e); })
    ))
    .pipe($.if(!PRODUCTION, $.sourcemaps.write()))
    .pipe(gulp.dest(PATHS.dist + '/multifamily/new_standard/sbl/'));
  done();
}
function javascriptNHM(done) {
  return gulp.src(PATHS.javascriptmf)
    .pipe($.sourcemaps.init())
    .pipe($.babel({ignore: ['what-input.js']}))
    .pipe($.concat('app_nhm.js'))
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
    .pipe($.babel({ignore: ['what-input.js']}))
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
// If running for SBL, add in sassMfSbl, styleGuideMFSBL, javascriptMFSBL, into appropriate processes
// If running for NHM, add in sassNHM, styleGuideNHM, javascriptNHM, into appropriate processes
function watch() {
  gulp.watch(PATHS.assets, copy);
  gulp.watch('src/pages/**/*.html').on('change', gulp.series(pages, browser.reload));
  gulp.watch('src/{layouts,partials}/**/*.html').on('change', gulp.series(resetPages, pages, browser.reload));
  gulp.watch('src/assets/scss/**/*.scss').on('change', gulp.series(sass, sassHomepage, sassNHM, sassMfSbl, browser.reload));
  gulp.watch('src/assets/js/**/*.js').on('change', gulp.series(javascript, javascriptNHM, javascriptMFSBL, browser.reload));
  gulp.watch('src/assets/img/**/*').on('change', gulp.series(images, browser.reload));
  gulp.watch('src/styleguide/**').on('change', gulp.series(styleGuide, styleGuideNHM, styleGuideMFSBL, browser.reload));
}
