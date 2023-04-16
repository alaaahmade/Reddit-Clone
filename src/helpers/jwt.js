const jwt = require('jsonwebtoken');
require('dotenv').config();

const promiseSign = ({ logged, userId }) => new Promise((resolve, reject) => {
  jwt.sign({ logged, userId }, process.env.SECRET_KEY, (error, token) => {
    if (error) {
      return reject(error);
    }
    return resolve(token);
  });
});

const promiseVerify = (token) => new Promise((resolve, reject) => {
  jwt.verify(token, process.env.SECRET_KEY, (err, decode) => {
    if (err) {
      return reject(err);
    }
    return resolve(decode);
  });
});

module.exports = { promiseSign, promiseVerify };
