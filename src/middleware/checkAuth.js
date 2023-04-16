const { promiseVerify } = require('../helpers');

const checkAuth = (req, res, next) => {
  if (req.cookies.token) {
    promiseVerify(req.cookies.token)
      .then((data) => {
        req.userId = data.id;
        next();
      })
      .catch(console.log);
  } else {
    res.status(401).redirect('/page/index');
  }
};
module.exports = checkAuth;
