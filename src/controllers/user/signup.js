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
    .then((data) => signupQuery(data))
    .then((data) => {
      console.log('aaa');
    })
    .catch((error) => {
      next(new CustomError(401, error.details[0].message));
    });
};

module.exports = signup;
