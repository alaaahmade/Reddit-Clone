BEGIN;

INSERT INTO users (email, password, username, firstName, lastName, phone) 
VALUES ('alaaahmade67@gmail.com', '123456789a','ahmadalaa' ,'ahmad', 'alaa', '1234567890');

INSERT INTO users (email, password, username, firstName, lastName, phone) 
VALUES ('alaaahmade66@gmail.com', '123456789a','alaaahmad' ,'alaa', 'ahmad', '1234567890');

INSERT INTO users (email, password, username, firstName, lastName, phone) 
VALUES ('alaaahmade68@gmail.com', '123456789a','aliali' ,'ali', 'ali', '1234567890');

INSERT INTO users (email, password, username, firstName, lastName, phone) 
VALUES ('alaaahmade69@gmail.com', '123456789a','mohamedahmad' ,'mohamed', 'ahmad', '1234567890');

INSERT INTO users (email, password, username, firstName, lastName, phone) 
VALUES ('alaaahmade70@gmail.com', '123456789a','msterjaber' ,'jaber', 'ahmad', '1234567890');

INSERT INTO users (email, password, username, firstName, lastName, phone) 
VALUES ('alaaahmade71@gmail.com', '123456789a','hodaahmad' ,'hoda', 'ahmad', '1234567890');

------------------------------------------------------------------------------

insert into posts (title, content, imageUrl, userId ) 
VALUES ('fake Post', 'fake post fake post fake post fake post', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gazeta_Express_Logo.png', 1);

insert into posts (title, content, imageUrl, userId ) 
VALUES ('fake Post', 'fake post fake post fake post fake post', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gazeta_Express_Logo.png', 2);

insert into posts (title, content, imageUrl, userId ) 
VALUES ('fake Post', 'fake post fake post fake post fake post', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gazeta_Express_Logo.png', 3);

insert into posts (title, content, imageUrl, userId ) 
VALUES ('fake Post', 'fake post fake post fake post fake post', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gazeta_Express_Logo.png', 4);

insert into posts (title, content, imageUrl, userId ) 
VALUES ('fake Post', 'fake post fake post fake post fake post', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gazeta_Express_Logo.png', 5);

insert into posts (title, content, imageUrl, userId ) 
VALUES ('fake Post', 'fake post fake post fake post fake post', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gazeta_Express_Logo.png', 6);

INSERT INTO votes (userId, postId, value) VALUES (1, 1, '1');

INSERT INTO votes (userId, postId, value) VALUES (2, 2, '-1');

INSERT INTO votes (userId, postId, value) VALUES (3, 3, '-1');

INSERT INTO votes (userId, postId, value) VALUES (5, 4, '1');


COMMIT;