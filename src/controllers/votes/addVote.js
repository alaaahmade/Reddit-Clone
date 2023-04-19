const {
  checkVote,
  add,
  count,
  update,
  remove,
} = require('../../database');

const addVote = (req, res, next) => {
  const { postId } = req.params;
  const { userId } = req;

  checkVote({ userId, postId, vote: 'up' })
    .then((data) => {
      if (data.rowCount) {
        if (data.rows[0] === 'down') {
          return update({ userId, postId, vote: 'up' });
        }
        return remove({ userId, postId, vote: 'up' });
      }
      return add({ userId, postId, vote: 'up' });
    }).then(() => count({ postId }))
    .then((data) => {
      res.status(200).json({
        score: data.rows.length,
      });
    })
    .catch((err) => next(err));
};

module.exports = { addVote };
