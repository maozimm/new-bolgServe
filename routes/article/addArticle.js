const { Post } = require('../../model/article')
module.exports = async (req, res) => {
  const article = await Post.create(req.fields)
  res.send({meta: 200});
}