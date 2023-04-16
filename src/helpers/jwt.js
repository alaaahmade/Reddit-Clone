const jwt = require('jsonwebtoken');
require('dotenv').config();

const promiseSign = (logged, userId) => new Promise((resolve, reject) => {
  jwt.sign({ logged, userId }, process.env.SECRET_KEY, (error, token) => {
    if (error) {
      return reject(error);
    }
    return resolve(token);
  });
});

module.exports = promiseSign;
