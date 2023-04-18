const { ProfileData } = require('../../database');
const { promiseVerify, CustomError } = require('../../helpers');

const getProfileData = (req, res, next) => {
  promiseVerify(req.cookies.page)
    .then(console.log)
    .catch(next(new CustomError(401, 'UnAuthorize')));
  // const { userId } = req.params;
  // ProfileData(userId)
  //   .then((data) => {
  //     console.log(data.rows);
  //   })
  //   .catch(console.log);
};

module.exports = getProfileData;
