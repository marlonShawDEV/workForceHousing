if(typeof jQuery.urlShortener !== "undefined") {
  jQuery.urlShortener.settings.apiKey='AIzaSyDAg5VvraTof2uGrJm-ESMov1q4s24o_70';
  jQuery.urlShortener({
    success: function (shortUrl) {
       $('.sharelink-twitter').attr('data-location',shortUrl);
    },
    error: function(err) {
      window.console && console.log(JSON.stringify(err));
    }
  });
}
function shareLinkUpdate1(){
  $(".share-wrapper").each(function(){
    if($(this).hasClass('hide')){$(".share-wrapper").removeClass('hide');}
  });
  var winProps = 'channelmode=no,directories=no,fullscreen=no,status=no,toolbar=no,width=400,height=400,modal=yes,alwaysRaised=yes,resizable=yes',
      lnk = encodeURIComponent(location),
      dtlnk = $('.sharelink-twitter')[0].hasAttribute('data-location') ? $('.sharelink-twitter').attr('data-location') : lnk,
      txt= document.title.length ? document.title : $('h1:first').text().length ? $('h1:first').text(): '',
      img = $('meta[property="og:image"]:first').length ? $('meta[property="og:image"]:first').attr('content') : '',
      sum1 = $('meta[property="og:description"]:first').length ? $('meta[property="og:description"]:first').attr('content') : '',
      sum2 = $('meta[name="Description"]:first').length ? $('meta[name="Description"]:first').attr('content') : '', 
      sum3 = $('meta[name="abstract"]:first').length ? $('meta[name="abstract"]:first').attr('content') : '',
      summary = sum1.length > 5 ? sum1 : sum2.length > 5 ? sum2 : sum3.length > 5 ? sum3 : '',
      fblink = 'https://www.facebook.com/sharer/sharer.php?u='+lnk,
      lilink = 'https://www.linkedin.com/shareArticle?mini=true&url='+lnk+'&title='+txt+'&source='+lnk+'&summary='+summary,
      mtlink = 'mailto:?body=Sharing%20link%20'+lnk+'&Subject='+txt,
      twlink = 'https://twitter.com/intent/tweet/?text='+txt+'&url='+dtlnk+'&via=freddiemac';
  $('.sharelink-mailto').attr('href',mtlink);
  $('.sharelink-facebook').attr('href', fblink).on('click', function(e){ e.preventDefault(); 
      var sharer_modal = window.open(fblink, 'Sharer Window', winProps, true); 
      sharer_modal.opener=null;
  });	
  $('.sharelink-linkedin').attr('href', lilink).on('click', function(e){ e.preventDefault(); 
      var sharer_modal = window.open(lilink, 'Sharer Window', winProps, true); 
      sharer_modal.opener=null;
  });	
  $('.sharelink-twitter').attr('href', twlink).on('click', function(e){ e.preventDefault(); 
      var sharer_modal = window.open(twlink, 'Sharer Window', winProps, true); 
      sharer_modal.opener=null;
  });	
  $('.share-toggle').on('click', function(){
    $(this).closest('.share-widget').toggleClass('share-opened');
  });
}

if($(".share-widget").length){ shareLinkUpdate1(); }
