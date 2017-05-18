function closestBlockParent(item) {
  $(item).parents().each(function(){
    if ($(this).css('display') == 'block') {
        return $(this);
    }
  });  
}

//  prep content for modals by adding buttons
function preReveal() {
  $(".reveal[id][data-reveal]").not('.overlay-video').each(function(){
    var  obj = $(this), 
    i = obj.attr('id'),
    svgClose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.39 167.39"><path fill="#fff" d="M83.7 0a83.7 83.7 0 1 0 83.7 83.7A83.7 83.7 0 0 0 83.7 0zm42.67 127.06a6.13 6.13 0 0 1-8.67-.07l-34-34.55L49.69 127a6.13 6.13 0 1 1-8.74-8.6L75.1 83.7 41 49a6.13 6.13 0 1 1 8.74-8.6L83.7 75l34-34.55a6.13 6.13 0 1 1 8.74 8.6L92.29 83.7l34.14 34.69a6.13 6.13 0 0 1-.06 8.67z"/></svg>',    
    btnClose = $("<button />",{
    "class": "close-button",
    "aria-label": "Close modal",
    "data-close": "",
    "type": "button",
    "html": "<span aria-hidden='true'>"+svgClose+"</span>"
    });
    if($(this).filter('.overlay-image, .overlay-gallery').length){  
      obj.find('img:first').after(btnClose); 
      $('a[data-open="'+i+'"][href]').on("click",function(e){ e.preventDefault(); });      
    }
    else {
      obj.find('.modal-header:first').append(btnClose);
    }
    obj.not('.overlay-gallery').attr('data-animation-in', "scale-in-up").attr('data-animation-out', "scale-out-down").addClass('fast');
  }); 
}

function preRevealGallery() {
  var galleryRel = [];
  $(".reveal[id][data-reveal]").filter('.overlay-gallery[rel]').each(function(){
    var rel=$(this).attr('rel');
    if ($.inArray(rel,galleryRel) < 0){galleryRel.push(rel);}
  });
  while (galleryRel.length > 0) {
    var $r = galleryRel.shift(), galleryCount = $(".reveal[id][data-reveal]").filter("[rel=" + $r + "]").length;
    $(".reveal[id][data-reveal]").filter("[rel=" + $r + "]").each(function(x){ 
      var  obj = $(this), 
      prevItem = (x == 0) ? (galleryCount - 1) : (x - 1),
      nextItem = (x == galleryCount - 1) ? 0 : (x + 1),
      prevID = $("[rel=" + $r + "]").eq(prevItem).attr('id'),
      nextID = $("[rel=" + $r + "]").eq(nextItem).attr('id'),
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
      obj.attr('data-animation-in', "fade-in").attr('data-animation-out', "fade-out").addClass('fast');
    });
  }   
}
function preRevealVideo() {  
  var w = window.innerWidth|| document.documentElement.clientWidth|| document.body.clientWidth; 
  if (w <= 450) { return; }
  $(".video-modal[data-src]").each(function(x){    
    var $lnk = $(this),
    $src = $lnk.attr('data-src'),
    i = 'videoModal' + x,
    svgClose = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 167.39 167.39"><path fill="#fff" d="M83.7 0a83.7 83.7 0 1 0 83.7 83.7A83.7 83.7 0 0 0 83.7 0zm42.67 127.06a6.13 6.13 0 0 1-8.67-.07l-34-34.55L49.69 127a6.13 6.13 0 1 1-8.74-8.6L75.1 83.7 41 49a6.13 6.13 0 1 1 8.74-8.6L83.7 75l34-34.55a6.13 6.13 0 1 1 8.74 8.6L92.29 83.7l34.14 34.69a6.13 6.13 0 0 1-.06 8.67z"/></svg>',    
    $frameId = 'videoFrame' + x,
    $wrapperClass = $lnk.hasClass('widescreen-video') ?  'responsive-embed widescreen' : 'responsive-embed',
    $parent = closestBlockParent($lnk) || $('body'),
    btnClose = $("<button />",{
    "class": "close-button",
    "aria-label": "Close modal",
    "data-close": "",
    "type": "button",
    "html": "<span aria-hidden='true'>"+svgClose+"</span>"
    }),
    modal = $("<div />",{
      "class": "reveal overlay-video fast",
      "data-reveal": "",
      "data-reset-on-close": true,
      "id": i,
      "data-animation-in" : "scale-in-down",
      "data-animation-out" : "scale-out-up",
      "html": '<div class="' + $wrapperClass + '"><iframe id="'+ $frameId +'" frameborder="0" src="" allowfullscreen></iframe></div>'
    });
    $parent.prepend(modal); 
    $('#'+i).find('.responsive-embed').append(btnClose);
    $lnk.attr('data-open', i).attr('aria-controls', i);
    $('#'+i).on('open.zf.reveal', function(){$('#'+$frameId).attr('src',$src+'&autoplay=1');}).on('closed.zf.reveal', function(){$('#'+$frameId).attr('src','')});
    $('#'+i).on("click",function(){$(this).find('[data-close]').click()});    
    $lnk.on("click",function(e){ 
      w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 
      if (w > 450) { e.preventDefault(); }      
    });   
  });
} 

if($(".reveal").length){ 
  preReveal();
}
if($(".overlay-gallery").length){preRevealGallery();}
if($(".video-modal").length) { preRevealVideo();}


 