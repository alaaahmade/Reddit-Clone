const { join } = require('path');

const getHome = (req, res) => {
  console.log(join(__dirname, '..', '..', '..', 'public', 'html', 'home.html'));
  res.status(200).sendFile(join(__dirname, '..', '..', '..', 'public', 'html', 'home.html'));
};

module.exports = getHome;
