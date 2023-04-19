const {
  checkVote,
  add,
  count,
  remove,
} = require('../../database');

const decreaseVote = (req, res, next) => {
  const { userId } = req;
  const { postId } = req.params;
  checkVote({ userId, postId })
    // eslint-disable-next-line consistent-return
    .then((data) => {
      if (!data.rowCount) {
        return add({ userId, postId, value: '-1' });
      }
      return remove({ userId, postId });
    }).then(() => count({ postId }))
    .then((data) => {
      const array = data.rows;
      const newArray = [];
      array.forEach((e) => {
        newArray.push(+e.value);
      });
      const voteNum = newArray.reduce((pre, cur) => pre + cur, 0);
      res.status(200).json({
        error: false,
        count: voteNum,
      });
    })
    .catch((err) => next(err));
};

module.exports = decreaseVote;
