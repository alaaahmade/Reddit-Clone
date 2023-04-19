const voteRouter = require('express').Router();
const { addVote, decreaseVote, getScore } = require('../../controllers');
const { checkAuth } = require('../../middleware');

voteRouter.get('/get/:postId', getScore);
voteRouter.get('/add/:postId', checkAuth, addVote);
voteRouter.get('/decrease/:postId', checkAuth, decreaseVote);
module.exports = voteRouter;
