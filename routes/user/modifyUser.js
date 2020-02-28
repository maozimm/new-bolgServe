const { User } = require('../../model/user');
module.exports = async (req, res) => {
  var id = req.params.id.toString();
  var old = await User.find({_id:id});
  // 删除图片
  if(old[0].avatar !== req.fields.avatar && req.fields.avatar && old[0].avatar!== 'http://localhost:3000/upload_b3303e7d1bf880fcd2809fb6235058b8.jpg') {
    var fs = require('fs');
    var filepath = 'F:/bolg-server/public/uploads/' + old[0].avatar.split('/')[3];
    fs.unlink(filepath, function(err){
        if(err){
              throw err;
        }
        console.log('文件:'+filepath+'删除成功！');
    })
}
  User.findByIdAndUpdate({_id: id}, {$set: req.fields}, {new: true}).then(res=>{})
  res.send({meta: 200});
};