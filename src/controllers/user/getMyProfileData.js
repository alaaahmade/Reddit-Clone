const { ProfileData } = require('../../database');

const getMyProfileData = (req, res, next) => {
  ProfileData(req.userId)
    .then((data) => {
      res.status(200).json(data.rows);
    }).catch((error) => next(error));
};

module.exports = getMyProfileData;
