Foundation.Accordion.defaults.multiExpand = true;
Foundation.Accordion.defaults.allowAllClosed = true;
Foundation.Tabs.matchHeight = true;
$(document).foundation();

function init () {
	// call functions
  equalHeights.init();
  adjustSidebar.init();

  // call functions on resize
  $(window).on('resize', function() {
  	equalHeights.init();
  	adjustSidebar.init();
  });

}  
  
$(document).ready(init);
