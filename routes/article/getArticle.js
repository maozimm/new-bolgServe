const { Post } = require('../../model/article')
module.exports = async (req, res) => {
   const { state } = req.query;
   category = req.query.category.toString()
   pageNum = parseInt(req.query.pageNum);
   pageSize = parseInt(req.query.pageSize);
   var searchParms = {};
   if (state !== '') {
      searchParms.state = state;
   }
   if (category !== '') {
      searchParms.category = category;
   }
   const length = (await Post.find(searchParms)).length;
   var articles= await Post.find(searchParms)
       .populate(['author','category'])
       .sort({time:1}).limit(pageSize).skip(pageSize*(pageNum-1))
   res.send({article: articles, meta: 200, total: length});
}