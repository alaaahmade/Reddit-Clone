const express = require('express');
const { join } = require('path');

const parser = require('cookie-parser');
const router = require('./routers/router');
const isLogged = require('./middleware/islogged');

require('dotenv').config();

const app = express();
app.set('PORT', process.env.PORT || 3030);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(parser());
app.disable('x-powered-by');
app.use(express.static(join(__dirname, '..', 'public')));
app.use(router);

module.exports = app;
