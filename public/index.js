// $(document).ready(function () {
//   $.get('/pix', function(data) {
//     console.log("hello");
//     if(data) {
//       console.log(data);
//     } else {
//       console.log("no data");
//     }
//   });
// });

$('body').on('click', '#organisers > a', function() {
  $("#organisers-button").hide();
  $("#organisers-content").fadeIn("slow");
});

$('body').on('click', '.contact > a', function() {
  $("#contact-button").hide();
  $("#contact-form").fadeIn("slow");
});
