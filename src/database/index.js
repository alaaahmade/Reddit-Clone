const { PostQuery } = require('./query/post/post');
const { signupQuery, loginQuery } = require('./query/user/user');

module.exports = { signupQuery, loginQuery, PostQuery };
