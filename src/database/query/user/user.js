const { connection } = require('../../config');

const signupQuery = ({
  email,
  password,
  username,
  firstName,
  lastName,
  phone,
}) => {
  const sql = {
    text: 'INSERT INTO users (email, password, username, firstName, lastName, phone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
    values: [email, password, username, firstName, lastName, phone],
  };
  connection.query(sql);
};
module.exports = signupQuery;
