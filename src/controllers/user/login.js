const bcrypt = require('bcrypt');

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
      throw new CustomError(401, 'Invalid Email or Password.');
    }).then((isMatch) => {
      if (isMatch) {
        return promiseSign({ logged: true, id: req.userId }, process.env.SECRET_KEY);
      }
      throw new CustomError(401, 'Invalid Email or Password.');
    })
    .then((data) => {
      res.cookie('token', data).status(200).json({ login: true });
    })
    .catch((error) => {
      next(new CustomError(401, error.message));
    });
};

module.exports = login;
