BEGIN;

DROP TABLE IF EXISTS users, posts, comments, votes, friends CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    password text NOT NULL,
    phone INTEGER NOT NULL,
    photo text

);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT ,
    imageUrl TEXT,
    userId INTEGER ,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE votes (
  id SERIAL PRIMARY KEY,
  userId INTEGER NOT NULL,
  postId INTEGER NOT NULL,
  vote VARCHAR(20) NOT NULL,
  FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE

);

CREATE TABLE comments(
  id SERIAL PRIMARY KEY,
  content TEXT NOT NULL,
  userId INTEGER,
  postId INTEGER,
  date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (postId) REFERENCES posts(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE friends(
  id SERIAL PRIMARY KEY,
  userId INTEGER,
  friendId INTEGER,
  FOREIGN KEY (userId) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
  FOREIGN KEY (friendId) REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE

);

COMMIT;
