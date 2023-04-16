const express = require('express');

const {
  login,
  signup,

} = require('../../controllers');
const isLogged = require('../../middleware/islogged');

const userRouter = express.Router();

userRouter.post('/login', isLogged, login);
userRouter.post('/signup', signup);

module.exports = userRouter;
