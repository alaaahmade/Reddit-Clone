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
    text: 'INSERT INTO users (email, password, username, firstName, lastName, phone) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, username, firstName, lastName',
    values: [email, password, username, firstName, lastName, phone],
  };
  connection.query(sql);
};

const loginQuery = (object) => {
  const { email } = object;
  const sql = {
    text: 'SELECT password, id FROM users WHERE email=$1',
    values: [email],
  };
  return connection.query(sql);
};

module.exports = { signupQuery, loginQuery };
