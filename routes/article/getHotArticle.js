const { Post } = require('../../model/article')
module.exports = async (req, res) => {
   pageNum = parseInt(req.query.pageNum);
   pageSize = parseInt(req.query.pageSize);
   const length = (await Post.find({isHot: 1})).length;
   var articles= await Post.find({isHot: 1})
       .populate(['author','category'])
       .sort({time:1}).limit(pageSize).skip(pageSize*(pageNum-1))
   res.send({article: articles, meta: 200, total: length});
}