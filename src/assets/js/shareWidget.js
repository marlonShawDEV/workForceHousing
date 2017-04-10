function shareLinkUpdate1(){
  $(".share-wrapper").each(function(){
    if($(this).hasClass('hide')){$(".share-wrapper").removeClass('hide');}
  });
  var winProps = 'channelmode=no,directories=no,fullscreen=no,location=no,status=no,toolbar=no,modal=yes,alwaysRaised=yes,resizable=yes',
      lnk = encodeURIComponent(location),
      dtlnk = $('.sharelink-twitter')[0].hasAttribute('data-location') ? $('.sharelink-twitter').attr('data-location') : lnk,
      txt= document.title.length ? document.title : $('h1:first').text().length ? $('h1:first').text(): '',
      img = $('meta[property="og:image"]:first').length ? $('meta[property="og:image"]:first').attr('content') : '',
      sum1 = $('meta[property="og:description"]:first').length ? $('meta[property="og:description"]:first').attr('content') : '',
      sum2 = $('meta[name="abstract"]:first').length ? $('meta[name="abstract"]:first').attr('content') : '',
      summary = sum1.length > 5 ? sum1 : sum2.length > 5 ? sum2 : '',
      fblink = 'https://www.facebook.com/sharer/sharer.php?u='+lnk,
      lilink = 'https://www.linkedin.com/shareArticle?mini=true&url='+lnk+'&title='+txt+'&source='+lnk+'&summary='+summary,
      mtlink = 'mailto:?body=Sharing%20link%20'+lnk+'&Subject='+txt,
      twlink = 'https://twitter.com/intent/tweet/?text='+txt+'&url='+dtlnk+'&via=freddiemac';
  $('.sharelink-mailto').attr('href',mtlink);
  $('.sharelink-facebook').attr('href', 'javascript:void(0);').on('click', function(e){ 
      var sharer_modal = window.open(fblink, "_blank", winProps + ',width=600,height=500', true); 
      sharer_modal.opener=null;
      console.log('called '+fblink);
  });	
  $('.sharelink-linkedin').attr('href', 'javascript:void(0);').on('click', function(e){  
      var sharer_modal = window.open(lilink, "_blank", winProps + ',width=800,height=600', true); 
      sharer_modal.opener=null;
      console.log('called '+lilink);
  });	
  $('.sharelink-twitter').attr('href', 'javascript:void(0);').on('click', function(e){ 
      var sharer_modal = window.open(twlink, "_blank", winProps + ',width=500,height=500', true); 
      sharer_modal.opener=null;
      console.log('called '+twlink);
  });	
  $('.share-toggle').on('click', function(){
    $(this).closest('.share-widget').toggleClass('share-opened');
  });
  if (Foundation.MediaQuery.current == 'small') { $(".share-widget").addClass('share-opened'); }
}


if($(".share-widget").length){ shareLinkUpdate1();}
