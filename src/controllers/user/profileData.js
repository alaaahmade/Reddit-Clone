const { ProfileData } = require('../../database');

const getProfileData = (req, res) => {
  const { userId } = req.params;
  ProfileData(userId)
    .then((data) => {
      console.log(data.rows);
    })
    .catch(console.log);
};

module.exports = getProfileData;
