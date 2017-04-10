Foundation.Accordion.defaults.multiExpand = true;
Foundation.Accordion.defaults.allowAllClosed = true;
if (Foundation.MediaQuery.atLeast('medium')) { Foundation.Tabs.matchHeight = true; }
Foundation.Reveal.deepLink = true;
Foundation.Reveal.fullScreen = true;
Foundation.Reveal.resetOnClose = true;
// Reveal closeOnEsc and closeOnClick are both true 
Foundation.Tabs.defaults.deepLink = true;
Foundation.Tabs.defaults.updateHistory = true;
Foundation.Tabs.defaults.deepLinkSmudge = true;

$(document).foundation(); 
