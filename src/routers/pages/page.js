const express = require('express');
const {
  getHome,
  getIndex,
  getLogin,
  getSignup,
  getCreatePost,
} = require('../../controllers');
const { checkAuth, isLogged } = require('../../middleware');

const pageRouter = express.Router();

pageRouter.get('/home', checkAuth, getHome);
pageRouter.get('/createpost', checkAuth, getCreatePost);

pageRouter.use(isLogged);
pageRouter.get('/index', getIndex);
pageRouter.get('/login', getLogin);
pageRouter.get('/signup', getSignup);

module.exports = pageRouter;
