const { Post } = require('../../model/article')
module.exports = async (req, res) => {
  console.log(req.fields);
  const article = await Post.create(req.fields)
  console.log(article);
  res.send({meta: 200});
}