var shareLinkDecode = function(value){
    return $("<div/>").html(value).text();
  },
  shareLinkUpdate1 = function(){
  var winProps = 'channelmode=no,directories=no,fullscreen=no,location=no,status=no,toolbar=no,modal=yes,alwaysRaised=yes,resizable=yes',
      lnk = encodeURIComponent(location),
      dtlnk =  $('.sharelink-twitter').length && $('.sharelink-twitter')[0].hasAttribute('data-location') ? $('.sharelink-twitter').attr('data-location') : lnk,
      title1= $('meta[property="og:title"]').length && $('meta[property="og:title"]:first').attr('content').length ? $('meta[property="og:title"]:first').attr('content') : $('h1:first').text().length ? $('h1:first').text() : document.title.length ? document.title : '',
      title = encodeURIComponent(shareLinkDecode(title1)),
      img = $('meta[property="og:image"]').length && $('meta[property="og:image"]:first').attr('content').length ? $('meta[property="og:image"]:first').attr('content') : '',
      sum1 = $('meta[property="og:description"]').length && $('meta[property="og:description"]:first').attr('content').length ? shareLinkDecode($('meta[property="og:description"]:first').attr('content')) : '',
      sum2 = $('meta[name="abstract"]').length && $('meta[name="abstract"]:first').attr('content').length ? shareLinkDecode($('meta[name="abstract"]:first').attr('content')) : '',
      summary = sum1.length > 5 ? encodeURIComponent(sum1) : sum2.length > 5 ? encodeURIComponent(sum2) : '',
      fblink = 'https://www.facebook.com/sharer/sharer.php?u='+lnk,
      lilink = 'https://www.linkedin.com/shareArticle?mini=true&url='+lnk+'&title='+title+'&source='+lnk+'&summary='+summary,
      mtlink = 'mailto:?body=You%20might%20be%20interested%20in%20this%20article%20by%20Freddie%20Mac.%20'+title+':%20'+summary+'%20'+lnk+'&Subject='+title,
      twlink = 'https://twitter.com/intent/tweet/?text='+title+'&url='+dtlnk+'&via=freddiemac';

  $('.sharelink-mailto').each(function(){
    $(this).attr('href',mtlink); 
  });
  $('.sharelink-facebook').each(function(){ 
    $(this).attr('href', 'javascript:void(0);').on('click', function(e){ 
      var sharer_modal = window.open(fblink, "_blank", winProps + ',width=600,height=500', true); 
      sharer_modal.opener=null;
    });	
  });
  $('.sharelink-linkedin').each(function(){ 
    $(this).attr('href', 'javascript:void(0);').on('click', function(e){  
      var sharer_modal = window.open(lilink, "_blank", winProps + ',width=800,height=600', true); 
      sharer_modal.opener=null;
    });	
  });
  $('.sharelink-twitter').each(function(){ 
    $(this).attr('href', 'javascript:void(0);').on('click', function(e){ 
      var sharer_modal = window.open(twlink, "_blank", winProps + ',width=500,height=500', true); 
      sharer_modal.opener=null;
    });
  });	
};

$(function(){  
  $(".share-wrapper").filter('.hide').each(function(){
    $(".share-wrapper").removeClass('hide');
  });
  if($(".share-widget").length){ shareLinkUpdate1(); }
});
