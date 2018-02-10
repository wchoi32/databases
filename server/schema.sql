-- DROP DATABASE chat;
CREATE DATABASE chat;

USE chat; 

DROP TABLE IF EXISTS usernames;
DROP TABLE IF EXISTS rooms;
DROP TABLE IF EXISTS messages;
DROP TABLE IF EXISTS userNamesAndRooms;
DROP TABLE IF EXISTS userNamesAndFriends;

CREATE TABLE usernames (
  username_id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(30) NOT NULL,
  PRIMARY KEY (username_id)
);

CREATE TABLE messages (
  /* Describe your table here.*/
  message_id INT NOT NULL AUTO_INCREMENT,
  message VARCHAR(100) NOT NULL,
  username_id INT,
  PRIMARY KEY (message_id)
);

CREATE TABLE rooms (
  room_id INT NOT NULL AUTO_INCREMENT,
  roomname VARCHAR(30) NOT NULL,
  PRIMARY KEY (room_id)
);

CREATE TABLE userNamesAndRooms (
  username_id INT,
  roomname_id INT
);

-- ALTER TABLE message ADD FOREIGN KEY (username_id) REFERENCES usernames(username_id),
-- ALTER TABLE userNamesAndRooms ADD FOREIGN KEY (username_id) REFERENCES usernames(username_id),
-- ALTER TABLE userNamesAndRooms ADD FOREIGN KEY (roomname_id) REFERENCES rooms(room_id)


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

