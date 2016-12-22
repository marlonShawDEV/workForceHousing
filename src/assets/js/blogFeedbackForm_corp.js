// js for feedback form moved here
if($('#blog_feedback').length) { 
  $("#Feedback").on("keydown keyup blur change",function(){FM.form.limitText('#Feedback','#fbcounter',250);}); 
}  