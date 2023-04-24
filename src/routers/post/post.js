const express = require('express');
const {
  addPost,
  getComment,
  addComment,
  updatePost,
  deletePost,
} = require('../../controllers');
const checkAuth = require('../../middleware/checkAuth');
const getPosts = require('../../controllers/post/getposts');

const postRouter = express.Router();

postRouter.post('/add', checkAuth, addPost);
postRouter.get('/get', getPosts);
postRouter.get('/comment/:postId', getComment);
postRouter.post('/comment/:postId', checkAuth, addComment);
postRouter.post('/update', checkAuth, updatePost);
postRouter.get('/delete/:postId', checkAuth, deletePost);
module.exports = postRouter;
