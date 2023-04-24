const { connection } = require('../../config');

const PostQuery = (object) => {
  const {
    title,
    content,
    imageUrl,
    id,
  } = object;
  const sql = {
    text: 'insert into posts (title, content, imageUrl, userId ) VALUES ($1, $2, $3, $4) RETURNING title , content , imageUrl',
    values: [title, content, imageUrl, id],
  };
  return connection.query(sql);
};

const getPostsQ = () => {
  const sql = 'SELECT title, content, imageUrl, posts.userId, created_at, posts.id, username FROM POSTS LEFT JOIN users ON users.id =POSTS.userId;';
  return connection.query(sql);
};

const updatePostQ = ({
  postId,
  title,
  content,
  imageUrl,
}) => {
  const sql = {
    text: 'UPDATE posts SET title=$2, content=$3, imageUrl=$4 WHERE id=$1;',
    values: [postId, title, content, imageUrl],
  };
  return connection.query(sql);
};

const deletePostQ = ({ postId, userId }) => {
  const sql = {
    text: 'DELETE FROM posts WHERE id=$1 AND userid=$2;',
    values: [postId, userId],
  };
  return connection.query(sql);
};

module.exports = {
  PostQuery,
  getPostsQ,
  updatePostQ,
  deletePostQ,
};
