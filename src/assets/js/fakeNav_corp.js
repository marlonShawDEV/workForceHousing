
// faking the nav highlight settings since we don't have a cms to do this for us locally.

function fakenav(){
  // this will be automated on the backend, faking it for now to show different highlighting/subnavs
  var p = location.pathname;
  if (p.match(/blog/)) { 
    $('#nav-blog').children('a').addClass('active');
    $('#subnav-blog').addClass('on').find('.no-bullet').removeClass('hide');
    if (p.match(/detail|homeownership/)) {
      $('#subnav-blog-list').find('li').eq(0).children('a').addClass('active');
    }
  }
  else if (p.match(/about|tertiary|annual/)) {
    $('#nav-about').children('a').addClass('active');
    $('#subnav-about').addClass('on').find('.no-bullet').removeClass('hide');
    if (p.match(/tertiary|annual/)) {$('#subnav-about-list').find('li').eq(4).children('a').addClass('active');}
  }
  else if (p.match(/perspectives/)) {
    $('#nav-perspectives').children('a').addClass('active');
    $('#subnav-perspectives').addClass('on').find('.no-bullet').removeClass('hide');       
  }
  else if (p.match(/media-/)) {
    $('#nav-news').children('a').addClass('active');
    $('#subnav-news').addClass('on').find('.no-bullet').removeClass('hide');
    if(p.match(/press/)) {$('#subnav-news-list').find('li').eq(1).children('a').addClass('active');}   
    else {$('#subnav-news-list').find('li').eq(0).children('a').addClass('active');}  
  }
  else if (p.match(/research-/)) {
    $('#nav-research').children('a').addClass('active');
    $('#subnav-research').addClass('on').find('.no-bullet').removeClass('hide');
    if(p.match(/pmms/)) {$('#subnav-research-list').find('li').eq(0).children('a').addClass('active');}   
  }
}

fakenav();