//  prep content for modals by adding buttons
function preReveal() {
  //automate insertion of Close Buttons
  $(".reveal[id][data-reveal]").each(function(){
    var  obj = $(this), 
    i = obj.attr('id'),
    btnClose = $("<button />",{
    "class": "close-button",
    "aria-label": "Close modal",
    "data-close": "",
    "type": "button",
    "html": "<span aria-hidden='true'>&times</span>"
    });
    // full overlays & image modals get different close button  
    if (obj.hasClass('overlay-video')) { 
      obj.append(btnClose);
    }
    else { 
      obj.find('div:first').append(btnClose); 
    } 
    // for video & image modals, remove the non-js fall back hyperlink  
    if($('[data-open="'+i+'"][href]').length){ 
      $('[data-open="'+i+'"][href]').removeAttr('href');
    }
  });
}

if($(".reveal").length){preReveal();}