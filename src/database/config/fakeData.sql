BEGIN;

INSERT INTO users (email, password, username, firstName, lastName, phone) 
VALUES ('alaaahmade67@gmail.com', '123456789a','ahmadalaa' ,'ahmad', 'alaa', '1234567890');

INSERT INTO users (email, password, username, firstName, lastName, phone) 
VALUES ('alaaahmade655@gmail.com', '123456789a','alaaahmad' ,'alaa', 'ahmad', '1234567890');

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

INSERT INTO votes (userId, postId, vote) VALUES (1, 1, 'up');

INSERT INTO votes (userId, postId, vote) VALUES (2, 2, 'up');

INSERT INTO votes (userId, postId, vote) VALUES (3, 3, 'up');

INSERT INTO votes (userId, postId, vote) VALUES (1, 4, 'down');
INSERT INTO votes (userId, postId, vote) VALUES (2, 4, 'down');
INSERT INTO votes (userId, postId, vote) VALUES (3, 4, 'up');
INSERT INTO votes (userId, postId, vote) VALUES (4, 4, 'up');


InSERT INTO comments (userId, postId, content) VALUES( 1, 6, 'FAKE');
InSERT INTO comments (userId, postId, content) VALUES( 2, 6, 'FAKE');
InSERT INTO comments (userId, postId, content) VALUES( 3, 6, 'FAKE');
InSERT INTO comments (userId, postId, content) VALUES( 4, 6, 'FAKE');
InSERT INTO comments (userId, postId, content) VALUES( 1, 6, 'FAKE');
InSERT INTO comments (userId, postId, content) VALUES( 6, 6, 'FAKE');
InSERT INTO comments (userId, postId, content) VALUES( 1, 6, 'FAKE');
InSERT INTO comments (userId, postId, content) VALUES( 6, 6, 'FAKE');



COMMIT;