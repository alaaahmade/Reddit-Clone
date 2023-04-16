const express = require('express');
const { getHome } = require('../../controllers');

const pageRouter = express.Router();

pageRouter.get('/home', getHome);

module.exports = pageRouter;
