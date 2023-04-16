const bcrypt = require('bcrypt');
const { join } = require('path');

const { loginQuery } = require('../../database');
const { CustomError, promiseSign } = require('../../helpers');
const { loginSchema } = require('../../validation');

const login = (req, res, next) => {
  const { email, password } = (req.body);
  loginSchema.validateAsync(
    { email, password },
    {
      abortEarly: false,
    },
  ).then((data) => {
    req.password = data.password;
    return loginQuery(data);
  })
    .then((result) => {
      if (result.rowCount > 0) {
        req.userData = result.rows[0].id;
        return bcrypt.compare(req.password, result.rows[0].password);
      }
      throw new CustomError(500, 'server error');
    }).then((isMatch) => {
      if (isMatch) {
        return promiseSign({ logged: true, id: req.userId }, process.env.SECRET_KEY);
      }
      throw new CustomError(401, 'Invalid Email or Password.');
    })
    .then((data) => {
      res.cookie('token', data);
      res.status(200).sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'home.html'));
    })
    .catch((error) => {
      next(new CustomError(401, 'sada'));
      // res.status(401).json({ status: 401, message: error.message });
    });
};

module.exports = login;
