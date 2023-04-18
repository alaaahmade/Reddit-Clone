const express = require('express');

const {
  login,
  signup,
  logout,
  getProfileData,
} = require('../../controllers');
const { checkAuth, isLogged } = require('../../middleware');

const userRouter = express.Router();
// userRouter.get('/isNew', isNew);

userRouter.get('/profile', getProfileData);
userRouter.get('/logout', checkAuth, logout);

userRouter.use(isLogged);
userRouter.post('/signup', signup);
userRouter.post('/login', login);

module.exports = userRouter;
