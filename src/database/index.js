const getPostsQ = require('./query/post/getposts');
const { PostQuery } = require('./query/post/post');
const ProfileData = require('./query/user/ProfileData');
const { signupQuery, loginQuery } = require('./query/user/user');
const {
  remove,
  add,
  checkVote,
  count,
  update,
} = require('./query/votes/vote');

module.exports = {
  signupQuery,
  loginQuery,
  PostQuery,
  getPostsQ,
  ProfileData,
  remove,
  add,
  checkVote,
  count,
  update,
};
