var models = require('../models');
var promise = require('bluebird');
//this is handling the client side 

module.exports = {
  messages: {
    get: function (req, res) {
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('res body: ', req.body, 'res: ', res);
    },
    post: function (req, res) {
      console.log('res body: ', req.body, 'res: ', res);
    }
  }
};




var http = require("http");
var options = {
  hostname: 'www.postcatcher.in',
  port: 80,
  path: '/catchers/544b09b4599c1d0200000289',
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  }
};
var req = http.request(options, function(res) {
  console.log('Status: ' + res.statusCode);
  console.log('Headers: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (body) {
    console.log('Body: ' + body);
  });
});
req.on('error', function(e) {
  console.log('problem with request: ' + e.message);
});
// write data to request body
req.write('{"string": "Hello, World"}');
req.end();