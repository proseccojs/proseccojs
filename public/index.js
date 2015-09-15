'use strict';

(function() {
  $.get('/loadMeetupImages', function(data) {
    var appendDom = '';
    data = JSON.parse(data);
    data.results.forEach(function(result) {
      appendDom += '<img class="meetup-pics" src="' + result.photo.thumb_link + '" />';
    });
    $('.meetup-pics-container').append(appendDom);
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
