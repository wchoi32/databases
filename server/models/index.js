var db = require('../db');
var promise = require('bluebird');

// this handles the back end

module.exports = {
  messages: {
    get: function (callback) {
      // db.query('SELECT message FROM messages ')
//  db.query('select * from messages', (error, results) => {
  //console.log('coming form model /index.js', results);
//})
    }, // a function which produces all the messages
    post: function (body, callback) {
      console.log('model: ', body)
      db.query('INSERT INTO messages (message) VALUES ("In mercys name, three days is all I need.")', (error, results) => {
        if (error) console.log('something went wrong', error);
        console.log('post message: ', results)
        callback(error, results);
        //console.log('coming from server model index.js', results);
      });
    // post: function (req, res) {
      // console.log(re)
      // db.query(queryString, queryArgs, function(err, results) {
      //   if (err) throw err;
      // })

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (name, callback) {
      // db.query('SELECT username FROM usernames ON ');
    },
    post: function (body, callback) {
      //console.log('where are you')
      //console.log('user post: ', body);
      db.query('INSERT INTO usernames (username) VALUES ("' + body + '")', (error, results) => {
        if (error) console.log('something went wrong', error); 
        console.log(results)
        callback(error, results);
        //console.log('coming from server model index.js', results.body.username);
      });
    }
  }
};

module.exports.messages.post('hello', ()=>{
  console.log('working');
});
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