const express = require('express');

const {
  login,
  signup,
  logout,

} = require('../../controllers');
// const isLogged = require('../../middleware/islogged');
const { checkAuth, isLogged } = require('../../middleware');

const userRouter = express.Router();

userRouter.get('/logout', checkAuth, logout);

userRouter.use(isLogged);
userRouter.post('/signup', signup);
userRouter.post('/login', login);

module.exports = userRouter;
