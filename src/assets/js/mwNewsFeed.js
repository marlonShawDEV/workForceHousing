/* MW Scripts for headlines */
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
  var $html = '', $feature = '', $curr = '';
  for (var i = 0,len = data.releases.length; i < len; i++) {
    $curr = data.releases[i];
    if(i == 0)  {
      $feature = '<div class="article-date">' + $curr.date + '</div><h2><a href="' + $curr.url + '">' + $curr.title + '</a></h2><p>' + $curr.intro + '</p><p><a class="button reverse" href="' + $curr.url + '">Read More</a></p>';
    }  
    else {
      $html += '<li><div class="article-date">' + $curr.date + '</div><h4 class="enlarge"><a href="' + $curr.url + '">' + $curr.title + '</a></h4><p>' + $curr.intro + ' <a href="' + $curr.url + '">More</a></p></li>';    
    }
  }
  $('.headline-featured:first').append($feature);
  $('.recent-headlines-container:first').html($html);   
}

function useHomePageData(data) {
  var $html = '', $curr = '';
  for (var i = 0,len = data.releases.length; i < len; i++) {
    $curr = data.releases[i]; 
    $html += '<h2 class="homepage-headline icon-chevron-right-circle-blue"><a href="' + $curr.url + '">' + $curr.title + '</a></h2><p>' + $curr.intro + '</p>';               
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