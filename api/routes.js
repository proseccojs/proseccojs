var handlers = require('./handlers.js');

module.exports = [
  {
    method: 'GET',
    path: '/',
    handler: handlers.home
  },

  {
    method: 'GET',
    path: '/static/{path*}',
    handler:  {
      directory: {
        path: './'
      }
    }
  },

  // {
  //   method: 'GET',
  //   path: '/pix',
  //   handler: handlers.pix
  // }

];
