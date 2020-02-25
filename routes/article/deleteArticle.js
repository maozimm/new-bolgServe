const { Post } = require('../../model/article')
module.exports = async (req, res) => {
    var id = req.params.id.toString();
    var old = await Post.find({_id:id});
    // 删除图片
    var fs = require('fs');
    var filepath = 'F:/bolg-server/public/uploads/' + old[0].thumbnail.split('/')[3];
    fs.unlink(filepath, function(err){
        if(err){
            throw err;
        }
        console.log('文件:'+filepath+'删除成功！');
    })
    await Post.deleteOne({_id: id});
    res.send({meta: 200});
}