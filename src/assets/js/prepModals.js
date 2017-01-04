function closestBlockParent(item) {
  $(item).parents().each(function(){
    if ($(this).css('display') == 'block') {
        return $(this);
    }
  });  
}


//  prep content for modals by adding buttons
function preReveal() {
  //automate insertion of Close Buttons
  $(".reveal[id][data-reveal]").not('.overlay-gallery, .overlay-image, .overlay-video').each(function(){
    var  obj = $(this), 
    i = obj.attr('id'),
    btnCloseLg = $("<button />",{
    "class": "close-button-large",
    "aria-label": "Close modal",
    "data-close": "",
    "type": "button",
    "html": "<span class='show-for-sr'>Close</span>"
    });
    obj.find('.modal-header:first').append(btnCloseLg);
    obj.attr('data-animation-in', "scale-in-up").attr('data-animation-out', "scale-out-down").addClass('fast');
  }); 
}


function preRevealImage() {
  var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 
  if (w <= 470) { return; }
  $(".reveal[id][data-reveal]").filter('.overlay-image').each(function(){
    var  obj = $(this), 
    i = obj.attr('id'),
    btnClose = $("<button />",{
    "class": "close-button-medium",
    "aria-label": "Close modal",
    "data-close": "",
    "type": "button",
    "html": "<span class='show-for-sr'>Close</span>"
    });
    obj.find('img:first').after(btnClose);
    obj.attr('data-animation-in', "scale-in-up").attr('data-animation-out', "scale-out-down").addClass('fast');
    $('a[data-open="'+i+'"][href]').on("click",function(e){ 
      e.preventDefault();
    });    
  }); 
}
function preRevealGallery() {
  //automate insertion of gallery navigation Buttons
  var galleryRel = [], w = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth; 
  if (w <= 470) { return; }
  $(".reveal[id][data-reveal]").filter('.overlay-gallery[rel]').each(function(){
    var rel=$(this).attr('rel');
    if ($.inArray(rel,galleryRel)< 0){galleryRel.push(rel);}
  });
  while (galleryRel.length > 0) {
    var $r = galleryRel.shift(), galleryCount = $(".reveal[id][data-reveal]").filter("[rel=" + $r + "]").length;
    $(".reveal[id][data-reveal]").filter("[rel=" + $r + "]").each(function(x){ 
      var  obj = $(this), 
      i = obj.attr('id'),
      prevItem = (x == 0) ? (galleryCount - 1) : (x - 1),
      nextItem = (x == galleryCount - 1) ? 0 : (x + 1),
      prevID = $("[rel=" + $r + "]").eq(prevItem).attr('id'),
      nextID = $("[rel=" + $r + "]").eq(nextItem).attr('id'),
      btnClose = $("<button />",{
      "class": "close-button-medium",
      "aria-label": "Close modal",
      "data-close": "",
      "type": "button",
      "html": "<span class='show-for-sr'>Close</span>"
      }),
      btnPrev = $("<button />",{
        "class": "orbit-previous",
        "aria-hidden": true,
        "data-open": prevID,
        "html": '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewbox="0 0 24 24"><path d="M14 1h6L10 12l10 11h-6L4 12z" fill="#ffffff"/></svg>'
      }),
      btnNext = $("<button />",{
        "class": "orbit-next",
        "aria-hidden": true,
        "data-open": nextID,
        "html": '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewbox="0 0 24 24"><path d="M4 1h6l10 11-10 11H4l10-11z" fill="#ffffff"/></svg>'
      });
      obj.find('figure').append(btnNext, btnPrev);
      obj.find('img:first').after(btnClose);
      $('[data-open="'+i+'"][href]').on("click",function(e){ 
        e.preventDefault(); 
      });  
    });
  }   
}
function preRevealVideo() {  
  var w = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth; 
  if (w <= 470) { return; }
  $(".video-modal[data-src]").each(function(x){    
    var $lnk = $(this),
    $src = $lnk.attr('data-src'),
    i = 'videoModal' + x,
    $frameId = 'videoFrame' + x,
    $wrapperClass = $lnk.hasClass('widescreen-video') ?  'responsive-embed widescreen' : 'responsive-embed',
    $parent = closestBlockParent($lnk) || $('body'),
    btnClose = $("<button />",{
    "class": "close-button-medium",
    "aria-label": "Close modal",
    "data-close": "",
    "type": "button",
    "html": "<span class='show-for-sr'>Close</span>"
    }),
    modal = $("<div />",{
      "class": "reveal overlay-video fast",
      "data-reveal": "",
      "data-reset-on-close": true,
      "id": i,
      "data-animation-in" : "scale-in-up",
      "data-animation-out" : "scale-out-down",
      "html": '<div class="' + $wrapperClass + '"><iframe id="'+ $frameId +'" frameborder="0" src="" allowfullscreen></iframe></div>'
    });
    $parent.prepend(modal); 
    $('#'+i).find('.responsive-embed').append(btnClose);
    $lnk.attr('data-open', i).attr('aria-controls', i);
    $('#'+i).on('open.zf.reveal', function(){$('#'+$frameId).attr('src',$src+'&autoplay=1');}).on('closed.zf.reveal', function(){$('#'+$frameId).attr('src','')});
    $('#'+i).on("click",function(){$(this).find('[data-close]').click()});    
    $lnk.on("click",function(e){ 
      e.preventDefault();
    });   
  });
} 

if($(".reveal").length){ preReveal();}
if($(".overlay-image").length) {preRevealImage();}
if($(".overlay-gallery").length){preRevealGallery();}
if($(".video-modal").length) { preRevealVideo();}

 