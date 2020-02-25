const { Post } = require('../../model/article');
module.exports = async (req, res) => {
  var id = req.params.id.toString();
  const article = await Post.find({_id: id}).populate(['author','category']);
  console.log(article);
  
  res.send({article:article, meta: 200});
};