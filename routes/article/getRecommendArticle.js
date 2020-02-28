const { Post } = require('../../model/article')
module.exports = async (req, res) => {
    var articles= await Post.find({state: 1})
        .populate(['author','category'])
        .sort({_id: -1})
    // 取随机数
    function getRandomArrayElements(arr, count) {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    }
    articles = getRandomArrayElements(articles, 5)
   res.send({article: articles, meta: 200});
}