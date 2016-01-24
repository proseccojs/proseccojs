'use strict';

var meetup = require('./meetup.js');
var email = require('./email.js');

module.exports = {

  home: function(request, reply) {
    reply.file('./public/index.html');
  },

  loadMeetupImages: function(request, reply) {
    var url = meetup.makeMeetupUrl();
    meetup.requestMeetupImages(url, function(data) {
      reply(data);
    });
  },

  sendContactForm: function(request, reply) {
    email(request.payload.email, request.payload.content);
    reply.close();
  }

};
