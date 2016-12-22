var adjustSidebarArticle = {
	init: function(aside) {         
		if( Foundation.MediaQuery.atLeast('large') ) {
			aside.css('margin-top', -(aside.find('.sidebar:first').outerHeight(true)));
		} else {
			aside.css('margin-top', 0);
		}
	}
},
adjustSidebarTertiary = {
	init: function(nav) {         
		if( Foundation.MediaQuery.atLeast('large') && $('.page-title').length) {
			nav.css('margin-top', -($('.page-title:first').outerHeight()/2));
		} else {
			nav.css('margin-top', 0);
		}
	}
};
function initSidebar() {
  var $sdBarArticle = $('.grid-2col-article').find('aside') || '',
      $sdBarTertiary = $('.grid-2col-tertiary').find('.tertiary-nav') || '';
  if($sdBarArticle.length) {
    adjustSidebarArticle.init($sdBarArticle);
    $(window).on('changed.zf.mediaquery', function() {
      adjustSidebarArticle.init($sdBarArticle);
    });   
  }
  else if ($sdBarTertiary.length) {
    adjustSidebarTertiary.init($sdBarTertiary);
    $(window).on('changed.zf.mediaquery', function() {
      adjustSidebarTertiary.init($sdBarTertiary);
    }); 
  }
}  

if($('.grid-2col-article').find('aside:first').length || $('.grid-2col-tertiary').find('.tertiary-nav').length) {
  $(document).ready(initSidebar);  
}

