// corproate nav routines
// both primary and subnav for now -- may break apart ir needed
// add highlighting to parent link in desktop nav (not dependant on ready event.)
$('#desktop-corporate-home').addClass('active');

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
function navExpandAccordions() {
  $("#main-nav").find(".is-accordion-submenu-parent").each(function(){
    if($(this).attr('aria-expanded') == "false") { $(this).find("a").click(); }
  });   
}

// comment out this section for 2nd testbed
$('#nav-perspectives, #nav-research, #nav-blog, #nav-news, #nav-about, #subnav-perspectives, #subnav-research, #subnav-blog, #subnav-news, #subnav-about').each(function(){
  $(this).mouseenter(function(){var id = $(this).attr('id'), i = id.match(/^sub/) ? id.replace(/^subnav/,"nav") : id; navHoverOn(i);}
  ).mouseleave(function(){ navHoverOff();})
});
 
$("#primary-nav").on("on.zf.toggler", function(e) {
    navExpandAccordions();
  });

$(window).on('changed.zf.mediaquery', function() {    
  $('.data-expanded').removeClass('data-expanded');
  navHoverOff();
});

$(function(){
  if (!Foundation.MediaQuery.atLeast('xlarge')) {
    navExpandAccordions();
  }
});