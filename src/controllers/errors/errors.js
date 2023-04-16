const path = require('path');

const clientError = (req, res) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '..', '..', '..', 'public', 'html', 'error', '404.html'));
};
const serverError = (err, req, res) => {
  if (err.status) {
    res.status(err.status).json({ message: err.message });
  } else {
    res
      .status(500)
      .sendFile(path.join(__dirname, '..', '..', '..', 'public', 'html', 'error', '500.html'));
  }
};
module.exports = { clientError, serverError };
