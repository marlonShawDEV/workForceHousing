/* MW Scripts for headlines */

function getMediaRoomData() {
  var url = "http://freddiemac.mwnewsroom.com/scripts/json/js?max=10";
  $.getJSON(url, function(data) {
      useMediaRoomData(data);
  })  
}
function getHomePageData() {
  var url = "http://freddiemac.mwnewsroom.com/scripts/json/js?max=1";
  $.getJSON(url, function(data) {
      useHomePageData(data);
  })  
}
function useMediaRoomData(data) {
  var $html = '', $curr = '';
  for (var i = 0,len = data.releases.length; i < len; i++) {
    $curr = data.releases[i]; 
    $html += '<li><div class="article-date">' + $curr.date + '</div><h3 class="headline-article"><a href="' + $curr.url + '">' + $curr.title + '</a></h3><p>' + $curr.intro + ' <a href="' + $curr.url + '">More</a></p></li>';               
  }
  if ($html !== '') {
    $('.recent-headlines-container:first').html($html);   
  }
}

function useHomePageData(data) {
  var $html = '', $curr = '';
  for (var i = 0,len = data.releases.length; i < len; i++) {
    $curr = data.releases[i]; 
    $html += '';               
  }
  if ($html !== '') {
    $('.recent-headlines-container:first').html($html);   
  }
}

if ($('.recent-headlines-container').length)  {  
  getMediaRoomData();
}
 