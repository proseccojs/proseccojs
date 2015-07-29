var Hapi = require('hapi'),
    server = new Hapi.Server();

server.connection({
  port: process.env.PORT
});

server.route(require('./routes.js'));

server.start(function() {
  console.log('Server running at: ' + server.info.uri + '!');
});

module.exports = server;
