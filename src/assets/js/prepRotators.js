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
  $(".orbit").each(function() {
    var orb = $(this),
    orbContainer = $(this).children(".orbit-container:first"),
    btnPrev = $("<button />",{
      "class": "orbit-previous",
      "aria-label": "Previous",
      "html": "<span class='show-for-sr'>previous</span>&#9664;"
    }),
    btnNext = $("<button />",{
      "class": "orbit-next",
      "aria-label": "Next",
      "html": "<span class='show-for-sr'>next</span>&#9654;"
    }),
    lnkPrev = $("<a />",{
      "class": "orbit-previous",
      "aria-label": "Previous",
      "html": "<span class='show-for-sr'>previous</span>"
    }),
    lnkNext = $("<a />",{
      "class": "orbit-next",
      "aria-label": "Next",
      "html": "<span class='show-for-sr'>next</span>"
    }),
    orbBulletContainer = $("<nav />", {
      "class": "orbit-bullets",
      "html" : orbBulletMarkup(orbContainer)
    });
    if (orbContainer.find('.orbit-slide'),length>1){
      orbContainer.after(orbBulletContainer);
      orbContainer.find('.orbit-slide').eq(0).addClass('is-active'); 
      orb.find('nav').find('button').eq(0).addClass('is-active');
      if(orb.hasClass('bullets-overlay')) {
        orb.find('nav').prepend(lnkPrev).append(lnkNext);
      }   
      else {
        orbContainer.prepend(btnNext, btnPrev); 
      }
    }     
  });
}

if($(".orbit").length){preOrbit();}
