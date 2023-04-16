const express = require('express');

const {
  login,
  signup,
  serverError,
  clientError,
} = require('../../controllers');

const userRouter = express.Router();

userRouter.post('/login', login);
userRouter.post('/signup', signup);
userRouter.use(clientError);
userRouter.use(serverError);

module.exports = userRouter;
