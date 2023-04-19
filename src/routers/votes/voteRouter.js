const voteRouter = require('express').Router();
const { addVote, decreaseVote } = require('../../controllers');
const { checkAuth } = require('../../middleware');

voteRouter.get('/add/:postId', checkAuth, addVote);
voteRouter.get('/decrease/:postId', checkAuth, decreaseVote);

module.exports = voteRouter;
