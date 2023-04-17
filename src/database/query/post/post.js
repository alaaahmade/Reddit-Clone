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

module.exports = { PostQuery };
