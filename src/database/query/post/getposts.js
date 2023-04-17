const { connection } = require('../../config');

const getPostsQ = () => {
  const sql = 'SELECT title, content, imageUrl, userId, username FROM POSTS LEFT JOIN users ON users.id =POSTS.userid;';
  return connection.query(sql);
};

module.exports = getPostsQ;
