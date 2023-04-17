const express = require('express');
const { addPost } = require('../../controllers');
const checkAuth = require('../../middleware/checkAuth');

const postRouter = express.Router();

postRouter.post('/add', checkAuth, addPost);

module.exports = postRouter;
