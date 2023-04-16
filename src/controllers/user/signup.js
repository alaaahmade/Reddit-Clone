const bcrypt = require('bcrypt');

const { signupQuery } = require('../../database');
const { CustomError } = require('../../helpers');
const { signupSchema } = require('../../validation');

const signup = (req, res, next) => {
  const {
    email,
    password,
    confirmPassword,
    username,
    firstName,
    lastName,
    phone,
  } = req.body;
  signupSchema.validateAsync({
    email,
    password,
    confirmPassword,
    username,
    firstName,
    lastName,
    phone,
  }, { abortEarly: false })
    .then((data) => {
      req.data = data;
      return bcrypt.hash(password, 10);
    })
    .then((data) => {
      req.data.password = data;
      return signupQuery(req.data);
    })
    .then(() => {
      res.status(200).json({
        error: false,
        message: 'signup successfully',
      });
    })
    .catch((error) => {
      console.log(error);
      // next(new CustomError(401, error.details[0].message));
    });
};

module.exports = signup;
