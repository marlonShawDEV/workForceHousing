
// highlight and collapse nav tertiary sections

function tertiaryNav(){
  var $navList = $('.tertiary-nav').find('ul:first') || '',
  $navLinks = $navList.find('a'),
  p = location.pathname, h='';
  if(p.match(/\/$/)){ p = p + "index.html"}
  $navList.find('ul').addClass('hide');
  $navLinks.each(function(){
    h = $(this).attr('href');
    if(h.match(/\/$/)){ h = h + "index.html"}
    if(h === p) { 
     $(this).addClass('active')
     if($(this).closest('.hide').length){
      $(this).closest('.hide').removeClass('hide');     
      if($(this).closest('ul').closest('li').length) {
        $(this).closest('ul').closest('li').addClass('data-expanded');
      }
     }
     else if($(this).siblings('.hide').length) {       
      $(this).siblings('.hide').removeClass('hide');      
      $(this).closest('li').addClass('data-expanded');
     }
    }
  });
}

if ($(".tertiary-nav").length) {tertiaryNav();}
