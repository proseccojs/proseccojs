'use strict';

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
        path: './public/'
      }
    }
  },

  {
    method: 'GET',
    path: '/loadMeetupImages',
    handler: handlers.loadMeetupImages
  },

  {
    method: 'POST',
    path: '/sendContactForm',
    handler: handlers.sendContactForm
  }

];
