const { connection } = require('../../config');

const getPostsQ = () => {
  const sql = 'select * from posts';
  return connection.query(sql);
};

module.exports = getPostsQ;
