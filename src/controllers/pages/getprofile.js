const { join } = require('path');

const getProfile = (req, res) => {
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'profile', 'profile.html'));
};

module.exports = getProfile;
