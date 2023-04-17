const { promiseVerify, CustomError } = require('../helpers');

const checkAuth = (req, res, next) => {
  if (req.cookies.token) {
    promiseVerify(req.cookies.token)
      .then((data) => {
        req.userId = data.userId;
        next();
      })
      .catch((error) => next(new CustomError(401, error.message)));
  } else {
    res.status(401).redirect('/page/index');
  }
};
module.exports = checkAuth;
