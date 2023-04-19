const {
  checkVote,
  add,
  count,
  remove,
  update,
} = require('../../database');

const decreaseVote = (req, res, next) => {
  const { postId } = req.params;
  const { userId } = req;

  checkVote({ userId, postId, vote: 'down' })
    .then((data) => {
      if (data.rowCount) {
        if (data.rows[0] === 'up') {
          return update({ userId, postId, vote: 'down' });
        }
        return remove({ userId, postId, vote: 'down' });
      }
      return add({ userId, postId, vote: 'down' });
    }).then(() => count({ postId }))
    .then((data) => {
      res.status(200).json({
        score: data.rows.length,
      });
    })
    .catch((err) => next(err));
};

module.exports = decreaseVote;
