Foundation.Accordion.defaults.multiExpand = true;
Foundation.Accordion.defaults.allowAllClosed = true;
Foundation.Tabs.matchHeight = true;
// add highlighting to parent link in desktop nav
$('#desktop-singlefamily-home').addClass('active');
$(document).foundation();

function init () {
	// call functions
  adjustSidebar.init();

  // call functions on resize
  $(window).on('resize', function() {
  	adjustSidebar.init();
  });

}  
  
//$(document).ready(init);
