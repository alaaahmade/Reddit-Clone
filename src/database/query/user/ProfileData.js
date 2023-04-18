const { connection } = require('../../config');

const ProfileData = (id) => {
  const sql = {
    text: 'SELECT username, title, content, imageUrl, created_at,firstname, lastname  FROM posts LEFT JOIN users ON users.id = posts.userid WHERE userId=$1 ',
    values: [id],
  };
  return connection.query(sql);
};

module.exports = ProfileData;
