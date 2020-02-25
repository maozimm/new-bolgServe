const { Post } = require('../../model/article');
module.exports = async (req, res) => {
  var id = req.params.id.toString();
  await Post.findByIdAndUpdate({_id: id}, {isHot: req.fields.isHot}, {new: true}).then(res=>{});
  res.send({meta: 200});
};