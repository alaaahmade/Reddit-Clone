const { join } = require('path');
const { promiseSign, promiseVerify } = require('../../helpers');

const getProfile = (req, res, next) => {
  const { userId } = req.params;
  promiseSign({ page: userId })
    .then((data) => {
      promiseVerify(data)
        .then(console.log);
    })
    // .then((data) => {
    //   res.status(200).cookie('page', data)
    //     .sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'profile', 'profile.html'));
    // })
    .catch((error) => {
      next(error);
    });
};

module.exports = getProfile;
