const friendRouter = require('express').Router();

const { addFriends, checkFriend, removeFriend, getMyFriends } = require('../../controllers');
const { checkAuth } = require('../../middleware');

friendRouter.use(checkAuth);
friendRouter.get('/add/:friendId', addFriends);
friendRouter.get('/check/:friendId', checkFriend);
friendRouter.get('/remove/:friendId', removeFriend);
friendRouter.get('/myFriends', getMyFriends);

module.exports = friendRouter;
