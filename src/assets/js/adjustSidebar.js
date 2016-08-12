var adjustSidebar = {
	init: function() {
		if( mediaBreakpoints.desktop() ) {
			var sectionHeight = $('.adjust-sidebar').find('section:first').outerHeight();
			$('.adjust-sidebar').css('margin-top', -sectionHeight);
		} else if ( mediaBreakpoints.tablet() ) {
			$('.adjust-sidebar').css('margin-top', -60);
		} else {
			$('.adjust-sidebar').css('margin-top', 0);
		}
	}
};
