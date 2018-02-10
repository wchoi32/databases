-- DROP DATABASE chat;
CREATE DATABASE chat;

USE chat; 

DROP TABLE IF EXISTS usernames;
DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS userNamesAndRooms;
DROP TABLE IF EXISTS userNamesAndFriends;

CREATE TABLE usernames (
  username_id INT NOT NULL,
  username TEXT NOT NULL,
  PRIMARY KEY (username_id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id INT NOT NULL,
  message TEXT NOT NULL,
  username_id INT,
  PRIMARY KEY (message_id)
  -- FOREIGN KEY (username_id) REFERENCES usernames(username_id)
);

CREATE TABLE rooms (
  room_id INT NOT NULL,
  roomname TEXT NOT NULL,
  PRIMARY KEY (room_id)
);

CREATE TABLE userNamesAndRooms (
  username_id INT,
  roomname_id INT
  -- FOREIGN KEY (username_id) REFERENCES usernames(username_id),
  -- FOREIGN KEY (roomname_id) REFERENCES rooms(room_id)
);

CREATE TABLE userNamesAndFriends (
  username_id INT,
  friend_id INT
  -- FOREIGN KEY (username_id) REFERENCES usernames(username_id),
  -- FOREIGN KEY (friend_id) REFERENCES usernames(username_id)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

