const { CustomError } = require('../../helpers');
const { loginSchema } = require('../../validation');

const login = (req, res, next) => {
  const { email, password } = (req.body);
  loginSchema.validateAsync(
    { email, password },
    {
      abortEarly: false,
    },
  ).then((data) => {
    console.log(data);
    res.status(200).json({
      error: false,
      message: 'login successfully',
    });
  })
    .catch((error) => {
      next(new CustomError(401, 'sada'));
      // res.status(401).json({ status: 401, message: error.message });
    });
};

module.exports = login;
