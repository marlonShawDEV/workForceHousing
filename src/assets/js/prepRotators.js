// prep content for Rotators using Orbit
//automate insertion of Close Buttons and active item highlighting
function orbBulletMarkup(container){
  var orbBullets = '';
  $(container).find('.orbit-slide').each(function(i){
    orbBullets += '<button data-slide="' + i + '"><span class="show-for-sr">slide '+ (i+1) + '</span></button>';  
  }); 
  return orbBullets;
}
function preOrbit() {  
  $(".orbit").each(function(x) {
    var orb = $(this),
    orbContainer = $(this).children(".orbit-container:first"),
    btnPrev = $("<button />",{
      "class": "orbit-previous",
      "aria-label": "Previous",
      "html": '<span class="show-for-sr">previous</span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewbox="0 0 24 24"><path d="M14 1h6L10 12l10 11h-6L4 12z" fill="#ffffff"/></svg>'
    }),
    btnNext = $("<button />",{
      "class": "orbit-next",
      "aria-label": "Next",
      "html": '<span class="show-for-sr">next</span><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewbox="0 0 24 24"><path d="M4 1h6l10 11-10 11H4l10-11z" fill="#ffffff"/></svg>'
    }),
    orbBulletContainer = $("<nav />", {
      "class": "orbit-bullets",
      "html" : orbBulletMarkup(orbContainer)
    });
    if (orbContainer.find('.orbit-slide').length>1){   
      orbContainer.after(orbBulletContainer);
      orbContainer.find('.orbit-slide').eq(0).addClass('is-active'); 
      orb.find('nav').find('button').eq(0).addClass('is-active');
      if(orb.hasClass('bullets-overlay')) {
        orb.find('nav').prepend(btnPrev).append(btnNext);
      }   
      else {
        orbContainer.prepend(btnNext, btnPrev); 
      }
    }     
  });
}

if($(".orbit").length){ 
  preOrbit();
}
