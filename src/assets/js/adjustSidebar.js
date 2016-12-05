var adjustSidebar = {
	init: function() {
		if( Foundation.MediaQuery.atLeast('large') ) {
			var sectionHeight = $('.sidebar-article-offset').find('section:first').outerHeight();
			$('.sidebar-article-offset').css('margin-top', -sectionHeight);
		} else {
			$('.sidebar-article-offset').css('margin-top', 0);
		}
	}
};
function initSidebar() {
  adjustSidebar.init();
  $(window).on('changed.zf.mediaquery', function() {
    adjustSidebar.init();
  });
}  

if($('.sidebar-article-offset').length) {
  $(document).ready(initSidebar);  
}

