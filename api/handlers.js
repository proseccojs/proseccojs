var meetup = require('./meetup.js');

module.exports = {

  home: function(request, reply) {
    reply.file('./public/index.html');
  },

  pix: function(request, reply) {
    var url = meetup.makeUrlMeetup();
    console.log(url);
    var meetupData = meetup.meetupGetRequest(url, function (data) {
      console.log(data);
    });
    reply(meetupData);
  }

};
