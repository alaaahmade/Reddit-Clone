const { getComments, addCommentQ } = require('./query/comments/comment');
const {
  addFriendsQ,
  getFriend,
  removeFriendQ,
  getMyFriendsQ,
} = require('./query/friends/friends');
const { PostQuery, getPostsQ, updatePostQ } = require('./query/post/post');
const { ProfileData, usernameQ } = require('./query/user/ProfileData');
const {
  signupQuery,
  loginQuery,
  getUserDataQ,
  getUserPictureQ,
  addUserPictureQ,
} = require('./query/user/user');

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
  ProfileData,
  remove,
  add,
  checkVote,
  count,
  update,
  getComments,
  addCommentQ,
  usernameQ,
  getUserDataQ,
  addFriendsQ,
  getFriend,
  removeFriendQ,
  getMyFriendsQ,
  getUserPictureQ,
  getPostsQ,
  addUserPictureQ,
  updatePostQ,
};
