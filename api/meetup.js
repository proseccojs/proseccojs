var http = require('http');
var request = require('request');
var prettyjson = require('prettyjson');

function makeUrlMeetup () {
  var url = "http://api.meetup.com/2/members?&sign=true&photo-host=public&group_urlname=Prosecco-js&page=20&api&key=" + process.env.API;
  return url;
}

function meetupGetRequest (url, callback){
  http.get(url, function (response) {
    console.log("omg data");
    console.log("Got response: " + response.statusCode);
    response.on("data", function(chunk) {
      console.log("BODY: " + chunk);
    });
  }).on('error', function(e) {
    console.log("Got error: " + e.message);
  });
}

module.exports = {
  makeUrlMeetup : makeUrlMeetup,
  meetupGetRequest : meetupGetRequest
};
