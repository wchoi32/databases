var models = require('../models');
var promise = require('bluebird');
//this is handling the client side 

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(err, data) {
        if (err) { throw err; }
        // console.log('from controlle index.js wtfsdfsd', data)
        res.send(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      // console.log('still from controller index.js', req);
      var postMessage = req.body.message;
      //console.log(postMessage);
      models.messages.post(postMessage, function(err, data) {
        if (err) { 
          throw err; 
        } else {
          res.send(data);
        }
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      //console.log('res body: ', req.body, 'res: ', res);
      models.users.get(function(err, data) {
        if (err) { throw err; }
        res.json(data);
      });  
    },
    post: function (req, res) {
      //console.log('res body: ', req.body);
      var user = req.body.username;
      models.users.post(user, function(err, data) {
        if (err) { 
          console.log(err);
          throw err; 
        } else { 
          //console.log(data)
          res.send(data); 
        }
      });
    }
  }
};

// var http = require("http");
// var options = {
//   hostname: 'www.postcatcher.in',
//   port: 80,
//   path: '/catchers/544b09b4599c1d0200000289',
//   method: 'POST',
//   headers: {
//       'Content-Type': 'application/json',
//   }
// };
// var req = http.request(options, function(res) {
//   console.log('Status: ' + res.statusCode);
//   console.log('Headers: ' + JSON.stringify(res.headers));
//   res.setEncoding('utf8');
//   res.on('data', function (body) {
//     console.log('Body: ' + body);
//   });
// });
// req.on('error', function(e) {
//   console.log('problem with request: ' + e.message);
// });
// // write data to request body
// req.write('{"string": "Hello, World"}');
// req.end();