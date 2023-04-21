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
VALUES ('fake Post', 'Sports Academy: Athletic & Education Performance', 'https://www.imgacademy.com/sites/default/files/styles/scale_1700w/public/2022-07/img-homepage-meta_0.jpg?itok=LMirU0Ik', 1);

insert into posts (title, content, imageUrl, userId ) 
VALUES ('fake Post', 'IMG Worlds of Adventure (Dubai) - All You Need to Know', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s', 2);

insert into posts (title, content, imageUrl, userId ) 
VALUES ('fake Post', 'fake post fake post fake post fake post', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YLe3D_HN8E7maI-H1Tg6AFXb5EtluLlb3wA6fC7iKA&s', 3);

insert into posts (title, content, imageUrl, userId ) 
VALUES ('fake Post', 'fake post fake post fake post fake post', 'https://upload.wikimedia.org/wikipedia/commons/8/8c/Gazeta_Express_Logo.png', 6);

insert into posts (title, content, imageUrl, userId ) 
VALUES ('fake Post', 'IMG Worlds of Adventure | Parc tematic acoperit în Dubai', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZScR8dZx0KDQ5ACuC9c8f-y9Ou2d4AC34Zg&usqp=CAU', 4);

insert into posts (title, content, imageUrl, userId ) 
VALUES ('fake Post', 'Amusement Park Tickets at Social Combos - Social Combos', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ3MYNoT8TxU8f0wFhOPn99K0eYjhgKzI1S13PcewZZhwXswtR0ETXt8ur5i22gX-jxHA&usqp=CAU', 5);



INSERT INTO votes (userId, postId, vote) VALUES (1, 1, 'up');

INSERT INTO votes (userId, postId, vote) VALUES (2, 2, 'up');

INSERT INTO votes (userId, postId, vote) VALUES (3, 3, 'up');

INSERT INTO votes (userId, postId, vote) VALUES (1, 4, 'down');
INSERT INTO votes (userId, postId, vote) VALUES (2, 4, 'down');
INSERT INTO votes (userId, postId, vote) VALUES (3, 4, 'up');
INSERT INTO votes (userId, postId, vote) VALUES (4, 4, 'up');




COMMIT;