var Hapi = require('hapi'),
    server = new Hapi.Server();

server.connection({
  port: 8000
});

server.route(require('./routes.js'));

server.start(function() {
  console.log('Server running at: ' + server.info.uri + '!');
});

module.exports = server;
