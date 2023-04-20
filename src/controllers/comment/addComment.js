const { addCommentQ } = require('../../database');

const addComment = (req, res, next) => {
  const { postId } = req.params;
  const { userId } = req;
  const { content } = req.body;
  console.log(req.userId);
  addCommentQ({ userId, postId, content })
    .then((data) => console.log(data.rows))
    .catch((error) => next(error));
};

module.exports = addComment;
