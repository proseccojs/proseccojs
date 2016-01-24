'use strict';

$(function() {
  $.get('/loadMeetupImages', function(data) {
    var appendDom = JSON.parse(data).results.reduce(function(a, b) {
      if (b.photo) {
        a += '<img class="meetupPics" src="' + b.photo.thumb_link + '" />';
      }
      return a;
    }, '');
    $('#meetup-pics').append(appendDom);
  });

  $('body').on('click', '#organisers > a', function() {
    $("#organisers-button").hide();
    $("#organisers-content").fadeIn("slow");
  });

  $('body').on('click', '.contact > a', function() {
    $("#contact-button").hide();
    $("#contact > p").hide();
    $("#contact-form").fadeIn("slow");
  });

  $('.submitContactForm').click(function() {
    // add form validation here?
    var email = $('.contactFormEmail').val();
    var content = $('.contactFormMessage').val();

    if (!email || !content) {
      return;
    }

    $.post('/sendContactForm', {email: email, content: content}, function(response) {
      $('#contact-form').fadeOut('slow', function() {
        $('#contact-form').replaceWith('<p style="font-size: 20px; padding-bottom: 30px;">Cheers, speak to you soon!</p>');
      });
    });
  });
});