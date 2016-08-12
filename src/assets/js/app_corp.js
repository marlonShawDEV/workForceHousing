Foundation.Accordion.defaults.multiExpand = true;
Foundation.Accordion.defaults.allowAllClosed = true;
Foundation.Tabs.matchHeight = true;
$(document).foundation();

function init () {
	// call functions
  adjustSidebar.init();

  // call functions on resize
  $(window).on('resize', function() {
  	adjustSidebar.init();
  });
 
}  
  
$(document).ready(init);
