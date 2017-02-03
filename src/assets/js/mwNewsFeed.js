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
  var tidy = str.replace('(OTCQB: FMCC)','').replace(/\s*MCLEAN,\s*VA--/,'').replace(/Marketwired\s*-\s*/,'').replace(/\s*\(.{3}\s+\d\d?, \d{4}\)\s*-?\s*/,'').replace(/^@/, '').replace(/@/g, '&reg;');
  return tidy;
}
function getMediaRoomData() {
  var mwReq = $.getJSON("http://freddiemac.mwnewsroom.com/scripts/json/js?max=10", function(data) {
      console.log( "success" );
      useMediaRoomData(data);      
  }).done(function() {
    console.log( "done" );
  }).fail(function( jqxhr, textStatus, error ) {
    var err = textStatus + ", " + error;
    console.log( "Request Failed: " + err );
  }).always(function() {
    console.log( "complete" );
  });  
}
  
function getHomePageData() {
  var jqxhr = $.getJSON("http://freddiemac.mwnewsroom.com/scripts/json/js?max=1", function(data) {
      console.log( "success" );
      useHomePageData(data);
  }).done(function() {
    console.log( "done" );
  }).fail(function() {
    console.log( "error" );
  }).always(function() {
    console.log( "complete" );
  }); 
}
function useMediaRoomData(data) {
  var $html = '', $feature = '', $curr = '', $blurb;
  for (var i = 0,len = data.releases.length; i < len; i++) {
    $curr = data.releases[i];
    $blurb = tidyBlurb($curr.intro); 
    if(i == 0)  {
      $feature = '<div class="headline-featured"><div class="article-date-lg">' + convertDate($curr.date) + '</div><h2><a href="' + $curr.url + '">' + $curr.title + '</a></h2><p class="lead">' + $blurb + '</p><p><a class="button hollow" href="' + $curr.url + '">Read More</a></p></div>';
    }  
    else {
      $html += '<li><div class="article-date-lg">' + convertDate($curr.date) + '</div><h3 class="article-headline"><a href="' + $curr.url + '">' + $curr.title + '</a></h3><p>' + $blurb + ' <a href="' + $curr.url + '">More</a></p></li>';    
    }
  }
  $('.recent-headlines-container:first').before($feature).html($html);   
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

if ($('.recent-headlines-container').length)  {  
  getMediaRoomData();
}
if ($('.recent-headline-home').length)  {  
  getHomePageData();
}