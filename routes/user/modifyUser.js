const { User } = require('../../model/user');
module.exports = async (req, res) => {
  var id = req.fields._id;
  User.findByIdAndUpdate({_id: id}, {$set: {status: parseInt(req.fields.status), nickName: req.fields.nickName, role:req.fields.role}}, {new: true}).then(res=>{})
  res.send({meta: 200});
};