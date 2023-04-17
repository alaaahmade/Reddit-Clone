const getPostsQ = require('./query/post/getposts');
const { PostQuery } = require('./query/post/post');
const { signupQuery, loginQuery } = require('./query/user/user');

module.exports = {
  signupQuery,
  loginQuery,
  PostQuery,
  getPostsQ,
};
