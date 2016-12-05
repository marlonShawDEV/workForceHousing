var mediaBreakpoints = {
	mobile: function() {
		if ( $('#isMobile').css('display') == 'block' ) {
      return true;
    } else {
      return false;
    }
	},
	tablet: function() {
		if ( $('#isTablet').css('display') == 'block' ) {
      return true;
    } else {
      return false;
    }
	},
	desktop: function() {
		if ( $('#isDesktop').css('display') == 'block' ) {
      return true;
    } else {
      return false;
    }
	}
};
