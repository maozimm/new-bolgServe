const { Comment } = require('../../model/comments')
module.exports = async (req, res) => {
   const id = req.query.id.toString();
   const page = parseInt(req.query.page);
   const length = await Comment.find({post: id});
   total = length.length;
   const comments = await Comment.find({post: id}).populate(['author','post']).sort({'createAt':-1}).limit(5).skip(5*(page-1));  
   res.send({comments: comments, meta: 200, total: total});
}