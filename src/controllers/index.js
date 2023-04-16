const { serverError, clientError } = require('./errors/errors');
const getHome = require('./pages/home');
const login = require('./user/login');
const signup = require('./user/signup');

module.exports = {
  login,
  signup,
  serverError,
  clientError,
  getHome,
};
