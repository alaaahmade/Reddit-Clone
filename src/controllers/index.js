const addComment = require('./comment/addComment');
const getComment = require('./comment/getComent');
const { serverError, clientError } = require('./errors/errors');
const getCreatePost = require('./pages/createpost');
const getIndex = require('./pages/getindex');
const getProfile = require('./pages/getprofile');
const getHome = require('./pages/home');
const getLogin = require('./pages/login');
const getMyProfile = require('./pages/myProfile');
const getSignup = require('./pages/signup');
const addPost = require('./post/post');
const getMyProfileData = require('./user/getMyProfileData');
const getUserData = require('./user/getuserData');
const login = require('./user/login');
const logout = require('./user/logout');
const getProfileData = require('./user/profileData');
const signup = require('./user/signup');
const { addVote } = require('./votes/addVote');
const decreaseVote = require('./votes/decreaseVote');
const getSIndexScore = require('./votes/getIndexScore');
const getScore = require('./votes/getScore');

module.exports = {
  addVote,
  decreaseVote,
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
  addPost,
  getProfile,
  getProfileData,
  getScore,
  getSIndexScore,
  getComment,
  addComment,
  getUserData,
  getMyProfile,
  getMyProfileData,
};
