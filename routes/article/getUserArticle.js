const { Post } = require('../../model/article')
module.exports = async (req, res) => {
    id = req.query.userId.toString()
    pageNum = parseInt(req.query.pageNum);
    const length = (await Post.find({ author: id})).length;
    var articles= await Post.find({ author: id})
        .populate(['author','category'])
        .sort({_id: -1}).limit(5).skip(5*(pageNum-1))
    res.send({article: articles, meta: 200, total: length});
}