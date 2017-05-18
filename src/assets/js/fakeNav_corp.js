
// faking the nav highlight settings since we don't have a cms to do this for us locally.

function fakeNav(){
  // this will be automated on the backend, faking it for now to show different highlighting/subnavs
  var p = location.pathname;
  if (p.match(/blog/)) { 
    $('#nav-blog').children('a').addClass('active');
    $('#subnav-blog').addClass('on').find('.no-bullet').removeClass('hide');
    if (p.match(/detail|homeownership/)) {$('#subnav-blog-homeownership').addClass('active');}
    else if (p.match(/rental/)) {$('#subnav-blog-rental').addClass('active');}
    else if (p.match(/research/)) {$('#subnav-blog-research').addClass('active');}
    else if (p.match(/notable/)) {$('#subnav-blog-notable').addClass('active');}
    else if (p.match(/archive|harp/)) {$('#subnav-blog-archive').addClass('active');}
  }
  else if (p.match(/about/)) {
    $('#nav-about').children('a').addClass('active');
    $('#subnav-about').addClass('on').find('.no-bullet').removeClass('hide');
    if (p.match(/leaders/)) {$('#subnav-about-leaders').addClass('active');}
    if (p.match(/business/)) {$('#subnav-about-business').addClass('active');}
    if (p.match(/people|employee|supplier/)) {$('#subnav-about-people').addClass('active');}
    if (p.match(/communities/)) {$('#subnav-about-communities').addClass('active');}
    else if (p.match(/governance|annual|agenda|board/)) {$('#subnav-about-governance').addClass('active');}
    else if (p.match(/investor/)) {$('#subnav-about-investors').addClass('active');}
  }
  else if (p.match(/media-/)) {
    $('#nav-mediaroom').children('a').addClass('active');
    $('#subnav-mediaroom').addClass('on').find('.no-bullet').removeClass('hide');
    if (p.match(/detail|archive/)) {$('#subnav-mediaroom-archive').addClass('active');}   
    else if (p.match(/press/)) {$('#subnav-mediaroom-resources').addClass('active');} 
  }
  else if (p.match(/research/)) {
    $('#nav-research').children('a').addClass('active');
    $('#subnav-research').addClass('on').find('.no-bullet').removeClass('hide');
    if(p.match(/pmms/)) {$('#subnav-research-mortgage').addClass('active');} 
    else if (p.match(/detail|insight/)) {$('#subnav-research-insight').addClass('active');} 
    else if (p.match(/outlook/)) {$('#subnav-research-outlook').addClass('active');} 
    else if (p.match(/consumer/)) {$('#subnav-research-consumer').addClass('active');} 
    else if (p.match(/aimi/)) {$('#subnav-research-indices').addClass('active');}   
    else if (p.match(/data/)) {$('#subnav-research-datasets').addClass('active');}   
  }
}

fakeNav();