const { Post } = require('../../model/article');
module.exports = async (req, res) => {
  var id = req.params.id.toString();
  var old = await Post.find({_id:id});
  // 删除旧的图片
  if(old[0].thumbnail !== req.fields.thumbnail) {
      var fs = require('fs');
      var filepath = 'F:/bolg-server/public/uploads/' + old[0].thumbnail.split('/')[3];
      fs.unlink(filepath, function(err){
          if(err){
                throw err;
          }
          console.log('文件:'+filepath+'删除成功！');
      })
  }
  await Post.findByIdAndUpdate({_id: id}, {$set: req.fields}, {new: true}).then(res=>{});
  res.send({meta: 200});
};