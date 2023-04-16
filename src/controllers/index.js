const { serverError, clientError } = require('./errors/errors');
const getCreatePost = require('./pages/createpost');
const getIndex = require('./pages/getindex');
const getHome = require('./pages/home');
const getLogin = require('./pages/login');
const getSignup = require('./pages/signup');
const login = require('./user/login');
const logout = require('./user/logout');
const signup = require('./user/signup');

module.exports = {
  login,
  signup,
  serverError,
  clientError,
  getHome,
  getIndex,
  getLogin,
  getSignup,
  getCreatePost,
  logout,
};
