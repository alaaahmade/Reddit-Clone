const friendRouter = require('express').Router();

const { addFriends, checkFriend, removeFriend } = require('../../controllers');
const { checkAuth } = require('../../middleware');

friendRouter.get('/add/:friendId', checkAuth, addFriends);
friendRouter.get('/check/:friendId', checkAuth, checkFriend);
friendRouter.get('/remove/:friendId', checkAuth, removeFriend);

module.exports = friendRouter;
