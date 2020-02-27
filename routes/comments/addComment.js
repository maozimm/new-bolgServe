const { Comment } = require('../../model/comments')
module.exports = async (req, res) => {
   const comment = await Comment.create(req.fields)
   res.send({comment: comment, meta: 200, total: total});
}