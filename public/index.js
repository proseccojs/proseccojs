'use strict';

(function() {
  $.get('/loadMeetupImages', function(data) {
    var appendDom = '';
    data = JSON.parse(data);
    data.results.forEach(function(result) {
      appendDom += '<img class="meetupPics" src="' + result.photo.thumb_link + '" />';
    });
    $('#meetup-pics').append(appendDom);
  });
})();

$('body').on('click', '#organisers > a', function() {
  $("#organisers-button").hide();
  $("#organisers-content").fadeIn("slow");
});

$('body').on('click', '.contact > a', function() {
  $("#contact-button").hide();
  $("#contact-form").fadeIn("slow");
});

$('.submitContactForm').click(function() {
  // add form validation here?
  var email = $('.contactFormEmail').val();
  var content = $('.contactFormMessage').val();
  $.post('/sendContactForm', {email: email, content: content}, function(response) {
    $('#contact-form').fadeOut('slow', function() {
      $('#contact-form').replaceWith('<p>Thanks for your input.</p>');
    });
  });
});