var adjustSidebarBlog = {
	init: function(aside) {  
    var hero = $('.hero-blended:first').outerHeight() || 0,
    sdBar = aside.find('.sidebar:first').outerHeight(true);        
		if( Foundation.MediaQuery.atLeast('large') ) {     
      if(sdBar < hero) { aside.css('margin-top', -sdBar); }
      else if (hero > 0) { aside.css('margin-top', -(hero/2)); }
			else { aside.css('margin-top', -50); }
		} 
    else {
			aside.removeAttr('style');
		}
	}
},
adjustSidebarNav = {
	init: function(nav) { 
    var  pgTitle = $('.page-title:first').outerHeight() || 0;
		if( Foundation.MediaQuery.atLeast('large') && pgTitle > 0) {
			nav.css('margin-top', -(pgTitle/2));
      nav.closest('aside').css('padding-top', 0);
		} 
    else {
			nav.removeAttr('style');
      nav.closest('aside').removeAttr('style');
		}
	}
};
function initSidebar() {
  var $sdBarBlog = $('.grid-2col-blog').find('aside') || '',
      $sdBarNav = $('.grid-2col').find('.tertiary-nav') || '';
  if($sdBarBlog.length) {
    adjustSidebarBlog.init($sdBarBlog);
    $(window).on('changed.zf.mediaquery', function() {
      adjustSidebarBlog.init($sdBarBlog);
    });   
  }
  else if ($sdBarNav.length) {
    adjustSidebarNav.init($sdBarNav);
    $(window).on('changed.zf.mediaquery', function() {
      adjustSidebarNav.init($sdBarNav);
    }); 
  }
}  
$(function(){
  if($('.grid-2col-blog').find('aside:first').length || $('.grid-2col').find('.tertiary-nav').length) {
    initSidebar();  
  }
});

