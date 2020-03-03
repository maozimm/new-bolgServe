const { Post } = require('../../model/article')
module.exports = async (req, res) => {
    category = req.query.category.toString();
    pageNum = parseInt(req.query.pageNum);
    var searchParms = {
        state: 1
    };
    if (category !== '') {
        searchParms.category = category;
    }
    const length = (await Post.find(searchParms)).length;
    var articles= await Post.find(searchParms)
        .populate(['author','category'])
        .sort({_id: -1}).limit(5).skip(5*(pageNum-1))
    res.send({article: articles, meta: 200, total: length});
}