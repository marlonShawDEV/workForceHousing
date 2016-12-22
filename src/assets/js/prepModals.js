//  prep content for modals by adding buttons
function preReveal() {
  //automate insertion of Close Buttons
  $(".reveal[id][data-reveal]").each(function(){
    var  obj = $(this), 
    i = obj.attr('id'),
    btnClose = $("<button />",{
    "class": "close-button-large",
    "aria-label": "Close modal",
    "data-close": "",
    "type": "button",
    "html": "<span class='show-for-sr'>Close</span>"
    });
    // full overlays & image modals get different close button  
    if (obj.hasClass('overlay-video')) { 
      obj.append(btnClose);
    }
    else if (obj.hasClass('overlay-image')) { 
      obj.append(btnClose);
    }
    else { 
      obj.find('.modal-header:first').append(btnClose);
      obj.attr('data-animation-in', "scale-in-up").attr('data-animation-out', "scale-out-down").addClass('fast');      
    } 
    // for video & image modals, remove the non-js fall back hyperlink  
    $('[data-open="'+i+'"][href]').each(function(){ 
      $(this).removeAttr('href');
    });
  });
}

if($(".reveal").length){preReveal();}
 