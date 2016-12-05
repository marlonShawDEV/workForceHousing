
// no longer used for now, replaced calls with built in Foundation.MediaQuery

var mediaBreakpoints = {
	small: function() {
		if ( $('#isSmallBP').css('display') == 'block' ) {
      return true;
    } else {
      return false;
    }
	},
	medium: function() {
		if ( $('#ismediumBP').css('display') == 'block' ) {
      return true;
    } else {
      return false;
    }
	},
	large: function() {
		if ( $('#isLargeBP').css('display') == 'block' ) {
      return true;
    } else {
      return false;
    }
	},
	xlarge: function() {
		if ( $('#isXLargeBP').css('display') == 'block' ) {
      return true;
    } else {
      return false;
    }
	}
};
