BEGIN;

DROP TABLE IF EXISTS users, posts, comments;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    firstName VARCHAR(50) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password text NOT NULL,
    phone INTEGER NOT NULL,
    photo text

);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    content TEXT ,
    image TEXT,
    userId INTEGER ,
    FOREIGN KEY (userId) REFERENCES users(id)
);

COMMIT;
