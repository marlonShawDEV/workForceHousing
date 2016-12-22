//  homepage toggle through 3 careers photos/quotes
function triggerTestimonial(i) {       
  $(".testimonials-thumbnail").find('.is-active').removeClass('is-active');
  $(".testimonials-thumbnail").eq(i).find('img').addClass('is-active');
  $('.testimonials-quote-container').not('.hide').addClass('hide');
  $('.testimonials-quote-container').eq(i).removeClass('hide');
  $('.testimonial-image-offset').not('.hide').addClass('hide');
  $('.testimonial-image-offset').eq(i).removeClass('hide');
}

if($(".testimonials-thumbnails").length){
  $(".testimonials-thumbnails").removeClass("hide");
  $(".testimonials-thumbnails").find(".testimonials-thumbnail").each(function(i){
    $(this).find('a:first').on("click", function(e){e.preventDefault(); triggerTestimonial(i);});
  }); 
}