const { connection } = require('../../config');

const PostQuery = (object) => {
  const {
    title,
    content,
    imageUrl,
    userId,
  } = object;
  const sql = {
    text: 'insert into posts (title, content, imageUrl, userId ) VALUES ($1, $2, $3, $4)',
    values: [title, content, imageUrl, userId],
  };
  return connection.query(sql);
};

module.exports = { PostQuery };
