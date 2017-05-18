/* MW Scripts for headlines */

function convertDate(dt) {
  var  monthNames = ["", "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"],
    dtParts = dt.split("/"),      
    mm = Number(dtParts[0]), 
    dd = dtParts[1].replace(/^0/, ''),
    str = monthNames[mm] + " " + dd +", 20" + dtParts[2];
  return str;
}
function tidyBlurb(str){
  var tidy = str.replace('(OTCQB: FMCC)','').replace(/\s*MCLEAN,\s*VA--/,'').replace(/Marketwired\s*-\s*/,'').replace(/\s*\(.{3}\s+\d\d?, \d{4}\)\s*-?\s*/,'').replace(/@*\s*Freddie\s+Mac/g, ' Freddie Mac').replace(/@/g, '&reg;');
  return tidy;
}

function getMediaRoomData() {
  var fallback = '<div class="callout large background-primary release-featured"><h2><a href="http://freddiemac.mwnewsroom.com/">Press Release Archive</a></h2><p class="lead">Read the latest news and information about Freddie Mac\'s business.</p><p><a class="button hollow" href="http://freddiemac.mwnewsroom.com/">Read More</a></p></div>',
      mwReq = $.getJSON("//freddiemac.mwnewsroom.com/scripts/json/js?max=10", function(data) {
      useMediaRoomData(data);      
    }).fail(function( jqxhr, textStatus, error ) {
      $('.recent-headlines-container:first').html(fallback);
      var err = textStatus + ", " + error;
      console.log(err);
    });
}

function getInvestorData() {
  var fallback = '<li><h3 class="article-headline"><a href="http://freddiemac.mwnewsroom.com/">Press Releases</a></h3><p>Read the latest news and information about Freddie Mac\'s business.</p></li>',
      mwReq = $.getJSON("//freddiemac.mwnewsroom.com/scripts/json/js?cat=investors&max=3", function(data) {
      useInvestorData(data);         
  }).fail(function( jqxhr, textStatus, error ) {
    $('.investor-headlines-container:first').html(fallback);  
    var err = textStatus + ", " + error;
    console.log(err);
  });  
}

function getHomePageData() {
  var fallback = '<h2 class="homepage-headline icon-chevron-right-circle-blue"><a href="http://freddiemac.mwnewsroom.com/">Press Releases</a></h2><p>Read the latest news and information about Freddie Mac\'s business.</p>',
      mwReq = $.getJSON("//freddiemac.mwnewsroom.com/scripts/json/js?max=1", function(data) {
      useHomePageData(data);
  }).fail(function( jqxhr, textStatus, error ) {
    $('.recent-headline-home:first').html(fallback);   
    var err = textStatus + ", " + error;
    console.log(err);
  }); 
}


function useMediaRoomData(data) {
  var $html = '', $feature = '', $curr = '', $blurb;
  for (var i = 0,len = data.releases.length; i < len; i++) {
    $curr = data.releases[i];
    $blurb = tidyBlurb($curr.intro); 
    if(i == 0)  {
      $feature = '<div class="callout large background-primary release-featured"><div class="article-date-lg">' + convertDate($curr.date) + '</div><h2><a href="' + $curr.url + '">' + $curr.title + '</a></h2><p class="lead">' + $blurb + '</p><p><a class="button hollow" href="' + $curr.url + '">Read More</a></p></div>';
      $('.recent-headlines-container:first').before($feature);
    }  
    else {
      $html += '<li><div class="article-date-lg">' + convertDate($curr.date) + '</div><h3 class="article-headline"><a href="' + $curr.url + '">' + $curr.title + '</a></h3><p>' + $blurb + ' <a href="' + $curr.url + '">More</a></p></li>';    
    }
  }
  $('.recent-headlines-container:first').html($html);   
}

function useInvestorData(data) {
  var $html = '', $feature = '', $curr = '', $blurb;
  for (var i = 0,len = data.releases.length; i < len; i++) {
    $curr = data.releases[i];
    $blurb = tidyBlurb($curr.intro); 
    $html += '<li><div class="article-date-lg">' + convertDate($curr.date) + '</div><h3 class="article-headline"><a href="' + $curr.url + '">' + $curr.title + '</a></h3><p>' + $blurb + ' <a href="' + $curr.url + '">More</a></p></li>';    
  }
  $('.investor-headlines-container:first').html($html);   
}

function useHomePageData(data) {
  var $html = '', $curr = '', $blurb;
  for (var i = 0,len = data.releases.length; i < len; i++) {
    $curr = data.releases[i];     
    $blurb = tidyBlurb($curr.intro); 
    $html += '<h2 class="homepage-headline icon-chevron-right-circle-blue"><a href="' + $curr.url + '">' + $curr.title + '</a></h2><p>' + $blurb + '</p>';               
  }
  if ($html !== '') {
    $('.recent-headline-home:first').html($html);   
  }
}


function dtText(dt) {
  var  monthNames = ["", "January", "February", "March", "April", "May", "June","July", "August", "September", "October", "November", "December"],
    dtParts = dt.split("/"),      
    mm = Number(dtParts[0]), 
    dd = dtParts[1].replace(/^0/, ''),
    str = monthNames[mm] + " " + dd +", 20" + dtParts[2];
  return str;
}
  

if ($('.investor-headlines-container').length)  {  
  getInvestorData();
}
if ($('.recent-headlines-container').length)  {  
  getMediaRoomData();
}
if ($('.recent-headline-home').length)  {  
  getHomePageData();
}