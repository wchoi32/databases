var db = require('../db');
var promise = require('bluebird');

// this handles the back end

module.exports = {
  messages: {
    get: function () {

    }, // a function which produces all the messages
    post: function () {
    // post: function (req, res) {
      // console.log(re)
      // db.query(queryString, queryArgs, function(err, results) {
      //   if (err) throw err;
      // })

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

// request({
//       method: 'POST',
//       uri: 'http://127.0.0.1:3000/classes/users',
//       json: { username: 'Valjean' }
//     }, function () {
//       // Post a message to the node chat server:
//       request({
//         method: 'POST',
//         uri: 'http://127.0.0.1:3000/classes/messages',
//         json: {
//           username: 'Valjean',
//           message: 'In mercy\'s name, three days is all I need.',
//           roomname: 'Hello'
//         }