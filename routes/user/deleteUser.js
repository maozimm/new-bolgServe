const { User } = require('../../model/user');
module.exports = async (req, res) => {
  var id = req.params.id.toString();
  await User.deleteOne({_id: id});
  res.send({meta: 200});
};