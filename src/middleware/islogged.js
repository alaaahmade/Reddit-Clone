const { promiseVerify } = require('../helpers');

const isLogged = (req, res, next) => {
  if (req.cookies.token) {
    promiseVerify(req.cookies.token)
      .then(() => {
        res.status(200).redirect('/page/home');
      })
      .catch(() => {
        res.clearCookie('token');
        next();
      });
  } else {
    next();
  }
};
module.exports = isLogged;
