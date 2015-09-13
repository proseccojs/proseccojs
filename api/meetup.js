'use strict';

var http = require('http');

module.exports = {
  makeMeetupUrl: function() {
    return "http://api.meetup.com/2/members?&sign=true&photo-host=public&group_urlname=Prosecco-js&page=30&api&key=" + process.env.MEETUP_API;
  },

  requestMeetupImages: function(url, callback) {
    http.get(url, function (res) {
      var body = '';
      res.on('data', function (chunk) {
        body += chunk;
      });
      res.on('end', function() {
        callback(body);
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });
  }
};
