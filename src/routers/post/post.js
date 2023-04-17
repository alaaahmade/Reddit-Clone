const express = require('express');
const { addPost } = require('../../controllers');
const checkAuth = require('../../middleware/checkAuth');
const getPosts = require('./getposts');

const postRouter = express.Router();

postRouter.post('/add', checkAuth, addPost);
postRouter.get('/get', getPosts);

module.exports = postRouter;
