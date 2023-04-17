const { connection } = require('../../config');

const getPostsQ = () => {
  const sql = 'SELECT title, content, imageUrl, userId, created_at, username FROM POSTS LEFT JOIN users ON users.id =POSTS.userId;';
  return connection.query(sql);
};

module.exports = getPostsQ;
