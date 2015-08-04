$(document).ready(function () {
  $.get('/pix', function(data) {
    console.log("hello");
    if(data) {
      console.log(data);
    } else {
      console.log("no data");
    }
  });
});

$('body').on('click','.contact', function() {
  $(".contact-button").hide();
  $("#contact-form").fadeIn("slow");
});
