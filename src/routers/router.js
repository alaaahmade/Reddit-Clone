const express = require('express');

const { userRouter } = require('./user');
const { clientError, serverError } = require('../controllers');

const router = express.Router();

router.use('/user', userRouter);
router.use(clientError);
router.use(serverError);

module.exports = router;
