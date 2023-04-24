const { getUserPictureQ } = require('../../database');

const getUserPicture = (req, res, next) => {
  const { userId } = req;
  getUserPictureQ(userId)
    .then((data) => {
      if (!data.rows[0].photo) {
        return res.status(200).json({
          error: false,
          img: 'http://localhost:8080/image/reddit.png',
        });
      }
      return res.status(200).json({
        error: false,
        img: data.rows[0].photo,
      });
    }).catch((error) => next(error));
};

module.exports = getUserPicture;
