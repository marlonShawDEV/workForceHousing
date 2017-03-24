
// highlight and collapse nav tertiary sections

function tertiaryNav(){
  var $navList = $('.tertiary-nav').find('ul:first') || '',
  $navLinks = $navList.find('a'),
  p = location.pathname.match(/\/$/) ? location.pathname + "index.html" : location.pathname, 
  h='';
  $navList.find('ul').addClass('hide');
  $navLinks.each(function(){
    h = $(this).attr('href').match(/\/$/) ? $(this).attr('href') + "index.html" : $(this).attr('href');
    if(h !== p) { return; }
    $(this).addClass('active').parents('li').addClass('parent');  
    $(this).closest('ul.hide').removeClass('hide').parent('li').addClass('data-expanded');
    if($(this).siblings('ul').length) {       
      $(this).siblings('ul').removeClass('hide');
      $(this).closest('li').addClass('data-expanded'); 
    }
  });
}

if ($(".tertiary-nav").length) {tertiaryNav();}
