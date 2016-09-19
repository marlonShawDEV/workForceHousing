// add highlighting to parent link in desktop nav (not dependant on ready event.)
$('#desktop-corporate-home').addClass('active');

Foundation.Accordion.defaults.multiExpand = true;
Foundation.Accordion.defaults.allowAllClosed = true;
if (Foundation.MediaQuery.atLeast('medium')) { Foundation.Tabs.matchHeight = true; }
Foundation.Reveal.deepLink = true;

function preReveal() {
  //automate insertion of Close Buttons
  $(".reveal[id][data-reveal]").each(function(){
    var  obj = $(this), 
    i = obj.attr('id'),
    btnClose = $("<button />",{
    "class": "close-button",
    "aria-label": "Close modal",
    "data-close": "",
    "type": "button",
    "html": "<span aria-hidden='true'>&times</span>"
    }),
    btnCloseLarge = btnClose.clone().attr("class", "close-button-large");
    // full overlays & image modals get different close button  
    if (obj.hasClass('reveal-image')) { 
      obj.find('figure:first').append(btnCloseLarge);
    }
    else if(obj.hasClass('full')) {
      obj.children('div:first').append(btnCloseLarge);
    }
    else { 
      obj.append(btnClose); 
    } 
    // for video & image modals, remove the non-js fall back hyperlink  
    if($('[data-open="'+i+'"][href]').length){ 
      $('[data-open="'+i+'"][href]').removeAttr('href');
    }
  });
}
// Rotators using Orbit
//automate insertion of Close Buttons and active item highlighting
function orbBulletMarkup(container){
  var orbBullets = '';
  $(container).find('.orbit-slide').each(function(i){
    orbBullets += '<button data-slide="' + i + '"><span class="show-for-sr">slide '+ (i+1) + '</span></button>';  
  }); 
  return orbBullets;
}
function preOrbit() {  
  $(".orbit").each(function() {
    var orb = $(this),
    orbContainer = $(this).children(".orbit-container:first"),
    btnPrev = $("<button />",{
      "class": "orbit-previous",
      "aria-label": "Previous",
      "html": "<span class='show-for-sr'>previous</span>&#9664;"
    }),
    btnNext = $("<button />",{
      "class": "orbit-next",
      "aria-label": "Next",
      "html": "<span class='show-for-sr'>next</span>&#9654;"
    }),
    lnkPrev = $("<a />",{
      "class": "orbit-previous",
      "aria-label": "Previous",
      "html": "<span class='show-for-sr'>previous</span>"
    }),
    lnkNext = $("<a />",{
      "class": "orbit-next",
      "aria-label": "Next",
      "html": "<span class='show-for-sr'>next</span>"
    }),
    orbBulletContainer = $("<nav />", {
      "class": "orbit-bullets",
      "html" : orbBulletMarkup(orbContainer)
    });
    if (orbContainer.find('.orbit-slide'),length>1){
      orbContainer.after(orbBulletContainer);
      orbContainer.find('.orbit-slide').eq(0).addClass('is-active'); 
      orb.find('nav').find('button').eq(0).addClass('is-active');
      if(orb.hasClass('bullets-overlay')) {
        orb.find('nav').prepend(lnkPrev).append(lnkNext);
      }   
      else {
        orbContainer.prepend(btnNext, btnPrev); 
      }
    }     
  });
}
function fakenav(){
  // this will be automated on the backend, faking it for now to show different highlighting/subnavs
  var p = location.pathname;
  if (p.match(/blog/)) { 
    $('#nav-blog').children('a').addClass('active');
    $('#subnav-blog').addClass('on').find('.no-bullet').removeClass('hide');
    if (p.match(/detail/)) {
      $('#subnav-blog-list').find('li').eq(0).children('a').addClass('active');
    }
  }
  else if (p.match(/about|tertiary|annual/)) {
    $('#nav-about').children('a').addClass('active');
    $('#subnav-about').addClass('on').find('.no-bullet').removeClass('hide');
    if (p.match(/tertiary|annual/)) {$('#subnav-about-list').find('li').eq(3).children('a').addClass('active');}
  }
  else if (p.match(/perspectives/)) {
    $('#nav-perspectives').children('a').addClass('active');
    $('#subnav-perspectives').addClass('on').find('.no-bullet').removeClass('hide');       
  }
  else if (p.match(/media-/)) {
    $('#nav-news').children('a').addClass('active');
    $('#subnav-news').addClass('on').find('.no-bullet').removeClass('hide');
    if(p.match(/press/)) {$('#subnav-news-list').find('li').eq(1).children('a').addClass('active');}   
  }
}

// routine to display the subnav on hover
function navHoverOn(pNav){
  var sNav = pNav.replace(/^nav/,"subnav");
  if($('#'+pNav).children('a:first').hasClass('active')) {
    navHoverOff();
  }
  else if ($('#'+pNav).is(':hover') || $('#'+sNav).is(':hover')){
    $('.primary-nav').not('#'+pNav).find('.current-hover').removeClass('current-hover');  
    $('.secondary-nav').not('#'+sNav).removeClass('highlight').find('.current-hover').removeClass('current-hover').addClass('hide');
    $('#'+pNav).not('.current-hover').addClass('current-hover');
    $('#'+sNav).not('.highlight').addClass('highlight').find('.no-bullet').removeClass('hide').addClass('current-hover');    
  }
}
function navHoverOff(){
    $('.primary-nav').find('.current-hover').removeClass('current-hover');  
    $('.secondary-nav').removeClass('highlight').find('.current-hover').removeClass('current-hover').addClass('hide');
}

function init() {
	// call functions
  adjustSidebar.init();

  // call functions on resize
  $(window).on('resize', function() {
  	adjustSidebar.init();
    $('.expanded').removeClass('expanded');
    navHoverOff();
  });
 
}  

if($(".reveal").length){preReveal();}
if($(".orbit").length){preOrbit();}
fakenav();
$('#nav-perspectives, #nav-research, #nav-blog, #nav-news, #nav-about, #subnav-perspectives, #subnav-research, #subnav-blog, #subnav-news, #subnav-about').each(function(){
  $(this).mouseenter(function(){var id = $(this).attr('id'), i = id.match(/^sub/) ? id.replace(/^subnav/,"nav") : id; navHoverOn(i);}
  ).mouseleave(function(){ navHoverOff();})
});
$(document).foundation();  
$(document).ready(init);