const express = require('express');

const { userRouter } = require('./user');
const { clientError, serverError } = require('../controllers');
const pageRouter = require('./pages/page');

const router = express.Router();

router.use('/user', userRouter);
router.use('/page', pageRouter);
router.use(clientError);
router.use(serverError);

module.exports = router;
