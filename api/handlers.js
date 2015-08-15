var meetup = require('./meetup.js');

module.exports = {

  home: function(request, reply) {
    reply.file('./public/index.html');
  },

  loadMeetupImages: function(request, reply) {
    var url = meetup.makeMeetupUrl();
    meetup.requestMeetupImages(url, function(data) {
      reply(data);
    });
  }

};
