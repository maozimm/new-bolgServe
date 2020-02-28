const { Post } = require('../../model/article')
module.exports = async (req, res) => {
   pageNum = parseInt(req.query.pageNum);
   const length = (await Post.find({isHot: 1})).length;
   var articles= await Post.find({isHot: 1})
       .populate(['author','category'])
       .sort({_id: -1}).limit(5).skip(5*(pageNum-1))
   res.send({article: articles, meta: 200, total: length});
}