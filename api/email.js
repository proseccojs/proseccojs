'use strict';

var mandrill = require("mandrill-api/mandrill");
var mandrillClient = new mandrill.Mandrill(process.env.MANDRILL_API);

module.exports = function(email, content) {
  var data = {
   'from_email': email,
   'to': [{
     'email': process.env.ADMIN_EMAIL,
     'name': 'ProseccoJS Person',
     'type': 'to'
    }],
   'autotext': 'true',
   'subject': 'ProseccoJS',
   'html': content
  };

  mandrillClient.messages.send({"message": data, "async": false}, function(result) {
  }, function(e) {
    console.log("Error " + e.message);
  });
};